/* Index CSS */
/* Framework: Driver.js: Initialization */
const driver = window.driver.js.driver;
/* Framework: Driver.js: Element Object Steps */
const driverObj = driver({
  showProgress: true,
  showButtons: ["next", "previous", "close"],
  steps: [
    { element: "header .navbar-brand", popover: { title: "Welcome", description: "Welcome to Rayatiga! Begin our navigation and information tour.", side: "bottom", align: "start" } },
    { element: "header .navbar-collapse", popover: { title: "Navigation", description: "Click the text link to navigate pages.", side: "bottom", align: "start" } },
    { element: "header #bd-theme", popover: { title: "Scheme", description: "Allow you to switch between dark and light schemes.", side: "bottom", align: "start" } },
    { element: ".badge-group .badge:nth-child(1)", popover: { title: "New Services", description: "Information about new services.", side: "bottom", align: "start" } },
    { element: ".badge-group .badge:nth-child(2)", popover: { title: "Job Open", description: "Information about new job opening.", side: "bottom", align: "start" } },
    { element: "main a.btn.btn-dark", popover: { title: "Service Button", description: "Click to navigate to service page.", side: "bottom", align: "start" } },
    { element: "main a.btn.btn-outline-dark", popover: { title: "Contact Button", description: "Click to navigate to contact page.", side: "bottom", align: "start" } },
  ],
});
/* Default: Start Tour Button */
const startTourButton = document.querySelector("button[onclick='startTour()']");
checkButtonVisibility();
window.addEventListener("resize", function () {
  checkButtonVisibility();
});
/* Default: Function Start Tour Button Visibility Check */
function checkButtonVisibility() {
  if (window.localStorage.getItem("startTour") == null && window.innerWidth >= 992) {
    startTourButton.style.display = "block";
  } else {
    startTourButton.style.display = "block";
  }
}
/* Default: Function Run The Tour */
function startTour() {
  startTourButton.style.display = "none";
  window.localStorage.setItem("startTour", "started");
  driverObj.drive();
}
