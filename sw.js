const CACHE_NAME = 'fittrack-v1';
const urlsToCache = [
  '/claude-fitness-tracker/',
  '/claude-fitness-tracker/index.html',
  '/claude-fitness-tracker/manifest.json',
  '/claude-fitness-tracker/style.css',
  '/claude-fitness-tracker/exercises.js',
  'https://d3js.org/d3.v7.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
