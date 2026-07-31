const SHELL_CACHE = "pkm-collection-shell-v3";
const RUNTIME_CACHE = "pkm-collection-runtime-v3";

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
        return res;
      }).catch(() => caches.match(req))
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
