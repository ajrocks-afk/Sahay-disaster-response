const CACHE_NAME = "sahay-offline-v1";

const APP_SHELL = [
  "/",
  "/index.html",
];

/* Install */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );

  self.skipWaiting();
});

/* Activate */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

/* Fetch */
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        /* Save successful requests for offline use */
        const responseClone = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });

        return response;
      })
      .catch(() => {
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          /* For React Router pages */
          if (request.mode === "navigate") {
            return caches.match("/");
          }

          return new Response("Offline", {
            status: 503,
            headers: {
              "Content-Type": "text/plain",
            },
          });
        });
      })
  );
});