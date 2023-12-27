/* Main JS */
// Bootstrap: Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
popoverTriggerList.forEach((popoverTriggerEl) => {
  popoverTriggerEl.style.cursor = "pointer";
});
// Bootstrap: Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
// Bootstrap: Form Validation
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// Event navbar clicked
const navToggle = document.querySelector("button.navbar-toggler");
const navMain = document.querySelector("nav.navbar");
navMain.style.transition = "background 0.25s ease-in-out";
let navToggleTrigger = false;
const navMainStyled = () => {
  navMain.classList.add("bg-body-tertiary");
  navMain.classList.add("border-bottom");
};
const navMainTransparent = () => {
  navMain.classList.remove("bg-body-tertiary");
  navMain.classList.remove("border-bottom");
};
navToggle.onclick = function () {
  navToggle.disabled = true;
  setTimeout(() => {
    navToggle.disabled = false;
  }, 350);
  if (!navToggleTrigger && window.scrollY < 16) {
    navMainStyled();
    navToggleTrigger = true;
  } else if (window.scrollY < 16) {
    navMainTransparent();
    navToggleTrigger = false;
  }
};
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 16) {
    navMainStyled();
  } else {
    navMainTransparent();
  }
});
