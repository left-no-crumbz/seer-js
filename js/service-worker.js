importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
    /\/*/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'seer-cache',
    })
);

self.addEventListener('fetch', event => {
    if (event.request.url.includes('/share-target/')) {
        event.respondWith(Response.redirect(`/?url=${event.request.url.split('?url=')[1]}`));
    }
});