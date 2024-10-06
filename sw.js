const cacheName = "Dashboard-v3"
const assets = ['./index.html', './assets/js/dashboard.js', './assets/js/script.js']
self.addEventListener('install', (installEvent)=>{
    installEvent.waitUntil(
        caches.open(cacheName).then((cache)=>{
        cache.addAll(assets).then().catch()
    })
    .catch((err)=> {})
    )
    // console.log("Service Worker is Installed!!", installEvent)
})

self.addEventListener('activate', (activateEvent)=>{
    activateEvent.waitUntil(
        caches.keys().then((keys)=> {
        return Promise.all(
            keys.filter((key) => key != cacheName)
            .map((key) => caches.delete(key))
        )
    })
    )
    
    // console.log("Service Worker is activated", activateEvent)
})

self.addEventListener('fetch', (fetchEvent)=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res)=>{
            return res || fetch(fetchEvent.request)
        })
    )
    console.log("Service Worker is fetched",fetchEvent)
})


// caches.open() => Open cache by name
// cache.add() => Add one item 
// cache.addAll() => Add group of items 
// cache.match() => Search for an item 
// cache.delete() => Delete an item
// cache.keys() => Return keys
// cache.put() => Update cache