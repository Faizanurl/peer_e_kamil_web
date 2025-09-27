'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "473f0f8c785db8a4627f2fb232c8d4ad",
"assets/AssetManifest.bin.json": "a491c632614ae1e913e286ebea36616a",
"assets/AssetManifest.json": "6e444466c1e04be311153bbd10bf4dea",
"assets/assets/a.jpg": "9910c87f6e37cde366d03ba45131fd31",
"assets/assets/ads.jpg": "acdcf2f1ec9154f3583256d062e3fbea",
"assets/assets/androide.jpg": "23b37afb2c92535307f7ac8e05eb2447",
"assets/assets/auther.jpg": "45ceb5727b06d53c9ab6da83221295f3",
"assets/assets/auther1.jpg": "e5fb9a0c0fe0481bcccff53c594bdd1b",
"assets/assets/auther2.jpg": "948c238423757d956b3dac541f562546",
"assets/assets/auther3.jpg": "c82d0ae06a1f293d2af4b74bab875c59",
"assets/assets/auther4.jpg": "930d13ccb26a04ebde21efd21e9fb81c",
"assets/assets/bell.jpg": "5f475a0146a80318d1f13be911bcfad8",
"assets/assets/bell2.jpg": "d2eca838805ce1420c177fb45e37a203",
"assets/assets/book.jpg": "9f87babf83538551ea60773d28596e7d",
"assets/assets/book2.jpg": "cd3d3e7e9b428d4c27225d62a460e629",
"assets/assets/crown.jpg": "37e504246d95340ddb22ff99f8d345b4",
"assets/assets/icon.jpg": "dfdbe8b93b8d65704ecbafc5e09c13e7",
"assets/assets/icon2.jpg": "4356db5847fe977cee7d58a8a6eee13b",
"assets/assets/instra.jpg": "d90ba606b0c8e3342e8554c97c6b4d1f",
"assets/assets/message.jpg": "768996f5a5385418cef6186ce58391fb",
"assets/assets/moon.jpg": "1707fd4f6ac35778228a4633e0e92e28",
"assets/assets/notification.jpg": "0599e765103f494b1bd888c5043cad6b",
"assets/assets/novel1.jpg": "52635d3a01a973117c0a7af8d743a39f",
"assets/assets/novel10.jpg": "1a280f0837495d945b70a926b1334fe6",
"assets/assets/novel11.jpg": "d9843434c012ab8398ef5a849a90f90a",
"assets/assets/novel12.jpg": "710994537b1f1b0947c4a17bbb00935e",
"assets/assets/novel13.jpg": "666284590b5576e2f32dd3549eb26e90",
"assets/assets/novel14.jpg": "4db7304792ef057b6c52bc5b4f024ba8",
"assets/assets/novel2.jpg": "3692eeab23fbd0710ec009f92481e5cd",
"assets/assets/novel3.jpg": "447d3486ffc612f2dec55762869a6913",
"assets/assets/novel4.jpg": "142879bd1b39fb2d2bd44fe4a7053c09",
"assets/assets/novel5.jpg": "a50a89a2acd9cbea701b2c0af7b4b96d",
"assets/assets/novel6.jpg": "4c66b17e2cb942dac906aded764c91aa",
"assets/assets/novel7.jpg": "0f2b56414e496814cb9dc8edb76feb62",
"assets/assets/novel8.jpg": "2eba0e5d57268c6152ec5b3d9f03a9e5",
"assets/assets/novel9.jpg": "daf3b03a0fb3f766feca185386e27339",
"assets/assets/pdf.jpg": "5e6f947fc2f5e57a0f635a9def48a91d",
"assets/assets/Pdf2.jpg": "4cbba0156df8711a6339d8aa8b7c9301",
"assets/assets/perakamil.jpg": "57739aae0a5aac46540907e31951c707",
"assets/assets/perakamil2.jpg": "d98a9d78d4da3d609e06f26c87197f26",
"assets/assets/perakamil3.jpg": "9883a8c866cad357d57a1abbe5e3a156",
"assets/assets/tick.jpg": "999de2c2747d3d80b946578ba6e04b43",
"assets/assets/tickaround.jpg": "c96f12be3ce6f42cb668bfa829d38458",
"assets/assets/youtube.jpg": "92c7b3bcf857f5710f5dc8b10696cea9",
"assets/FontManifest.json": "9850a329dc435cce2f6b45ab61a0e568",
"assets/fonts/Dyna.ttf": "a137e0405ecbb7363fd29422621cc74c",
"assets/fonts/font.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/fonts/MaterialIcons-Regular.otf": "6970d3726a28b309217b4c1dfea140fc",
"assets/NOTICES": "0f0780514510d4e4cfd7926ed45dd29a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3db953e94d57bdbfdb666a224d9a5ade",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee0ff3963c80fb844ffaa620171ca220",
"/": "ee0ff3963c80fb844ffaa620171ca220",
"main.dart.js": "9d6ca24fd37e84aca29248a27b9f3e11",
"manifest.json": "7700dd78dbf253e3ccede6852d6cdcb5",
"version.json": "1fe5e61d4cec09b30dab06dc3ace5938"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
