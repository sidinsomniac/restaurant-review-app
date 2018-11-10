/* eslint-disable no-console */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
		.then(function(reg) {
			console.log('Service worker registration successful');
		})
		.catch(function(err) {
			console.log('Service worker registration failed.');
		});
} else {
	console.log('No service worker in use');
}