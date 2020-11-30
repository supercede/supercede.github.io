const CACHE_NAME = 'supercede-current-v17';
const DATA_CACHE_NAME = 'supercede-data-cache-v17';

const FILES_TO_CACHE = [
  'index.html',
  'main.css',
  'manifest.json',
  'images/naijafotos.png',
  'images/naijatours.png',
  'images/get-it-done.png',
  'images/icons/favicon-16x16.png',
  'images/icons/favicon-32x32.png',
  'images/icons/android-chrome-192x192.png',
  'images/icons/android-chrome-512x512.png',
  'images/icons/apple-touch-icon.png',
  'scripts/anim.js',
  'scripts/main.js',
  'scripts/typed.min.js',
  'scripts/greensock.js',
  'scripts/vendor.js',
  'favicon.ico',
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key != DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  if (
    evt.request.url.includes('images.unsplash.com') ||
    evt.request.url.includes('fontawesome')
  ) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(evt.request)
          .then((response) => {
            if (response.status === 200 || response.status === 0) {
              cache.put(evt.request.url, response.clone());
            }
            return response;
          })
          .catch((err) => {
            return cache.match(evt.request);
          });
      })
    );
    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        // return response || fetch(evt.request);
        if (response) {
          return response;
        }

        if (
          evt.request.cache === 'only-if-cached' &&
          evt.request.mode !== 'same-origin'
        ) {
          return;
        }

        return fetch(evt.request);
      });
    })
  );
});
