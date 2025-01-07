self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("v1").then((cache) => {
            return cache.addAll(["/", "/index.html", "/404.html", "/about.html", "/blog.html", "/career.html", "/contact.html", "/faq.html", "/privacy-policy.html", "/service.html", "/term-condition.html", "/asset/css/main.css", "/asset/css/main-index.css", "/asset/css/main-about.css", "/asset/css/main-blog.css", "/asset/css/main-career.css", "/asset/css/main-contact.css", "/asset/css/main-faq.css", "/asset/css/main-privacy-policy.css", "/asset/css/main-service.css", "/asset/css/main-term-condition.css", "/asset/js/main.js", "/asset/js/main-index.js", "/asset/js/main-contact.js", "/asset/js/main-faq.js", "/asset/media/favicon.png", "/asset/media/hero-404.svg", "/asset/media/hero-about.svg", "/asset/media/hero-blog.svg", "/asset/media/hero-career.svg", "/asset/media/hero-contact.svg", "/asset/media/hero-faq.svg", "/asset/media/hero-privacy-policy.svg", "/asset/media/hero-service.svg", "/asset/media/hero-term-condition.svg", "/asset/media/icon-192x192.png", "/asset/media/icon-512x512.png", "/asset/media/icon-bookmark.svg", "/asset/media/icon-browser-add.svg", "/asset/media/icon-cloud-check.svg", "/asset/media/icon-code-monitor.svg", "/asset/media/icon-desktop-chat.svg", "/asset/media/icon-earth.svg", "/asset/media/icon-gear-spark.svg", "/asset/media/icon-globe-spark.svg", "/asset/media/icon-rocket.svg", "/asset/media/icon-search-rate.svg", "/asset/media/icon-shield-check.svg", "/asset/media/icon-star.svg", "/asset/media/icon-task-monitor.svg", "/asset/media/icon-terminal-spark.svg", "/asset/media/icon-whatsapp.svg", "/asset/media/index-hero.svg", "/asset/media/inter.ttf", "/asset/media/og.jpg", "/asset/media/project-makglengcoffee.png", "/asset/media/project-pawonkos799.png", "/asset/media/project-rayatigashop.png"]);
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
