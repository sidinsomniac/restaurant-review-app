if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
		.then(function() {
			console.log('Service worker registration successful');
		})
		.catch(function(err) {
			console.log('Service worker registration failed:',err);
		});
} else {
	console.log('No service worker in use');
}