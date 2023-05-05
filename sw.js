const CACHE_NAME = `rayatiga-v1`

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME)
            cache.addAll(["/", "/about/", "/career/", "/contact/", "/founder/", "/payment/", "/project/", "/hosting/", "/hosting/about/", "/hosting/contact/", "/hosting/pricing/", "/asset/css/icon.css", "/asset/css/main.css", "/asset/css/prism.css", "/asset/css/root.css", "/asset/font/icon.woff", "/asset/font/icon.woff2", "/asset/font/source-code-pro.ttf", "/asset/font/work-sans.ttf", "/asset/image/brand/rayatiga-og.png", "/asset/image/brand/rayatiga.png", "/asset/image/hosting/about.webp", "/asset/image/hosting/complete.png", "/asset/image/hosting/contact.webp", "/asset/image/hosting/domain.png", "/asset/image/hosting/home.webp", "/asset/image/hosting/pricing.webp", "/asset/image/hosting/wordpress.png", "/asset/image/identity/idcard-back.png", "/asset/image/identity/idcard-front.png", "/asset/image/sponsor/bank-indonesia.png", "/asset/image/sponsor/dana.png", "/asset/image/sponsor/gpn.svg", "/asset/image/sponsor/qris.png", "/asset/image/sponsor/rayatiga.png", "/asset/image/system/rayatiga-qris.png", "/asset/js/main.js", "/asset/js/prism.js", "/asset/js/root.js"])
        })()
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME)

            // Get the resource from the cache.
            const cachedResponse = await cache.match(event.request)
            if (cachedResponse) {
                return cachedResponse
            } else {
                try {
                    // If the resource was not in the cache, try the network.
                    const fetchResponse = await fetch(event.request)

                    // Save the resource in the cache and return it.
                    cache.put(event.request, fetchResponse.clone())
                    return fetchResponse
                } catch (e) {
                    // The network failed.
                }
            }
        })()
    )
})
