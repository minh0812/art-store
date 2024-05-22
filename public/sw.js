// sw.js
self.addEventListener("install", function (event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  clients.claim();
});

self.addEventListener("fetch", function (event) {
  // You can respond to all requests with a cached response.
  event.respondWith(fetch(event.request));
});
