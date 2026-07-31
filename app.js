const games = [{"title":"Pokémon Red","platform":"GB","generation":"1ª geração","year":1996,"type":"Série principal","region":"Kanto","note":"Versão original da primeira geração.","rating":8.7},{"title":"Pokémon Blue","platform":"GB","generation":"1ª geração","year":1996,"type":"Série principal","region":"Kanto","note":"Versão complementar da primeira geração.","rating":8.7},{"title":"Pokémon Yellow","platform":"GB","generation":"1ª geração","year":1998,"type":"Série principal","region":"Kanto","note":"Edição especial inspirada no anime.","rating":8.8},{"title":"Pokémon Gold","platform":"GBC","generation":"2ª geração","year":1999,"type":"Série principal","region":"Johto","note":"Introduz Johto, ciclo de dia e noite e criação.","rating":9.2},{"title":"Pokémon Silver","platform":"GBC","generation":"2ª geração","year":1999,"type":"Série principal","region":"Johto","note":"Versão complementar de Gold.","rating":9.2},{"title":"Pokémon Crystal","platform":"GBC","generation":"2ª geração","year":2000,"type":"Série principal","region":"Johto","note":"Edição aprimorada de Gold e Silver.","rating":9.3},{"title":"Pokémon Ruby","platform":"GBA","generation":"3ª geração","year":2002,"type":"Série principal","region":"Hoenn","note":"Apresenta Hoenn, habilidades e batalhas em dupla.","rating":8.8},{"title":"Pokémon Sapphire","platform":"GBA","generation":"3ª geração","year":2002,"type":"Série principal","region":"Hoenn","note":"Versão complementar de Ruby.","rating":8.8},{"title":"Pokémon Emerald","platform":"GBA","generation":"3ª geração","year":2004,"type":"Série principal","region":"Hoenn","note":"Edição aprimorada com Battle Frontier.","rating":9.4},{"title":"Pokémon FireRed","platform":"GBA","generation":"3ª geração","year":2004,"type":"Remake","region":"Kanto","note":"Remake moderno de Red.","rating":9.1},{"title":"Pokémon LeafGreen","platform":"GBA","generation":"3ª geração","year":2004,"type":"Remake","region":"Kanto","note":"Remake moderno de Green/Blue.","rating":9.1},{"title":"Pokémon Diamond","platform":"NDS","generation":"4ª geração","year":2006,"type":"Série principal","region":"Sinnoh","note":"Primeira geração principal no Nintendo DS.","rating":8.5},{"title":"Pokémon Pearl","platform":"NDS","generation":"4ª geração","year":2006,"type":"Série principal","region":"Sinnoh","note":"Versão complementar de Diamond.","rating":8.5},{"title":"Pokémon Platinum","platform":"NDS","generation":"4ª geração","year":2008,"type":"Série principal","region":"Sinnoh","note":"Edição aprimorada de Diamond e Pearl.","rating":9.2},{"title":"Pokémon HeartGold","platform":"NDS","generation":"4ª geração","year":2009,"type":"Remake","region":"Johto","note":"Remake de Gold com conteúdo expandido.","rating":9.6},{"title":"Pokémon SoulSilver","platform":"NDS","generation":"4ª geração","year":2009,"type":"Remake","region":"Johto","note":"Remake de Silver com conteúdo expandido.","rating":9.6},{"title":"Pokémon Black","platform":"NDS","generation":"5ª geração","year":2010,"type":"Série principal","region":"Unova","note":"Nova Pokédex regional e história mais elaborada.","rating":9.0},{"title":"Pokémon White","platform":"NDS","generation":"5ª geração","year":2010,"type":"Série principal","region":"Unova","note":"Versão complementar de Black.","rating":9.0},{"title":"Pokémon Black 2","platform":"NDS","generation":"5ª geração","year":2012,"type":"Sequência","region":"Unova","note":"Sequência direta ambientada dois anos depois.","rating":9.4},{"title":"Pokémon White 2","platform":"NDS","generation":"5ª geração","year":2012,"type":"Sequência","region":"Unova","note":"Versão complementar de Black 2.","rating":9.4},{"title":"Pokémon X","platform":"3DS","generation":"6ª geração","year":2013,"type":"Série principal","region":"Kalos","note":"Primeira aventura principal totalmente em 3D.","rating":8.5},{"title":"Pokémon Y","platform":"3DS","generation":"6ª geração","year":2013,"type":"Série principal","region":"Kalos","note":"Versão complementar de X.","rating":8.5},{"title":"Pokémon Omega Ruby","platform":"3DS","generation":"6ª geração","year":2014,"type":"Remake","region":"Hoenn","note":"Remake de Ruby com Mega Evolução.","rating":8.8},{"title":"Pokémon Alpha Sapphire","platform":"3DS","generation":"6ª geração","year":2014,"type":"Remake","region":"Hoenn","note":"Remake de Sapphire com Mega Evolução.","rating":8.8},{"title":"Pokémon Sun","platform":"3DS","generation":"7ª geração","year":2016,"type":"Série principal","region":"Alola","note":"Estrutura de ilhas e provas insulares.","rating":8.4},{"title":"Pokémon Moon","platform":"3DS","generation":"7ª geração","year":2016,"type":"Série principal","region":"Alola","note":"Versão complementar de Sun.","rating":8.4},{"title":"Pokémon Ultra Sun","platform":"3DS","generation":"7ª geração","year":2017,"type":"Série principal","region":"Alola","note":"Versão expandida de Sun.","rating":8.6},{"title":"Pokémon Ultra Moon","platform":"3DS","generation":"7ª geração","year":2017,"type":"Série principal","region":"Alola","note":"Versão expandida de Moon.","rating":8.6},{"title":"Pokémon Let's Go, Pikachu!","platform":"Switch","generation":"7ª geração","year":2018,"type":"Remake","region":"Kanto","note":"Releitura acessível de Pokémon Yellow.","rating":8.1},{"title":"Pokémon Let's Go, Eevee!","platform":"Switch","generation":"7ª geração","year":2018,"type":"Remake","region":"Kanto","note":"Versão complementar com Eevee.","rating":8.1},{"title":"Pokémon Sword","platform":"Switch","generation":"8ª geração","year":2019,"type":"Série principal","region":"Galar","note":"Introduz a Área Selvagem e Dynamax.","rating":8.0},{"title":"Pokémon Shield","platform":"Switch","generation":"8ª geração","year":2019,"type":"Série principal","region":"Galar","note":"Versão complementar de Sword.","rating":8.0},{"title":"Pokémon Brilliant Diamond","platform":"Switch","generation":"8ª geração","year":2021,"type":"Remake","region":"Sinnoh","note":"Remake fiel de Diamond.","rating":7.2},{"title":"Pokémon Shining Pearl","platform":"Switch","generation":"8ª geração","year":2021,"type":"Remake","region":"Sinnoh","note":"Remake fiel de Pearl.","rating":7.2},{"title":"Pokémon Legends: Arceus","platform":"Switch","generation":"8ª geração","year":2022,"type":"Ação/RPG","region":"Hisui","note":"Exploração aberta no passado de Sinnoh.","rating":9.1},{"title":"Pokémon Scarlet","platform":"Switch","generation":"9ª geração","year":2022,"type":"Série principal","region":"Paldea","note":"Estrutura de mundo aberto.","rating":7.6},{"title":"Pokémon Violet","platform":"Switch","generation":"9ª geração","year":2022,"type":"Série principal","region":"Paldea","note":"Versão complementar de Scarlet.","rating":7.6},{"title":"Pokémon Pinball","platform":"GBC","generation":"Clássicos","year":1999,"type":"Spin-off","region":"—","note":"Pinball temático com captura de Pokémon.","rating":8.0},{"title":"Pokémon Trading Card Game","platform":"GBC","generation":"Clássicos","year":1998,"type":"Spin-off","region":"—","note":"RPG baseado no jogo de cartas.","rating":8.4},{"title":"Pokémon Mystery Dungeon: Red Rescue Team","platform":"GBA","generation":"Spin-offs","year":2005,"type":"Mystery Dungeon","region":"—","note":"RPG de masmorras com Pokémon como protagonistas.","rating":8.1},{"title":"Pokémon Mystery Dungeon: Explorers of Sky","platform":"NDS","generation":"Spin-offs","year":2009,"type":"Mystery Dungeon","region":"—","note":"Uma das histórias mais elogiadas da série.","rating":9.3},{"title":"Pokémon Ranger","platform":"NDS","generation":"Spin-offs","year":2006,"type":"Ranger","region":"Fiore","note":"Captura por gestos usando a tela de toque.","rating":7.8},{"title":"Pokémon Conquest","platform":"NDS","generation":"Spin-offs","year":2012,"type":"Estratégia","region":"Ransei","note":"Estratégia tática em parceria com guerreiros.","rating":8.8},{"title":"New Pokémon Snap","platform":"Switch","generation":"Spin-offs","year":2021,"type":"Fotografia","region":"Lental","note":"Exploração fotográfica em trilhos.","rating":8.5},{"title":"Pokémon Unbound","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Borrius","note":"Campanha extensa, dificuldade configurável e muitos recursos modernos.","rating":9.6},{"title":"Pokémon Radical Red","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Kanto","note":"Foco em desafio, batalhas competitivas e qualidade de vida.","rating":9.2},{"title":"Pokémon Gaia","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Orbtus","note":"Aventura tradicional em uma região original.","rating":8.8},{"title":"Pokémon Glazed","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Tunod","note":"Várias regiões e longa duração.","rating":8.6},{"title":"Pokémon FireRed: Rocket Edition","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Kanto","note":"Campanha pela perspectiva de um recruta da Equipe Rocket.","rating":9.3},{"title":"Pokémon Inclement Emerald","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Hoenn","note":"Reinterpretação difícil e modernizada de Emerald.","rating":9.0},{"title":"Pokémon Emerald Rogue","platform":"GBA","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"—","note":"Pokémon em formato roguelike, com campanhas curtas e repetíveis.","rating":9.4},{"title":"Pokémon Prism","platform":"GBC","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Nalgo","note":"Hack ambicioso de Crystal com região própria.","rating":8.9},{"title":"Pokémon Crystal Clear","platform":"GBC","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Johto/Kanto","note":"Experiência de mundo aberto baseada em Crystal.","rating":9.1},{"title":"Pokémon Polished Crystal","platform":"GBC","generation":"Projeto de fã","year":"—","type":"Hack ROM","region":"Johto","note":"Versão refinada e expandida de Crystal.","rating":9.0},{"title":"Pokémon Infinite Fusion","platform":"PC/Android","generation":"Projeto de fã","year":"—","type":"Fan game","region":"Kanto","note":"Permite fundir espécies e criar combinações únicas.","rating":9.2},{"title":"Pokémon Reborn","platform":"PC","generation":"Projeto de fã","year":"—","type":"Fan game","region":"Reborn","note":"História extensa, dificuldade alta e cenários urbanos.","rating":8.8},{"title":"Pokémon Rejuvenation","platform":"PC","generation":"Projeto de fã","year":"—","type":"Fan game","region":"Aevium","note":"Grande campanha narrativa inspirada em Reborn.","rating":8.7},{"title":"Pokémon Uranium","platform":"PC","generation":"Projeto de fã","year":"—","type":"Fan game","region":"Tandor","note":"Região própria e criaturas originais.","rating":8.6},{"title":"Pokémon Insurgence","platform":"PC","generation":"Projeto de fã","year":"—","type":"Fan game","region":"Torren","note":"Campanha longa, formas Delta e tom mais sombrio.","rating":8.9}];

const BUILD_ID = "build-12-instant-close-browser-savestate";
const KEY = "pokemon-collection-andre-v1";
const SETTINGS_KEY = "pokemon-collection-andre-emu-settings-v1";
const NOTES_KEY = "pokemon-collection-andre-notes-v1";
const DEFAULT_DATA_PATH = "https://cdn.emulatorjs.org/stable/data/";

const CORE_INFO = {
  GB:  { core: "gb",  label: "Game Boy / Game Boy Color", engine: "gambatte", bios: false, coreOptions: null, ext: ".gb,.sgb" },
  GBC: { core: "gb",  label: "Game Boy / Game Boy Color", engine: "gambatte", bios: false, coreOptions: null, ext: ".gbc,.gb" },
  GBA: { core: "gba", label: "Game Boy Advance", engine: "mgba", bios: true, coreOptions: null, ext: ".gba" },
  NDS: { core: "nds", label: "Nintendo DS", engine: "melonDS / DeSmuME", bios: true, coreOptions: ["melonds","desmume","desmume2015"], ext: ".nds" }
};
const EMULATABLE_PLATFORMS = Object.keys(CORE_INFO);
const CATALOG_ONLY_PLATFORMS = ["3DS","Switch","PC","PC/Android"];
const ROM_EXT_PLATFORMS = { ".gb": ["GB","GBC"], ".sgb": ["GB","GBC"], ".gbc": ["GB","GBC"], ".gba": ["GBA"], ".nds": ["NDS"] };

function extOf(filename) {
  const m = String(filename).match(/(\.[a-z0-9]+)$/i);
  return m ? m[0].toLowerCase() : "";
}
function normalizeForMatch(s) {
  return String(s)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\.[a-z0-9]{1,5}$/i, "")
    .replace(/[([][^)\]]*[)\]]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
function squash(s) { return normalizeForMatch(s).replace(/\s+/g, ""); }
function isLikelyMatch(filename, title) {
  const f = squash(filename), t = squash(title);
  if (!t || !f) return false;
  return f.includes(t) || t.includes(f);
}
function matchScore(filename, title) {
  const f = squash(filename), t = squash(title);
  if (!f || !t) return 0;
  if (f === t) return 3;            // exact match
  if (f.includes(t)) return 2;      // filename contains the full title (typical ROM naming, e.g. tags around it)
  if (t.includes(f)) return 1;      // filename is only a prefix of a longer title — weaker, prone to e.g. "Crystal" vs "Crystal Clear"
  return 0;
}
function matchFileToGames(filename) {
  const platforms = ROM_EXT_PLATFORMS[extOf(filename)];
  if (!platforms) return [];
  return games
    .map((g, i) => ({ g, i, score: matchScore(filename, g.title) }))
    .filter(({ g, score }) => platforms.includes(g.platform) && score > 0);
}
function bestMatchIndex(matches) {
  if (!matches.length) return null;
  const maxScore = Math.max(...matches.map(m => m.score));
  const top = matches.filter(m => m.score === maxScore);
  return top.length === 1 ? top[0].i : null;
}

let state = JSON.parse(localStorage.getItem(KEY) || "{}");
let notes = JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
let settings = Object.assign({
  ndsCore: "melonds",
  dataPath: DEFAULT_DATA_PATH
}, JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}"));

let activeTab = "all";
let activeView = "collection";
let romIndex = new Map();   // i -> {filename, size, addedAt}
let biosInfo = {};          // platform -> {filename, size}
const SAVE_FLUSH_MS = 5000; // passed to EJS_fixedSaveInterval — how often EmulatorJS flushes the save to browser storage

const $ = s => document.querySelector(s);
const icons = {"GB":"🔴","GBC":"🟡","GBA":"🔵","NDS":"🟣","3DS":"🟠","Switch":"⚡","PC":"💻","PC/Android":"📱"};

/* ---------- IndexedDB ---------- */
const DB_NAME = "pokemon-collection-andre-db";
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("roms")) db.createObjectStore("roms");
      if (!db.objectStoreNames.contains("romsMeta")) db.createObjectStore("romsMeta");
      if (!db.objectStoreNames.contains("bios")) db.createObjectStore("bios");
      if (!db.objectStoreNames.contains("biosMeta")) db.createObjectStore("biosMeta");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function idbTx(store, mode) {
  return openDB().then(db => db.transaction(store, mode).objectStore(store));
}
function idbGet(store, key) {
  return idbTx(store, "readonly").then(os => new Promise((res, rej) => {
    const r = os.get(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
}
function idbPut(store, key, value) {
  return idbTx(store, "readwrite").then(os => new Promise((res, rej) => {
    const r = os.put(value, key); r.onsuccess = () => res(); r.onerror = () => rej(r.error);
  }));
}
function idbDelete(store, key) {
  return idbTx(store, "readwrite").then(os => new Promise((res, rej) => {
    const r = os.delete(key); r.onsuccess = () => res(); r.onerror = () => rej(r.error);
  }));
}
function idbGetAll(store) {
  return idbTx(store, "readonly").then(os => new Promise((res, rej) => {
    const keysReq = os.getAllKeys();
    const valsReq = os.getAll();
    let keys, vals;
    keysReq.onsuccess = () => { keys = keysReq.result; done(); };
    valsReq.onsuccess = () => { vals = valsReq.result; done(); };
    keysReq.onerror = valsReq.onerror = () => rej(keysReq.error || valsReq.error);
    function done() { if (keys && vals) res(keys.map((k, idx) => [k, vals[idx]])); }
  }));
}

/* ---------- ROM / BIOS management ---------- */
async function addRom(i, file) {
  const meta = { filename: file.name, size: file.size, addedAt: Date.now() };
  await idbPut("roms", i, file);
  await idbPut("romsMeta", i, meta);
  romIndex.set(i, meta);
  toast(`ROM de "${games[i].title}" adicionada.`);
  render();
}
async function removeRom(i) {
  await idbDelete("roms", i);
  await idbDelete("romsMeta", i);
  romIndex.delete(i);
  toast(`ROM de "${games[i].title}" removida.`);
  render();
}
async function addBios(platform, file) {
  const meta = { filename: file.name, size: file.size };
  await idbPut("bios", platform, file);
  await idbPut("biosMeta", platform, meta);
  biosInfo[platform] = meta;
  toast(`Arquivo de BIOS/firmware salvo para ${CORE_INFO[platform].label}.`);
  renderEmulatorSettings();
}
async function removeBios(platform) {
  await idbDelete("bios", platform);
  await idbDelete("biosMeta", platform);
  delete biosInfo[platform];
  toast(`BIOS/firmware removido para ${CORE_INFO[platform].label}.`);
  renderEmulatorSettings();
}

/* ---------- persistence helpers ---------- */
function saveState() { localStorage.setItem(KEY, JSON.stringify(state)); updateStats(); }
function saveSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }
function saveNotes() { localStorage.setItem(NOTES_KEY, JSON.stringify(notes)); }

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getStatus(i) { return state[i] || "not-started"; }
function statusLabel(s) { return s === "done" ? "Concluído" : s === "playing" ? "Em andamento" : "Não iniciado"; }
function nextStatus(s) { return s === "not-started" ? "playing" : s === "playing" ? "done" : "not-started"; }

function initSelect(id, values) {
  const el = $(id);
  [...new Set(values)].sort().forEach(v => {
    const o = document.createElement("option"); o.value = v; o.textContent = v; el.appendChild(o);
  });
}

function matchesTab(g) {
  if (activeTab === "official") return g.generation !== "Projeto de fã";
  if (activeTab === "fan") return g.generation === "Projeto de fã";
  if (activeTab === "main") return ["Série principal","Remake","Sequência","Ação/RPG"].includes(g.type);
  if (activeTab === "spinoff") return !["Série principal","Remake","Sequência","Ação/RPG","Hack ROM","Fan game"].includes(g.type);
  return true;
}

/* ---------- rendering: collection ---------- */
function render() {
  const grid = $("#grid");
  const q = $("#search").value.toLowerCase().trim();
  const p = $("#platform").value;
  const gen = $("#generation").value;
  const st = $("#status").value;
  const romF = $("#romFilter").value;
  grid.innerHTML = "";

  const filtered = games.map((g, i) => ({ ...g, i })).filter(g => {
    const hay = `${g.title} ${g.region} ${g.note} ${g.type}`.toLowerCase();
    const playable = EMULATABLE_PLATFORMS.includes(g.platform);
    const hasRom = romIndex.has(g.i);
    if (romF === "with-rom" && !(playable && hasRom)) return false;
    if (romF === "without-rom" && !(playable && !hasRom)) return false;
    return (!q || hay.includes(q)) && (!p || g.platform === p) && (!gen || g.generation === gen) &&
           (!st || getStatus(g.i) === st) && matchesTab(g);
  });

  const sort = $("#sort").value;
  filtered.sort((a, b) => {
    if (sort === "rating-desc") return b.rating - a.rating || a.title.localeCompare(b.title, "pt-BR");
    if (sort === "rating-asc") return a.rating - b.rating || a.title.localeCompare(b.title, "pt-BR");
    if (sort === "year-desc") return (Number(b.year) || 0) - (Number(a.year) || 0) || a.title.localeCompare(b.title, "pt-BR");
    if (sort === "year-asc") return (Number(a.year) || 9999) - (Number(b.year) || 9999) || a.title.localeCompare(b.title, "pt-BR");
    if (sort === "name-asc") return a.title.localeCompare(b.title, "pt-BR");
    return a.i - b.i;
  });
  $("#empty").hidden = filtered.length > 0;

  filtered.forEach(g => {
    const s = getStatus(g.i);
    const playable = EMULATABLE_PLATFORMS.includes(g.platform);
    const romMeta = romIndex.get(g.i);
    const card = document.createElement("article");
    card.className = "card" + (s === "done" ? " done" : "") + (romMeta ? " has-rom" : "");

    let romRowHtml = "";
    if (playable) {
      const ext = CORE_INFO[g.platform].ext;
      romRowHtml = `
        <div class="rom-row">
          <span class="badge rom-badge ${romMeta ? "on" : "off"}">${romMeta ? "✅ ROM adicionada" : "⬜ Sem ROM"}</span>
          <label class="file-label">${romMeta ? "Trocar ROM" : "Adicionar ROM"}<input type="file" accept="${ext}" data-action="add-rom" data-i="${g.i}"></label>
          ${romMeta ? `<button class="btn small danger" data-action="remove-rom" data-i="${g.i}">Remover</button>` : ""}
          <button class="btn small" data-action="play" data-i="${g.i}" ${romMeta ? "" : "disabled"}>▶ Jogar</button>
          ${romMeta ? `<span class="rom-filename" title="${romMeta.filename}">${romMeta.filename}</span>` : ""}
        </div>`;
    } else {
      const noteVal = notes[g.i] || "";
      romRowHtml = `
        <div class="rom-row">
          <span class="badge catalog-badge">Somente catálogo (sem emulador integrado)</span>
        </div>
        <div class="note-row">
          <input type="text" class="note-input" placeholder="Onde eu jogo isso (ex.: Switch físico, 3DS, cloud...)" value="${escapeAttr(noteVal)}" data-action="note" data-i="${g.i}">
        </div>`;
    }

    card.innerHTML = `
      <div class="cover">${icons[g.platform] || "🎮"}</div>
      <div class="card-body">
        <div class="badges">
          <span class="badge">${g.platform}</span>
          <span class="badge">${g.type}</span>
          <span class="badge">${g.year}</span>
          <span class="badge rating-badge">★ ${g.rating.toFixed(1)}</span>
        </div>
        <h3>${g.title}</h3>
        <p>${g.note}</p>
        ${romRowHtml}
        <label class="check" title="Toque para mudar o status">
          <input type="checkbox" ${s === "done" ? "checked" : ""}>
          <span>${statusLabel(s)}</span>
        </label>
      </div>`;

    card.querySelector(".check").addEventListener("click", e => {
      e.preventDefault();
      state[g.i] = nextStatus(getStatus(g.i));
      saveState(); render();
    });
    const fileInput = card.querySelector('[data-action="add-rom"]');
    if (fileInput) fileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      if (!isLikelyMatch(file.name, g.title)) {
        const proceed = confirm(`O nome do arquivo "${file.name}" não parece mencionar "${g.title}". Adicionar mesmo assim?`);
        if (!proceed) { e.target.value = ""; return; }
      }
      addRom(g.i, file);
    });
    const removeBtn = card.querySelector('[data-action="remove-rom"]');
    if (removeBtn) removeBtn.addEventListener("click", () => {
      if (confirm(`Remover a ROM de "${g.title}"?`)) removeRom(g.i);
    });
    const playBtn = card.querySelector('[data-action="play"]');
    if (playBtn) playBtn.addEventListener("click", () => openPlayer(g.i));
    const noteInput = card.querySelector('[data-action="note"]');
    if (noteInput) noteInput.addEventListener("input", e => {
      notes[g.i] = e.target.value;
      saveNotes();
    });

    grid.appendChild(card);
  });

  updateStats();
}

function updateStats() {
  const statuses = games.map((_, i) => getStatus(i));
  const done = statuses.filter(s => s === "done").length;
  const playing = statuses.filter(s => s === "playing").length;
  const pct = Math.round(done / games.length * 100);
  $("#totalCount").textContent = games.length;
  $("#doneCount").textContent = done;
  $("#playingCount").textContent = playing;
  $("#romCount").textContent = romIndex.size;
  $("#percentCount").textContent = pct + "%";
  $("#progressText").textContent = `${done} de ${games.length}`;
  $("#progressBar").style.width = pct + "%";
}

/* ---------- rendering: emulator settings ---------- */
function renderEmulatorSettings() {
  const wrap = $("#emuGrid");
  wrap.innerHTML = "";

  EMULATABLE_PLATFORMS.filter((p, idx, arr) => arr.indexOf(p) === idx).forEach(platform => {
    // GB and GBC share the same core card
    if (platform === "GBC" && CORE_INFO.GB.core === CORE_INFO.GBC.core) return;
    const info = CORE_INFO[platform];
    const count = games.reduce((n, g, i) => n + ((g.platform === platform || (platform === "GB" && g.platform === "GBC")) && romIndex.has(i) ? 1 : 0), 0);
    const total = games.filter(g => g.platform === platform || (platform === "GB" && g.platform === "GBC")).length;

    const card = document.createElement("div");
    card.className = "emu-card";
    let coreSelectHtml = "";
    if (info.coreOptions) {
      coreSelectHtml = `
        <div class="emu-field">
          <label>Núcleo do emulador</label>
          <select class="control" data-action="set-core" data-platform="${platform}">
            ${info.coreOptions.map(c => `<option value="${c}" ${settings.ndsCore === c ? "selected" : ""}>${c}</option>`).join("")}
          </select>
        </div>`;
    }
    let biosHtml = "";
    if (info.bios) {
      const meta = biosInfo[platform];
      biosHtml = `
        <div class="emu-field">
          <label>BIOS / firmware (opcional)</label>
          <div class="emu-bios-row">
            <label class="file-label">${meta ? "Trocar arquivo" : "Enviar arquivo"}<input type="file" data-action="add-bios" data-platform="${platform}"></label>
            ${meta ? `<button class="btn small danger" data-action="remove-bios" data-platform="${platform}">Remover</button>` : ""}
            <span class="rom-filename">${meta ? meta.filename : "Nenhum arquivo — o emulador tentará rodar sem BIOS."}</span>
          </div>
        </div>`;
    }

    card.innerHTML = `
      <h3>${icons[platform]} ${info.label}</h3>
      <p class="emu-sub">Núcleo: ${info.engine} · ${count} de ${total} jogos dessa plataforma com ROM adicionada</p>
      ${coreSelectHtml}
      ${biosHtml}
    `;
    wrap.appendChild(card);
  });

  const advCard = document.createElement("div");
  advCard.className = "emu-card";
  advCard.innerHTML = `
    <h3>⚙️ Avançado</h3>
    <p class="emu-sub">Endereço dos arquivos do EmulatorJS (CDN pública, pode trocar se hospedar os arquivos você mesmo).</p>
    <div class="emu-field">
      <label>Caminho dos dados do emulador (EJS_pathtodata)</label>
      <input class="control" type="text" id="dataPathInput" value="${settings.dataPath}">
    </div>
    <button class="btn small secondary" id="saveDataPathBtn" style="margin-top:10px">Salvar</button>
  `;
  wrap.appendChild(advCard);

  const note = document.createElement("div");
  note.className = "catalog-note";
  note.innerHTML = `<strong>3DS, Switch e jogos de PC</strong> aparecem apenas como catálogo (status/nota), sem emulador integrado nesta versão — não há emulação madura de 3DS/Switch em navegador, e projetos nativos como Citra/Yuzu/Ryujinx foram encerrados após ações judiciais da Nintendo em 2024. Para essas plataformas, use hardware ou emulação oficial próprios.`;
  wrap.appendChild(note);

  wrap.querySelectorAll('[data-action="set-core"]').forEach(sel => sel.addEventListener("change", e => {
    settings.ndsCore = e.target.value; saveSettings();
  }));
  wrap.querySelectorAll('[data-action="add-bios"]').forEach(inp => inp.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) addBios(e.target.dataset.platform, file);
  }));
  wrap.querySelectorAll('[data-action="remove-bios"]').forEach(btn => btn.addEventListener("click", () => {
    removeBios(btn.dataset.platform);
  }));
  const dataPathBtn = $("#saveDataPathBtn");
  if (dataPathBtn) dataPathBtn.addEventListener("click", () => {
    const v = $("#dataPathInput").value.trim();
    settings.dataPath = v.endsWith("/") ? v : v + "/";
    saveSettings();
    toast("Caminho de dados do emulador atualizado.");
  });
}

