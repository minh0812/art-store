// sw.js
const cacheName = 'cache-v1'; 

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

// Gọi sự kiện Install
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      // Thêm các tệp vào bộ nhớ cache
      return cache.addAll([
        '/index.html',
        '/main.js',
        '/style.css',
      ]);
    })
  );
});

// Gọi sự kiện Activate để dọn dẹp các bộ nhớ cache cũ và thông báo cho người dùng
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            // Nếu có bản cập nhật mới, gửi thông báo cho người dùng
            self.clients.matchAll().then(function(clients) {
              clients.forEach(function(client) {
                client.postMessage({ 
                  title: 'Cập nhật',
                  message: 'Ứng dụng đã được cập nhật. Vui lòng tải lại trang.',
                  action: 'reload'
                });
              });
            });
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
