let isTemplate = window.location.pathname;
let invContainer = document.getElementsByClassName("inv")[0];
const divTemplate = document.querySelector(".template");
if (isTemplate == "/invoice.html") {
  divTemplate.style.display = "block";
  invContainer.style.opacity = "0.25";
} else {
  divTemplate.style.display = "none";
}
function closeTemplate() {
  invContainer.style.opacity = "1";
  divTemplate.style.display = "none";
}
