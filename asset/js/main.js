/* Toggle Menu */
function toggleMenu() {
    const menu = document.querySelector("header div.header > ul");
    if (window.innerWidth <= 768) {
        menu.classList.toggle("active");
        bodyOverflow();
    }
}

/* Body Overflow */
function bodyOverflow() {
    const body = document.body;
    body.classList.toggle("overflow-hide");
}

/* Menu Link */
const menuLinks = document.querySelectorAll("header div.header > ul > li > a");
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function () {
        toggleMenu();
    });
});

/* Scroll to Anchor */
function view(argument) {
    document.getElementById(argument).scrollIntoView();
}

/* WhatsApp */
const whatsappInput = document.getElementById("whatsapp-input");
const whatsappSend = document.getElementById("whatsapp-send");
function whatsapp() {
    let message = whatsappInput.value.trim();
    let whatsappUrl;
    if (message) {
        whatsappUrl = `https://wa.me/6282122220362?text=${encodeURIComponent(message)}`;
    } else {
        message = "Halo, saya ingin menanyakan tentang layanan pembuatan website di Rayatiga.";
        whatsappUrl = `https://wa.me/6282122220362?text=${encodeURIComponent(message)}`;
    }
    const newTab = window.open(whatsappUrl, "_blank");
    newTab.focus();
}
whatsappInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        whatsappSend.click();
    }
});

/* Scroll to Top */
function scrollToTop() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
    const btnScrollToTop = document.querySelector("button.scroll-to-top");
    if (window.scrollY > 75) {
        btnScrollToTop.style.display = "flex";
    } else {
        btnScrollToTop.style.display = "none";
    }
});
