const staticCacheName = 'restaurant-review-v1';

// On installation of the service worker
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			return cache.addAll(
				[
					'./',
					'./index.html',
					'./restaurant.html',
					'./js/main.js',
					'./js/restaurant_info.js',
					'./js/dbhelper.js',
					'./js/IndexController.js',
					'./css/styles.css',
					'./data/restaurants.json',
					'./img/1.jpg',
					'./img/2.jpg',
					'./img/3.jpg',
					'./img/4.jpg',
					'./img/5.jpg',
					'./img/6.jpg',
					'./img/7.jpg',
					'./img/8.jpg',
					'./img/9.jpg',
					'./img/10.jpg',
				]
			);
		})
	);
});

// On activation of the service worker
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.filter(function (cacheName) {
					return cacheName.startsWith('retaurant-review-') && cacheName !== staticCacheName;
				}).map(function (cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

// On fetching the contents stored in cache when offline
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});