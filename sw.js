const CACHE_NAME = 'allpro-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'lead-safe-certified-firm.png',
  'original333.png'
];

// Install the assets to the device
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from memory when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
