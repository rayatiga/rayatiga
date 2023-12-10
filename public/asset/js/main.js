const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
main.style.minHeight = `calc(100dvh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;
window.addEventListener("resize", () => {
  main.style.minHeight = `calc(100dvh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
popoverTriggerList.forEach((popoverTriggerEl) => {
  popoverTriggerEl.style.cursor = "pointer";
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
