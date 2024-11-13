const CACHE_NAME = "mi-pwa-cache-v1";
const urlsToCache=[
    './',
    './index.html',
    './app.js',
    './icons/paw_patrol_badge_icon_263848.png',
    './icons/rocky_badge_canine_patrol_paw_patrol_icon_263833.png',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Abriendo Cache');
            return cache.addAll(urlsToCache); 
        })
    );
});

self.addEventListener('activate', event =>{
    console.log('Service Worker activado');
});

self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request)
        .then(response =>{
            return response || fetch(event.request);
        })
    );
});