var cacheName = "PetsWonderland";
var filesToCache = [
  "/",
  "App.js",
  "Cart.js",
  "Contact.js",
  "displayProducts.js",
  "Footer.js",
  "HomeAllItems.js",
  "Login.js",
  "Navbar.js",
  "ProductPage.js",
  "RegistrationLogin.js",
  "Registration.js",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install ");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
