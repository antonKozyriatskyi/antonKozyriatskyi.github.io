'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3f9899955c8706083ad7995b35b6b61d",
".git/config": "19ab4c139cc1a84bd70457c369e02093",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "6de78162ad91f4612fe3054a88848afd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92ec7869d29ebec59a30612af886c4aa",
".git/logs/refs/heads/master": "92ec7869d29ebec59a30612af886c4aa",
".git/logs/refs/remotes/origin/master": "e4d31746104c199fe1a156ffb94ddf34",
".git/objects/00/969efe3be5f5f0b583c625d27f2cab670b1db9": "97480317805e67008fba5bd8f42dd474",
".git/objects/11/a7a2f8e5b66b758828165cacef1935899ceaa5": "6a94e3870bf6d1f009b119adfb3196ce",
".git/objects/19/da90c1198402317033bc6a73ef7f41dbe6bef6": "a13c2a1c679ce659256313cff6b4cf65",
".git/objects/1b/7122886530ce426678aad70556d1dac653b649": "4424fbef48f5c7d2500b259ba5ce30d5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/42/f7d0eb5431e96eb0df3c4669a635e18e626933": "cac9fa80a29f8e748f6293c1c558242f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/14e4ee3f888979878cc9d44c7ca1ffd8e3c7f9": "527de965c4118f7453089e612b912e02",
".git/objects/51/b4c69fb04008d6834dbd8a8f69a06ec5b7d2a1": "8df84f04d456ae2101c975a3b1f8d4ce",
".git/objects/54/e2efd8e21acbdc0ac0cf6ba2ad6437bdb06e5c": "909c77da7767a6f54b374eaae454b1bd",
".git/objects/55/d08ff80ebec9e2b1816c8e21590795a8e2a4ec": "254e70c78917674eb61df61b276d9eef",
".git/objects/57/8b7f9fc2e5f5a56c44faf73c217a7d94cf65c0": "938b78dafbb17665f096f20c757be64e",
".git/objects/6e/a3ac3981ce88c16c5b7a886c967c85f3328552": "df1f42c6e4bbf71f469c3357b88cf6c6",
".git/objects/6f/498e4ff442eecb8490cc8de30359328d829413": "2357c1657286f61c818657c05f2d6674",
".git/objects/70/7cf5af0f44a55e8c0719dc9079e4f06af00fdf": "f572ab9105f5ddd1a59acc962c9148a6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d1331573da63386672dc75f37a9a177da3297c": "059a2523d02138e308481e9cf5db7afb",
".git/objects/8e/6e80a497598a0d9ad5ca86435e3a1b0064359b": "438964d6937037253e3e1e6b40d69b0d",
".git/objects/95/96301f7e2de5ce2d53228e984470d4ad719a2c": "f9f96cf0e431c72dede2d48e8befa318",
".git/objects/97/687b2fe54465dbcad7a9bfed7c43ba9a24d4f8": "fb9d3d798a206966bcec695caa9a286c",
".git/objects/98/61c6abd30e44e8a48d9e04744507a1f1077f0d": "f2949be8a2dccfc887beec06a1d0630c",
".git/objects/9f/44bc76b0d7ba47b01db8dba537a689e01cdc45": "4dc3abeca9bb8708c5b3b23a21dd7066",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/85d13f9441b6bf51904d240c8650bd3fda651e": "aafcf4bc2943f775445b18d16c265ba8",
".git/objects/a7/a7e195b577096e21518c8ead672cd316710e6e": "b8c3a30a2354fb370ee153bf3bd3f5ce",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/bbcf1bf9136048e5ddab8ba5fa4d4948011fbd": "5f868a44a4ec75a8350b5e2c9735bb63",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/4f06a1f607260682f59698dee1b7a56ad94fab": "61d147e7911aa52d8c4607df1da5cab0",
".git/objects/c7/4adc765e062f3af61ca4c0e38334c3102f5ae3": "3c81a35ab6a0068984b4261706a25f87",
".git/objects/c7/9e8f57373acb5a053ec3d72f2d40071cf787d6": "c471aa3037e7c7befc70d703f1f095c2",
".git/objects/d0/da071aefffe301aaa9f960ac5092d4dac671b6": "41352e3422bba72717e71e2a2e852b95",
".git/objects/d1/f4e105476b0cc14cf0e393059a255912189355": "08c3611c04988f1ff6de3deb4f1f9c35",
".git/objects/d5/7db0822db222ce513bb2bb7a6d14b4fd9732d9": "3520f65f4e671690b49b2b05c69b5c68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d7/b72501391ee311f822c4de3eef93aa4dd26a8a": "122fb459b048e7333afd1013134268de",
".git/objects/d7/cc9a911162178ea5b44e239549efa8f99eaa8e": "3eec720d1da0088bd1c765a7e1fcc249",
".git/objects/d8/342797aa27210017111505482ffb109a30eacc": "f70f7334dcc31bb35e7c0e7f19fb9061",
".git/objects/e3/b153a4e84b3f2ec735ab37d201d809691231d5": "db45aa240419cab9ad066ecee9bccd09",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/af2c8b2a1c62abe904efaa1d84c0b8e30ce18a": "0d607aa406b630e505e63b19868d8fc6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/f134e723bb2d31966211fa2a13625685b163b1": "92c8b438a09b3307997871d6779323c2",
".git/refs/heads/master": "41f4df0be359576d30499ea4e78d7d5e",
".git/refs/remotes/origin/master": "41f4df0be359576d30499ea4e78d7d5e",
"assets/app_store_logo.svg": "0af894976244b8b5edd165eeb775278c",
"assets/AssetManifest.json": "7ba0295b43c10bfeaae36ea4db1a0bdf",
"assets/assets/app_store_logo.svg": "0af894976244b8b5edd165eeb775278c",
"assets/assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/NOTICES": "51ade99bee4444c89b9705f5f5bf5bfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "c3264252eab6a47bc090655d4d5f663d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f356ba2a63feabbe11eced7fb7adcfb",
"/": "0f356ba2a63feabbe11eced7fb7adcfb",
"main.dart.js": "e60842a1aeab630e3a3303d31094caac",
"manifest.json": "4aaec22cab9315abe8aa712ae56326ee",
"version.json": "3f46873218fe7e85490624c4f9ce6999"
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
