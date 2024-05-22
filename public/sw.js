// sw.js
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

// Kiểm tra xem có bản cập nhật mới không
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    clients.matchAll().then(function (clients) {
      clients.forEach(function (client) {
        // Gửi thông báo cho người dùng
        client.postMessage({
          title: "Cập nhật",
          message: "Ứng dụng đã được cập nhật. Vui lòng tải lại trang.",
          action: "reload",
        });
      });
    })
  );
});
