'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3f9899955c8706083ad7995b35b6b61d",
".git/config": "19ab4c139cc1a84bd70457c369e02093",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cf77959b013fa3fb294176c63665ea45",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "199a669e9542740ae9f07924fbf3d1aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34e16f54dbb8d4bc4c6013cb2406e185",
".git/logs/refs/heads/main": "bc84eef0b3ab3d2dbf7fa926d32980bc",
".git/logs/refs/heads/master": "b467f62216f1a3a291e5ba3074ab8609",
".git/logs/refs/remotes/origin/master": "39f5c31e12b54c58428abae396f2b47a",
".git/objects/03/f53fadb3b610f49b6aff880b74fdf1d4763cf6": "ac354b3ca95ccea960c470845a6b4fbe",
".git/objects/0c/c9492be953a83c3a8aefc26906ea98409a0eb6": "356f320246d0f243f72b9315ebf7c9f5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/c496180976ac9ca8d5de32171c93e81f270a3a": "812b88aa519bc8705deef1f50afd7eaf",
".git/objects/41/c8c0cdcf9c9b471ea697a4c53ce6c7acdbc076": "bdd98336c4679d58c5295a419ffcf2ff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/2f0eb1f61538612ade536df133c901c79af65a": "efbc0abd5be4d54b199bff20331766f5",
".git/objects/61/9009ac08b60a487663142da3b522b885a14708": "5adeeeb2a3dda73ce44af21cc7f778bc",
".git/objects/64/eb0b21e36f88be56aa176bf0fba17787107080": "30d1f0dd0380fd1b32b63a60f79cfb4c",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/6f/498e4ff442eecb8490cc8de30359328d829413": "2357c1657286f61c818657c05f2d6674",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/ba03c8debaec5c2a44544ba01378ca15626bb2": "cccc08df7293f550c20cffa7b97e29c1",
".git/objects/9d/8df858af3edc492e05b055363086b884dd7ea5": "2f0d4f5c0e0182a4c8d36c45645880a1",
".git/objects/9f/44bc76b0d7ba47b01db8dba537a689e01cdc45": "4dc3abeca9bb8708c5b3b23a21dd7066",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/3ba7bdf840c6e9b617cc10337c93d673cacabd": "ea4534261091132cef0a4d5247b2521b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/8adc1fba849009f979e8625c78a97f244876b8": "be1012782e08e0f414c4dbf1a6dae182",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/5a5c3f3c236f87f6eb9ee12dee4ba77f38fa34": "c48af8982e982ff7bd29b0ebebd1f523",
".git/objects/c7/01c2b96fcd86e57ccfe237fabdbd69bf18424c": "62360e525771664f102088df98bc20d1",
".git/objects/c7/9e8f57373acb5a053ec3d72f2d40071cf787d6": "c471aa3037e7c7befc70d703f1f095c2",
".git/objects/d0/da071aefffe301aaa9f960ac5092d4dac671b6": "41352e3422bba72717e71e2a2e852b95",
".git/objects/d1/d651f6da3b1ff65b97a0ffed824cd41494e15a": "0c2df95ad06293f3c11f242c2756e597",
".git/objects/d1/f4e105476b0cc14cf0e393059a255912189355": "08c3611c04988f1ff6de3deb4f1f9c35",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3a0d76ca8f4b396bcd8d4338f7804e40182c4e": "3182149941036928314f1266159fbf22",
".git/objects/d7/cc9a911162178ea5b44e239549efa8f99eaa8e": "3eec720d1da0088bd1c765a7e1fcc249",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/af2c8b2a1c62abe904efaa1d84c0b8e30ce18a": "0d607aa406b630e505e63b19868d8fc6",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/f134e723bb2d31966211fa2a13625685b163b1": "92c8b438a09b3307997871d6779323c2",
".git/objects/pack/pack-38ab93a8999ca75b0eeb3e8eae6d0af03f418614.idx": "30abe0f4bbcf722cd04478c1b39c56ad",
".git/objects/pack/pack-38ab93a8999ca75b0eeb3e8eae6d0af03f418614.pack": "3c500e6c2bb8ec2f0c49c30dd5207dba",
".git/refs/heads/main": "31b06f5db5260fd7cb7df5f2da38b3fc",
".git/refs/heads/master": "754ba74ec1b56e2cbcb13260af738608",
".git/refs/remotes/origin/master": "754ba74ec1b56e2cbcb13260af738608",
"assets/app_store_logo.svg": "9bc2e7da6efbd909ce2066007696cf55",
"assets/AssetManifest.json": "7ba0295b43c10bfeaae36ea4db1a0bdf",
"assets/assets/app_store_logo.svg": "9bc2e7da6efbd909ce2066007696cf55",
"assets/assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/NOTICES": "b1b997261869099a8568f78b8d8eff65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "c3264252eab6a47bc090655d4d5f663d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e164afa90780b24b7fd7f81cd3b1405b",
"/": "139264fcaba5da6c5a925cebca4490d1",
"main.dart.js": "f11cca07abbb2728b025f563b4f4a1b0",
"manifest.json": "4aaec22cab9315abe8aa712ae56326ee",
"version.json": "3f46873218fe7e85490624c4f9ce6999",
"web/assets/app_store_logo.svg": "9bc2e7da6efbd909ce2066007696cf55",
"web/assets/AssetManifest.json": "7ba0295b43c10bfeaae36ea4db1a0bdf",
"web/assets/assets/app_store_logo.svg": "9bc2e7da6efbd909ce2066007696cf55",
"web/assets/assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"web/assets/assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"web/assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"web/assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"web/assets/NOTICES": "04284e57ffac3a62031fd61b50f51781",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"web/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"web/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"web/canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"web/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"web/favicon.png": "c3264252eab6a47bc090655d4d5f663d",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "139264fcaba5da6c5a925cebca4490d1",
"web/main.dart.js": "889f98f1ad700b714fbe71ffad2c59c1",
"web/manifest.json": "4aaec22cab9315abe8aa712ae56326ee",
"web/version.json": "3f46873218fe7e85490624c4f9ce6999"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