/* ---------- play modal ---------- */
// Reopening the player by tearing down and rebuilding an iframe within the
// same page turned out to leave some of EmulatorJS's internal state (worker,
// audio context, or similar) behind, so a second session could get stuck on
// our loading overlay — a plain page refresh always worked. So "Jogar" and
// "Fechar" now do a real navigation instead: index.html?play=N auto-opens
// that game's player once the catalog data loads, and closing navigates
// back to plain index.html. A full navigation guarantees the browser itself
// tears down every worker/audio/WebGL resource, which is far more reliable
// than trying to do it by hand.
function openPlayer(i) {
  if (!romIndex.has(i)) { toast("Adicione uma ROM antes de jogar."); return; }
  location.href = "index.html?play=" + i;
}

async function startPlayerFromQuery() {
  const raw = new URLSearchParams(location.search).get("play");
  if (raw === null || !/^\d+$/.test(raw)) return;
  const i = Number(raw);
  const g = games[i];
  const meta = romIndex.get(i);
  if (!g || !meta) return;

  const romBlob = await idbGet("roms", i);
  if (!romBlob) { toast("Não foi possível carregar essa ROM."); return; }

  const core = g.platform === "NDS" ? settings.ndsCore : CORE_INFO[g.platform].core;
  const romUrl = URL.createObjectURL(romBlob);
  let biosUrl = "";
  const biosMeta = biosInfo[g.platform];
  if (biosMeta) {
    const biosBlob = await idbGet("bios", g.platform);
    if (biosBlob) biosUrl = URL.createObjectURL(biosBlob);
  }

  const dataPath = settings.dataPath.endsWith("/") ? settings.dataPath : settings.dataPath + "/";
  const srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8">
    <style>
      html,body{margin:0;background:#000;height:100%;overflow:hidden}
      #game{width:100%;height:100%}
      #loadingOverlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
        color:#aab4cd;font:14px/1.5 system-ui,sans-serif;text-align:center;padding:24px;background:#000}
    </style></head>
    <body>
      <div id="game"></div>
      <div id="loadingOverlay">Carregando emulador…</div>
      <script>
        window.EJS_player = '#game';
        window.EJS_core = ${JSON.stringify(core)};
        window.EJS_gameUrl = ${JSON.stringify(romUrl)};
        ${biosUrl ? `window.EJS_biosUrl = ${JSON.stringify(biosUrl)};` : ""}
        window.EJS_pathtodata = ${JSON.stringify(dataPath)};
        window.EJS_gameName = ${JSON.stringify(g.title)};
        window.EJS_gameID = ${JSON.stringify(i)};
        window.EJS_fixedSaveInterval = ${SAVE_FLUSH_MS};
        // Keep manual "save state" / "load state" (from EmulatorJS's own
        // menu) in the browser's storage instead of prompting a file
        // download/upload each time.
        window.EJS_defaultOptions = { "save-state-location": "browser" };
        // Deliberately NOT setting EJS_startOnLoaded: it has known issues
        // (freezes on the loading screen in some builds) and, more
        // importantly, it can race ahead of EmulatorJS's own async lookup
        // of a previous save for this game — starting the core before that
        // finishes boots with an empty save even though one exists. Letting
        // EmulatorJS show its normal "tap to start" UI keeps that lookup
        // safely ahead of the game actually running.

        function notifyParent(status, message) {
          parent.postMessage({ source: "pkm-emu", status: status, message: message || "" }, "*");
        }
        function clearOverlay() {
          var o = document.getElementById("loadingOverlay");
          if (o) o.remove();
        }
        window.EJS_onGameStart = function () { clearOverlay(); notifyParent("started"); };
        // Diagnostic hooks: EmulatorJS is supposed to call these when it
        // writes the game's save file to its own storage, and when it loads
        // a previously-saved one back in. Surfacing them as toasts lets us
        // actually see whether/when that's happening instead of guessing.
        window.EJS_onSaveSave = function () { notifyParent("save-written", "Save gravado pelo emulador."); };
        window.EJS_onLoadSave = function () { notifyParent("save-loaded", "Save carregado pelo emulador."); };
        window.addEventListener("error", function (e) {
          notifyParent("error", (e && e.message) || "Erro desconhecido ao carregar o emulador.");
        });
        setTimeout(function () {
          if (document.getElementById("loadingOverlay")) {
            notifyParent("timeout", "O emulador está demorando muito para iniciar (rede lenta ou bloqueada).");
          }
        }, 20000);

        var loaderScript = document.createElement("script");
        loaderScript.src = ${JSON.stringify(dataPath)} + "loader.js";
        loaderScript.onerror = function () {
          notifyParent("error", "Não foi possível carregar os arquivos do emulador (CDN bloqueada ou sem internet).");
        };
        // Once the library itself has loaded it takes over rendering (its
        // own "tap to start" screen, load progress, etc.) — get our own
        // overlay out of the way so that UI is actually reachable, instead
        // of waiting for EJS_onGameStart (which only fires after the user
        // taps start).
        loaderScript.onload = function () { clearOverlay(); notifyParent("loaded"); };
        document.body.appendChild(loaderScript);
      <\/script>
    </body></html>`;

  $("#playModalTitle").textContent = `${icons[g.platform] || "🎮"} ${g.title}`;
  $("#playModalStatus").hidden = true;
  const body = $("#playModalBody");
  body.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.id = "emuFrame";
  iframe.allow = "gamepad *; fullscreen *; autoplay";
  iframe.allowFullscreen = true;
  iframe.srcdoc = srcdoc;
  body.appendChild(iframe);
  $("#playModal").hidden = false;
}

window.addEventListener("message", (e) => {
  if (!e.data || e.data.source !== "pkm-emu") return;
  const statusEl = $("#playModalStatus");
  if (e.data.status === "started" || e.data.status === "loaded") {
    statusEl.hidden = true;
  } else if (e.data.status === "error" || e.data.status === "timeout") {
    statusEl.hidden = false;
    statusEl.textContent = "⚠️ " + e.data.message;
  } else if (e.data.status === "save-written" || e.data.status === "save-loaded") {
    toast("💾 " + e.data.message);
  }
});

function toggleFullscreen() {
  const iframe = $("#emuFrame");
  if (!iframe) return;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    (iframe.requestFullscreen || iframe.webkitRequestFullscreen)?.call(iframe);
  }
}

function closePlayer() {
  location.href = "index.html";
}

/* ---------- misc UI ---------- */
let toastTimer = null;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function switchView(view) {
  activeView = view;
  $("#collectionView").hidden = view !== "collection";
  $("#emulatorsView").hidden = view !== "emulators";
  document.querySelectorAll(".view-btn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  if (view === "emulators") renderEmulatorSettings();
}

/* ---------- bulk folder import ---------- */
let importCandidates = []; // [{ file, matchIndex }]

function handleFolderImport(fileList) {
  const files = Array.from(fileList).filter(f => ROM_EXT_PLATFORMS[extOf(f.name)]);
  if (!files.length) {
    toast("Nenhum arquivo .gb/.gbc/.sgb/.gba/.nds encontrado nessa pasta.");
    return;
  }
  importCandidates = files.map(file => ({ file, matchIndex: bestMatchIndex(matchFileToGames(file.name)) }));
  renderImportReview();
  $("#importModal").hidden = false;
}

function importOptionsHtml(selectedIndex) {
  const groups = EMULATABLE_PLATFORMS.reduce((acc, p) => {
    if (p === "GBC" && CORE_INFO.GB.core === CORE_INFO.GBC.core) return acc;
    acc[p] = [];
    return acc;
  }, {});
  games.forEach((g, i) => {
    const key = g.platform === "GBC" ? "GB" : g.platform;
    if (groups[key]) groups[key].push(i);
  });
  let html = `<option value="">— não importar —</option>`;
  Object.entries(groups).forEach(([platform, indices]) => {
    html += `<optgroup label="${CORE_INFO[platform].label}">`;
    indices.forEach(i => {
      html += `<option value="${i}" ${i === selectedIndex ? "selected" : ""}>${escapeAttr(games[i].title)}</option>`;
    });
    html += `</optgroup>`;
  });
  return html;
}

function renderImportReview() {
  const list = $("#importList");
  list.innerHTML = "";
  const matchedCount = importCandidates.filter(c => c.matchIndex !== null).length;
  $("#importModalHint").textContent =
    `${importCandidates.length} arquivo(s) encontrados, ${matchedCount} associado(s) automaticamente pelo nome. Confira ou ajuste antes de importar — arquivos sem jogo selecionado não são importados.`;

  importCandidates.forEach((cand, idx) => {
    const row = document.createElement("div");
    row.className = "import-row";
    const overwrite = cand.matchIndex !== null && romIndex.has(cand.matchIndex);
    row.innerHTML = `
      <span class="import-filename" title="${escapeAttr(cand.file.name)}">${cand.file.name}</span>
      <select class="control import-select" data-idx="${idx}">${importOptionsHtml(cand.matchIndex)}</select>
      ${overwrite ? `<span class="import-overwrite-badge">já tem ROM — será substituída</span>` : ""}
    `;
    list.appendChild(row);
  });
}

function confirmImport() {
  const selects = document.querySelectorAll("#importList .import-select");
  let imported = 0;
  selects.forEach((sel, idx) => {
    const val = sel.value;
    if (val === "") return;
    const gameIndex = Number(val);
    addRom(gameIndex, importCandidates[idx].file);
    imported++;
  });
  importCandidates = [];
  $("#importModal").hidden = true;
  toast(imported > 0 ? `${imported} ROM(s) importada(s).` : "Nenhuma ROM selecionada para importar.");
}

function on(selector, event, handler) {
  const el = $(selector);
  if (el) el.addEventListener(event, handler);
  else console.warn(`[init] elemento "${selector}" não encontrado — pulando listener de "${event}" (provavelmente index.html e app.js ficaram em versões diferentes; force um refresh completo).`);
}

/* ---------- init ---------- */
async function init() {
  const buildEl = $("#buildId");
  if (buildEl) buildEl.textContent = "Versão: " + BUILD_ID;
  console.log("Pokémon Collection — versão carregada:", BUILD_ID);

  initSelect("#platform", games.map(g => g.platform));
  initSelect("#generation", games.map(g => g.generation));

  const romEntries = await idbGetAll("romsMeta");
  romEntries.forEach(([k, v]) => romIndex.set(k, v));
  const biosEntries = await idbGetAll("biosMeta");
  biosEntries.forEach(([k, v]) => { biosInfo[k] = v; });

  startPlayerFromQuery();

  // Render the catalog before wiring up any optional/secondary controls, so a
  // missing element (e.g. a stale cached HTML during a deploy) never blocks
  // the whole collection from showing up.
  try {
    render();
  } catch (e) {
    console.error("Falha ao renderizar o catálogo:", e);
  }

  ["#search", "#platform", "#generation", "#status", "#romFilter", "#sort"].forEach(id => on(id, "input", render));
  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    b.classList.add("active"); activeTab = b.dataset.tab; render();
  }));
  document.querySelectorAll(".view-btn").forEach(b => b.addEventListener("click", () => switchView(b.dataset.view)));

  on("#resetBtn", "click", () => {
    if (confirm("Deseja apagar todo o progresso salvo? (as ROMs importadas não serão apagadas)")) {
      state = {}; saveState(); render();
    }
  });

  on("#exportBtn", "click", () => {
    const romList = games.map((g, i) => romIndex.has(i) ? { title: g.title, platform: g.platform, filename: romIndex.get(i).filename } : null).filter(Boolean);
    const payload = { exportedAt: new Date().toISOString(), progress: state, romsAdded: romList, emulatorSettings: settings, notes };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "pokemon-collection-progresso.json"; a.click();
    URL.revokeObjectURL(a.href);
  });

  on("#closePlayModal", "click", closePlayer);
  on("#fullscreenBtn", "click", toggleFullscreen);
  on("#playModal", "click", e => { if (e.target.id === "playModal") closePlayer(); });

  const openPicker = (selector) => {
    try {
      $(selector).click();
    } catch (e) {
      console.error("Falha ao abrir o seletor de arquivos:", e);
      toast("Não foi possível abrir o seletor de arquivos: " + e.message);
    }
  };
  const onPickerChange = (e) => {
    try {
      handleFolderImport(e.target.files);
    } catch (e) {
      console.error("Falha ao importar arquivos:", e);
      toast("Erro ao importar: " + e.message);
    }
    e.target.value = "";
  };
  on("#importFolderBtn", "click", () => openPicker("#folderPicker"));
  on("#folderPicker", "change", onPickerChange);
  on("#importFilesBtn", "click", () => openPicker("#filesPicker"));
  on("#filesPicker", "change", onPickerChange);
  on("#confirmImportBtn", "click", confirmImport);
  on("#closeImportModal", "click", () => { importCandidates = []; $("#importModal").hidden = true; });
  on("#importModal", "click", e => { if (e.target.id === "importModal") { importCandidates = []; $("#importModal").hidden = true; } });
}

/* ---------- PWA: service worker + install prompt ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
  // A new SW version just activated and claimed this tab — reload once so
  // it actually gets the new app.js/index.html instead of sitting on
  // whatever was already loaded in memory.
  navigator.serviceWorker.addEventListener("message", (e) => {
    if (e.data && e.data.source === "pkm-sw" && e.data.type === "activated") {
      location.reload();
    }
  });
}
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  $("#installBtn").hidden = false;
});
document.addEventListener("DOMContentLoaded", () => {
  on("#installBtn", "click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $("#installBtn").hidden = true;
  });
  init();
});
