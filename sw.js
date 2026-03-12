// Deadly Dozen Service Worker
// Minimal - no caching, ensures live updates always come through

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Fetch straight from network every time - no cache
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
