// sw.js — Service Worker (cho phép dùng offline)
// Không cần sửa file này

const CACHE = 'kansai-v2';
const FILES = ['./index.html', './admin.html', './data.js', './manifest.json'];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)))
);

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
