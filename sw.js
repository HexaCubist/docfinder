// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('simple-sw-v1').then(function(cache) {
      // And add resources to it
      return cache.addAll([
        'index.html',
        './', // Alias for index.html
        'app.js',
        'data.js',
        'convertutils.js',
        'utils.js',
        'scripts.js',
        'styles.css',
        'views/home.html',
        'views/results.html',
        'lib/angular-route.min.js',
        'lib/angular.min.js',
        'lib/jquery.min.js',
        'lib/service-worker.js',
        'lib/bootstrap/css/bootstrap-theme.min.css',
        'lib/bootstrap/css/bootstrap.min.css',
        'lib/bootstrap/js/bootstrap.min.js',
        'bootstrap-theme/css/bootstrap-material-design.min.css',
        'bootstrap-theme/css/ripples.min.css',
        'bootstrap-theme/js/material.min.js',
        'bootstrap-theme/js/ripples.min.js',
        'logo-assets/LogoSemifinal.svg',
        'manifest.json',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
        'https://js.cit.api.here.com/v3/3.0/mapsjs-ui.css',
        'https://js.cit.api.here.com/v3/3.0/mapsjs-core.js',
        'https://js.cit.api.here.com/v3/3.0/mapsjs-service.js',
        'https://js.cit.api.here.com/v3/3.0/mapsjs-ui.js',
        'https://js.cit.api.here.com/v3/3.0/mapsjs-mapevents.js',
        'http://maps.google.com/maps/api/js?sensor=false',
        'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js',
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});
