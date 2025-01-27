const toggleButton = document.querySelector("header > nav > div");
const menu = document.querySelector("header > nav > ul");
toggleButton.addEventListener("click", (event) => {
    menu.classList.toggle("show");
    event.stopPropagation();
});
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) {
        menu.classList.remove("show");
    }
});

const anchors = document.querySelectorAll("nav > ul > li > a");
const currentPage = window.location.pathname.replace(/\.html$/, "").toLowerCase();
anchors.forEach((anchor) => {
    const anchorHref = anchor
        .getAttribute("href")
        .replace(/\.html$/, "")
        .toLowerCase();
    if (anchorHref === currentPage || (currentPage === "/" && anchorHref === "/")) {
        anchor.setAttribute("aria-current", "page");
    }
});

if (window.location.href.includes("127.0.0.1")) {
    document.querySelectorAll('a[href]:not([target="_blank"])').forEach((anchor) => {
        let url = anchor.getAttribute("href");
        if (url.startsWith("http")) return;
        let [path, rest] = url.split(/([?#].*)/);
        if (path !== "/" && !path.endsWith(".html")) {
            path += ".html";
        }
        anchor.setAttribute("href", path + (rest || ""));
    });
}
