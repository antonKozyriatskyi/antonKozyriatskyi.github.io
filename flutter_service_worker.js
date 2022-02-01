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
".git/index": "3890a4f3d0e7b817cdb8dfe82a2372ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2969199638a26e381a5fa9f80a4a5092",
".git/logs/refs/heads/master": "2969199638a26e381a5fa9f80a4a5092",
".git/logs/refs/remotes/origin/master": "b9b2bf2ae692a6ce0dd9788a54d2adad",
".git/objects/00/969efe3be5f5f0b583c625d27f2cab670b1db9": "97480317805e67008fba5bd8f42dd474",
".git/objects/04/72f5eeaba4183770e1519eeeafdc0bc60bc041": "3d3d27ac9256c873195c18ac5b1d5461",
".git/objects/08/46d197f52e3de2f8382bd07db2cff0f675f803": "df5b4f32c02e68e9308456ab5ee3de38",
".git/objects/0d/99fee5de1157d6043278d5bea034b642324867": "6234a4b7b0805fa7ea4fdeb468a17830",
".git/objects/11/a7a2f8e5b66b758828165cacef1935899ceaa5": "6a94e3870bf6d1f009b119adfb3196ce",
".git/objects/19/da90c1198402317033bc6a73ef7f41dbe6bef6": "a13c2a1c679ce659256313cff6b4cf65",
".git/objects/1b/7122886530ce426678aad70556d1dac653b649": "4424fbef48f5c7d2500b259ba5ce30d5",
".git/objects/22/4b03b8f3fb2599f33c57706685419b117c4d9f": "5b5679f64938186366b02838432e3c96",
".git/objects/23/0a59052bbf88f5e43c588e4ffa3a7a59e3ae30": "f1530248d4433d4b1083378f3e5a8b27",
".git/objects/31/0cf0e0018e81437aa2aae516cb5d8619156537": "a000693056a1720e5549e921b6c41b7e",
".git/objects/31/a0459cf9bb52a3f8c7f1006393a03f1edd8202": "fbfdc0f7e5a15f1cca9a934983cb3926",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/0ec4970f31ca311ef5faadd0e5bca6b0b9ca13": "3f011b2c6f60ee93231bd144f242aba4",
".git/objects/3c/f93e3583a73172054efee8659cc160c71a1de5": "fae29ee3614f7f209db1b6381491a320",
".git/objects/3d/0e42630753b9aa4af5b58c6afe5e494a431d9c": "ca3aa9db5b7e8ce4bb9d7ed33b90c619",
".git/objects/42/f7d0eb5431e96eb0df3c4669a635e18e626933": "cac9fa80a29f8e748f6293c1c558242f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/b4047e917fe3c23bf626f032ce49b056aeea71": "dae1c23fd1e8ad71e9d0837950fcda4b",
".git/objects/50/50f21d44cf0baffe0362e91e76839cb81eb3b5": "4edcfde0367d803873866a58d1538f87",
".git/objects/51/14e4ee3f888979878cc9d44c7ca1ffd8e3c7f9": "527de965c4118f7453089e612b912e02",
".git/objects/51/b4c69fb04008d6834dbd8a8f69a06ec5b7d2a1": "8df84f04d456ae2101c975a3b1f8d4ce",
".git/objects/51/c2929d3db2d7954dad3cf04bf8e2df10f244c7": "76648e7aeb2c3f4642d91ed4f2211f7a",
".git/objects/54/e2efd8e21acbdc0ac0cf6ba2ad6437bdb06e5c": "909c77da7767a6f54b374eaae454b1bd",
".git/objects/55/d08ff80ebec9e2b1816c8e21590795a8e2a4ec": "254e70c78917674eb61df61b276d9eef",
".git/objects/57/8b7f9fc2e5f5a56c44faf73c217a7d94cf65c0": "938b78dafbb17665f096f20c757be64e",
".git/objects/5b/2a5d336c9b55ac3c344f34946d47ff03a7f166": "83957a3f30cbc175716cda47f5b6d759",
".git/objects/5d/4dfc37f2db2039abf766bd758b3350a300ddc4": "4bce60b3a34af7c9e2e93b8810cc7e40",
".git/objects/61/edba34ece8090cbd113809f76061b9d0ab53ed": "136890b53317f8ce1355d389b2e11887",
".git/objects/69/c2fd079a05967092885ef462862690d4eed72c": "2fcfccd4e3fb528864fd173d0a33bd38",
".git/objects/6a/b1ddd2107b0bdd9043b132460c45c32237f63a": "4e3bcdb33a18402988d51e884e2906ed",
".git/objects/6b/b71491104b3e27015be39a669df189c4ef96c6": "2bf8c162dd979fe8b1ad6b64b4f155cd",
".git/objects/6e/a3ac3981ce88c16c5b7a886c967c85f3328552": "df1f42c6e4bbf71f469c3357b88cf6c6",
".git/objects/6f/498e4ff442eecb8490cc8de30359328d829413": "2357c1657286f61c818657c05f2d6674",
".git/objects/70/54101a5a8b5f5ed0600682eb9380710ab17362": "e752e6d1a1ced6ef5b032916f1fa5ed6",
".git/objects/70/7cf5af0f44a55e8c0719dc9079e4f06af00fdf": "f572ab9105f5ddd1a59acc962c9148a6",
".git/objects/71/286c594c7791c153b165f5941f193d3168d44b": "66ab97808095a9ac0caaa3dfb134ce76",
".git/objects/75/a82f113d54dc6806ad947469197a57926d1f69": "91070f8031536ed94ac78a6342a8acde",
".git/objects/77/68ee74566c2d85a7b678949f77c328d84d6001": "b187d44467f36998e47e208d1828c4a0",
".git/objects/79/72c2bf4d350d1ec94be95bcc6bf45c727f3b50": "8a3dca2f01d1ae086547709a589ed4b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/929ab1f9decd51e517ad5cb8f9d714db0872a6": "4023471a944b41a932bfaea1d3e4f0a5",
".git/objects/86/9e2fbd2cfe4d5a3ea6dca0ea2a33dd0185478e": "30ea3efb5067da891bc48202aafc015c",
".git/objects/87/43036e2e67632df508c53fd72b50554d437194": "e5414b4d58fc87fc86d775f14a7fb06f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d1331573da63386672dc75f37a9a177da3297c": "059a2523d02138e308481e9cf5db7afb",
".git/objects/8b/54bb8b3382de6e0af5ddc4556fb5ace982f2d5": "b7a888286df913971d909a85485d8ce9",
".git/objects/8b/ffe723754e67db128bb7d39b0b8e64a13d06f7": "dfcee43274d3862fd7409df06c5e8b6c",
".git/objects/8e/6e80a497598a0d9ad5ca86435e3a1b0064359b": "438964d6937037253e3e1e6b40d69b0d",
".git/objects/92/a82c381ca7be3ed7dd235c48d4335f455f0a08": "ddc44d9217d2b5f5938bf9ec9cfcde24",
".git/objects/95/96301f7e2de5ce2d53228e984470d4ad719a2c": "f9f96cf0e431c72dede2d48e8befa318",
".git/objects/95/f6d63d3fd97fcdaa35b45a20bb6b3cbf338ee5": "20b47fd0b45c136b5169853c8558d18c",
".git/objects/97/687b2fe54465dbcad7a9bfed7c43ba9a24d4f8": "fb9d3d798a206966bcec695caa9a286c",
".git/objects/98/61c6abd30e44e8a48d9e04744507a1f1077f0d": "f2949be8a2dccfc887beec06a1d0630c",
".git/objects/9d/042c0725c37c24a18007b00ddb67b4cc81f7da": "0645a840e9ec477c9c394384da3fd7fc",
".git/objects/9f/44bc76b0d7ba47b01db8dba537a689e01cdc45": "4dc3abeca9bb8708c5b3b23a21dd7066",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/85d13f9441b6bf51904d240c8650bd3fda651e": "aafcf4bc2943f775445b18d16c265ba8",
".git/objects/a6/fdff108cfcbe6eff70ca05e15f77c95e32c38a": "308590db9b07b1e24e7e3e810577d927",
".git/objects/a7/a7e195b577096e21518c8ead672cd316710e6e": "b8c3a30a2354fb370ee153bf3bd3f5ce",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/3389473c5b70ab48a235a949801047e07d98cc": "96cd428fd6e74fc072ed9bc51eda2661",
".git/objects/aa/bbcf1bf9136048e5ddab8ba5fa4d4948011fbd": "5f868a44a4ec75a8350b5e2c9735bb63",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/f7e680f889a8c63f2ff46b95e980f24aedf1d2": "ebdd822a36899a89a92b31b9a9c7b594",
".git/objects/b0/2e3b3dcfff6cf4febf605e20befb80baa4e763": "b0f8b3f61b5ecce00114b7e9aa2fe9f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/86daa1af07508ef6a42550b6f1d3be5ae46445": "b19bfeec5da57f985590041ac1485eb6",
".git/objects/bc/4f06a1f607260682f59698dee1b7a56ad94fab": "61d147e7911aa52d8c4607df1da5cab0",
".git/objects/c7/4adc765e062f3af61ca4c0e38334c3102f5ae3": "3c81a35ab6a0068984b4261706a25f87",
".git/objects/c7/9e8f57373acb5a053ec3d72f2d40071cf787d6": "c471aa3037e7c7befc70d703f1f095c2",
".git/objects/cf/b31a032a0861ac9920552264ecb7e28a09688e": "c20aa769be58f04d3cac4ae9c7974e21",
".git/objects/d0/da071aefffe301aaa9f960ac5092d4dac671b6": "41352e3422bba72717e71e2a2e852b95",
".git/objects/d1/f4e105476b0cc14cf0e393059a255912189355": "08c3611c04988f1ff6de3deb4f1f9c35",
".git/objects/d5/7db0822db222ce513bb2bb7a6d14b4fd9732d9": "3520f65f4e671690b49b2b05c69b5c68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d7/b72501391ee311f822c4de3eef93aa4dd26a8a": "122fb459b048e7333afd1013134268de",
".git/objects/d7/cc9a911162178ea5b44e239549efa8f99eaa8e": "3eec720d1da0088bd1c765a7e1fcc249",
".git/objects/d8/342797aa27210017111505482ffb109a30eacc": "f70f7334dcc31bb35e7c0e7f19fb9061",
".git/objects/db/2865a49682c1b61287e594d65fab10281566f2": "f909f162b7e2f6333551e60920438577",
".git/objects/e0/dac04f99ffce1048fce1eae1d05133926a8d0d": "ca363beeb95b6dabd7c7390671be9ebb",
".git/objects/e3/b153a4e84b3f2ec735ab37d201d809691231d5": "db45aa240419cab9ad066ecee9bccd09",
".git/objects/e5/2de539e53443f5860e28da0bdc0c3ce46edd86": "a7758aaa8f6dfceb3a568c4c87c61d1b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/248eadbb64c5e89abd0e1c20686670289b8f06": "f10a89cde188fc624ec340b4e5c0bebd",
".git/objects/e8/af2c8b2a1c62abe904efaa1d84c0b8e30ce18a": "0d607aa406b630e505e63b19868d8fc6",
".git/objects/eb/75d68a6ad041eac5ffcb9d4bd7f1873ef5e1d0": "7730482107968f913fc6f7e876447c30",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/ccb25bfdc13cde5f901744c06d16a9fc8479fd": "a3058bb6b980c703d5b0affa27ced41e",
".git/objects/fc/3b953273293177ec97814474b63efba0699cd8": "6234efeb53829eb7270ba13f6340668a",
".git/objects/fd/f134e723bb2d31966211fa2a13625685b163b1": "92c8b438a09b3307997871d6779323c2",
".git/objects/ff/04c97a026f0277e016360b99376dbfd488bf0f": "f558b6711d14c3c9a3607e8c13422d13",
".git/refs/heads/master": "332605dab25982335a2be6a5d46082aa",
".git/refs/remotes/origin/master": "332605dab25982335a2be6a5d46082aa",
"assets/app_store_logo.svg": "0af894976244b8b5edd165eeb775278c",
"assets/AssetManifest.json": "7ba0295b43c10bfeaae36ea4db1a0bdf",
"assets/assets/app_store_logo.svg": "0af894976244b8b5edd165eeb775278c",
"assets/assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/github_logo.svg": "caf3bf4845c9b311654c5fe6ce555d8c",
"assets/google_play_logo.svg": "e61eb638595960e94e96f68430f92762",
"assets/NOTICES": "5938a2ae0651e57cc527b56ba6186366",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "c3264252eab6a47bc090655d4d5f663d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "635bb12bdb1b0eb4cebfe0deb2660882",
"/": "635bb12bdb1b0eb4cebfe0deb2660882",
"main.dart.js": "e6b4c8b2019c1c0b942c3e67d5df5ea7",
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
