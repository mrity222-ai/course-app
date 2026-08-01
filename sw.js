const CACHE_NAME = 'codewith_ai_cache_v3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './icon.jpg',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (e) => {
    // Bypass cache for API calls completely
    if (e.request.url.includes('/api/')) {
        e.respondWith(fetch(e.request));
        return;
    }
    
    e.respondWith(
        fetch(e.request)
            .then((response) => {
                // If successful connection, update cache
                if (response && response.status === 200) {
                    const cacheCopy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, cacheCopy);
                    });
                }
                return response;
            })
            .catch(() => {
                // Fall back to cache on network failure
                return caches.match(e.request);
            })
    );
});
