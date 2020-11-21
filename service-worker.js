const CACHE_NAME = 'supercede-current-v15';
const DATA_CACHE_NAME = 'supercede-data-cache-v15';

console.log('jdjh');

const FILES_TO_CACHE = [
  'index.html',
  'main.css',
  'fonts/Calligraffitti-Regular.ttf',
  'fonts/UbuntuMono-Bold.ttf',
  'fonts/UbuntuMono-BoldItalic.ttf',
  'fonts/UbuntuMono-Regular.ttf',
  'manifest.json',
  'images/naijafotos.png',
  'images/naijatours.png',
  'images/times.png',
  'scripts/app.js',
  'scripts/main.js',
  'scripts/typed.min.js',
  'scripts/greensock.js',
  'scripts/vendor.js',
];

self.addEventListener('install', (evt) => {
  console.log('Installing');
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('activating');
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
  // console.log(evt.request);
  if (
    evt.request.url.includes('images.unsplash.com') ||
    evt.request.url.includes('fontawesome')
  ) {
    // console.log("[Service Worker] Fetch (data)", evt.request.url);
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(evt.request)
          .then((response) => {
            if (response.status === 200 || response.status === 0) {
              console.log('Found ext data ', evt.request.url, ' in cache');
              cache.put(evt.request.url, response.clone());
            }
            return response;
          })
          .catch((err) => {
            console.log('did not find ', evt.request.url, ' in cache');
            return cache.match(evt.request);
          });
      })
    );
    return;
  }

  // console.log(evt.request);

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        console.log('Found ', evt.request.url, ' in cache');
        // return response || fetch(evt.request);
        if (response) {
          console.log('Found ', evt.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', evt.request.url);

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
