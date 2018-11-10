if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function(reg) {
		console.log('Registration worked!');
	})
	.catch(function(err) {
		console.log('Registration failed!');
	});
}