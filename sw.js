const CACHE_NAME = 'codewith_ai_cache_v2';
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
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});

// Handle incoming Push Notifications
self.addEventListener('push', (e) => {
    let data = { title: 'Notification', body: 'Naya alert mila hai!' };
    if (e.data) {
        try {
            data = e.data.json();
        } catch (err) {
            data = { title: 'Notification', body: e.data.text() };
        }
    }
    
    const options = {
        body: data.body,
        icon: data.icon || './icon.jpg',
        badge: data.badge || './icon.jpg',
        data: data.data || { url: '/' },
        vibrate: [100, 50, 100],
        actions: [
            { action: 'open', title: 'View Portal' }
        ]
    };
    
    e.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Handle Notification Click
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    const urlToOpen = new URL(e.notification.data?.url || '/', self.location.origin).href;
    e.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const client = windowClients[i];
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
