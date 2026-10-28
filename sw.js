// Offline cache celé aplikace (po prvním otevření funguje i bez signálu na pozemku).
const V = 'dum-ar-v6-7';
const FILES = [
  './', 'index.html', 'data.json', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'lib/three.module.js', 'lib/GLTFLoader.js', 'lib/DRACOLoader.js', 'lib/OrbitControls.js', 'lib/BufferGeometryUtils.js',
  'lib/draco/draco_decoder.wasm', 'lib/draco/draco_wasm_wrapper.js',
  'models/dum.glb', 'models/strecha.glb', 'models/nabytek.glb', 'models/okoli.glb',
];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
// síť má přednost (nová verze modelu), bez signálu se použije cache
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((r) => {
    const copy = r.clone();
    caches.open(V).then((c) => c.put(e.request, copy));
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
