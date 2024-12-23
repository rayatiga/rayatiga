const sliderData = [
    {
        img: "/asset/media/project-pawonkos799.png",
        title: "Pawonkos799",
        description: "Revolutionizing frozen food with premium quality. Pawonkos799 specializes in frozen squid products, ensuring freshness and convenience for every meal.",
        link: "https://www.behance.net/gallery/183325393/Pawonkos799-Website",
    },
    {
        img: "/asset/media/project-makglengcoffee.png",
        title: "Makgleng Coffee Indonesia",
        description: "Celebrating the art of coffee, Makgleng Coffee Indonesia sources beans from Indonesia's finest farms, offering rich, aromatic brews with local flavors.",
        link: "https://www.behance.net/gallery/183325165/Makgleng-Coffee-Website",
    },
    {
        img: "/asset/media/project-rayatigashop.png",
        title: "Rayatiga Shop",
        description: "Your trusted electronics shop. Rayatiga Shop offers high-quality gadgets, appliances, and accessories, ensuring modern solutions for everyday tech needs.",
        link: "https://www.behance.net/gallery/183325651/Rayatiga-Shop-Website",
    },
];

let currentSlide = 0;

const elements = {
    img: document.querySelector("main > #project > div:nth-child(2) > img"),
    title: document.querySelector("main > #project > div:nth-child(2) > div > h3"),
    desc: document.querySelector("main > #project > div:nth-child(2) > div > p"),
    link: document.querySelector("main > #project > div:nth-child(2) > div > a"),
};

const updateSlider = (i) => {
    const { img, title, description, link } = sliderData[i];
    elements.img.src = img;
    elements.img.alt = title;
    elements.title.textContent = title;
    elements.desc.textContent = description;
    elements.link.href = link;
};

const changeSlide = (direction) => {
    currentSlide = (currentSlide + direction + sliderData.length) % sliderData.length;
    updateSlider(currentSlide);
};

document.querySelector("main > #project > div:nth-child(2) > div > div > span:nth-child(1)").addEventListener("click", () => changeSlide(-1));
document.querySelector("main > #project > div:nth-child(2) > div > div > span:nth-child(2)").addEventListener("click", () => changeSlide(1));
updateSlider(currentSlide);
