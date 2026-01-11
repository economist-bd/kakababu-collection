const CACHE_NAME = 'bhuture-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;600&display=swap',
    'https://cdn-icons-png.flaticon.com/512/3389/3389081.png'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

// Fetch Event (Offline Capability)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
