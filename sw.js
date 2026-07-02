const CACHE_NAME = "cotisation-v3";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/frontend/assets/css/style.css",
  "/frontend/assets/js/data.js",
  "/frontend/assets/js/script.js",
  "/frontend/assets/images/famille.png",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Network-first pour les pages HTML et les scripts JS (toujours la version
  // la plus récente — indispensable pour que les mises à jour de data.js
  // soient visibles sans vider le cache). Le cache ne sert qu'en hors-ligne.
  const isLocalJs = url.origin === self.location.origin && url.pathname.endsWith(".js");
  if (event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname === "/" || isLocalJs) {
    event.respondWith(
      fetch(event.request, { cache: "no-cache" })
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first pour les assets statiques (images, CSS)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        const clone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return networkResponse;
      });
    })
  );
});
