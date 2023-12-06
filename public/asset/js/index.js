const driver = window.driver.js.driver;
const driverObj = driver({
  showProgress: true,
  showButtons: ["next", "previous", "close"],
  steps: [
    { element: "nav .navbar-brand", popover: { title: "Welcome", description: "Welcome to Rayatiga! Begin our navigation and information tour.", side: "bottom", align: "start" } },
    { element: "nav .nav-item:nth-child(1)", popover: { title: "Navigate to Home", description: "Navigate to the home page like the current page.", side: "bottom", align: "start" } },
    { element: "nav .nav-item:nth-child(2)", popover: { title: "Learn More", description: "Learn more about us on the about page.", side: "bottom", align: "start" } },
    { element: "nav .nav-item:nth-child(3)", popover: { title: "Our Article", description: "List of our latest articles about technology.", side: "bottom", align: "start" } },
    { element: "nav .nav-item:nth-child(4)", popover: { title: "Service Dropdown", description: "List of our services with transparent privacy policy.", side: "bottom", align: "start" } },
    { element: "nav .nav-item:nth-child(5)", popover: { title: "Work Opportunities", description: "See collaboration opportunities with us.", side: "bottom", align: "end" } },
    { element: "nav .nav-item:nth-child(6)", popover: { title: "Reach Us", description: "Send messages, feedback, and other inquiries to the contact page.", side: "bottom", align: "end" } },
    { element: "nav .nav-item:nth-child(8)", popover: { title: "Scheme Dropdown", description: "Adjust to dark or light theme as you prefer.", side: "bottom", align: "end" } },
    { element: "#index .badge", popover: { title: "Service Update", description: "Information about updates to our services.", side: "bottom", align: "start" } },
  ],
});
const startTourButton = document.querySelector("button[onclick='startTour()']");
checkButtonVisibility();
window.addEventListener("resize", function () {
  checkButtonVisibility();
});
function checkButtonVisibility() {
  if (window.localStorage.getItem("startTour") == null && window.innerWidth >= 992) {
    startTourButton.style.display = "block";
  } else {
    startTourButton.style.display = "none";
  }
}
function startTour() {
  startTourButton.style.display = "none";
  window.localStorage.setItem("startTour", "started");
  driverObj.drive();
}
