const SHELL_CACHE = "pkm-collection-shell-v4";
const RUNTIME_CACHE = "pkm-collection-runtime-v4";

// Multithreaded emulator cores need SharedArrayBuffer, which the browser
// only exposes on cross-origin-isolated pages — and that needs COOP/COEP
// response headers. GitHub Pages can't set headers, but a Service Worker
// can add them to the responses it serves. The flag rides on the worker's
// own registration URL (sw.js?coi=1) so it survives worker restarts, and
// so toggling it off is just a re-registration.
// COEP "credentialless" is used rather than "require-corp" because the
// emulator CDN doesn't send Cross-Origin-Resource-Policy.
const COI_ENABLED = new URL(self.location.href).searchParams.get("coi") === "1";

function withIsolationHeaders(res) {
  if (!COI_ENABLED || !res || !res.body) return res;
  const headers = new Headers(res.headers);
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Embedder-Policy", "credentialless");
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

const SHELL_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
      // A new SW version just took over. Tabs that were already open won't
      // pick up the new app.js/index.html by themselves until they navigate
      // again — force that instead of relying on the user reloading twice.
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => clients.forEach((client) => client.postMessage({ source: "pkm-sw", type: "activated" })))
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    // App shell (HTML/CSS/JS): always prefer the network so a deploy is
    // visible immediately, falling back to cache only when offline. A
    // cache-first/stale-while-revalidate strategy here previously caused
    // index.html and app.js to drift out of sync across deploys.
    //
    // `fetch(req)` alone can still be satisfied from the browser's plain
    // HTTP cache (below the Service Worker) if GitHub Pages' Cache-Control
    // headers make it look fresh — bypass that layer explicitly so a
    // deploy is never masked by ordinary HTTP caching.
    event.respondWith(
      fetch(req, { cache: "no-store" }).then((res) => {
        caches.open(SHELL_CACHE).then((cache) => cache.put(req, res.clone()));
        return withIsolationHeaders(res);
      }).catch(() => caches.match(req).then(withIsolationHeaders))
    );
    return;
  }

  event.respondWith(
    fetch(req).then((res) => {
      caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, res.clone()));
      return res;
    }).catch(() => caches.match(req))
  );
});
