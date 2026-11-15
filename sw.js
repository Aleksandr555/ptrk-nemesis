const CACHE_NAME = 'ptrk-nemesis-v1';
const assetsToCache = [
  './index.html',
  './logo.png',
  './manifest.json'
];

// Встановлення сервіс-воркера та кешування файлів
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Перехоплення запитів та завантаження з кешу
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
