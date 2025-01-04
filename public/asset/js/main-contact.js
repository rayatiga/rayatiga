const params = new URLSearchParams(window.location.search);
const form = document.querySelector("#contact-form");
const subjectSelect = document.querySelector("#subject");
const careerSelect = document.querySelector("#position");
const serviceSelect = document.querySelector("#product");
const careerDiv = document.querySelector("form > div:has(select#position)");
const serviceDiv = document.querySelector("form > div:has(select#product)");
const messageTextarea = document.querySelector("#message");

function resetForm() {
    form.reset();
    careerDiv.style.display = "none";
    serviceDiv.style.display = "none";
}

document.querySelector("#contact-reset").addEventListener("click", function () {
    if (confirm("Are you sure you want to reset the form?")) {
        resetForm();
    }
});

window.addEventListener("load", function () {
    resetForm();
    if (params.has("c")) {
        const careerValue = params.get("c");
        subjectSelect.value = "career";
        if (careerValue) {
            careerSelect.value = careerValue;
            serviceSelect.value = "";
            careerSelect.required = true;
            serviceSelect.removeAttribute("required");
        }
        careerDiv.style.display = "flex";
    } else if (params.has("s")) {
        const serviceValue = params.get("s");
        subjectSelect.value = "service";
        if (serviceValue) {
            careerSelect.value = "";
            serviceSelect.value = serviceValue;
            careerSelect.removeAttribute("required");
            serviceSelect.required = true;
            messageTextarea.value = "Hello Rayatiga, I would like to order the selected package above. Thank you!";
        }
        serviceDiv.style.display = "flex";
    }
});

subjectSelect.addEventListener("change", function () {
    const selectedValue = subjectSelect.value;
    if (selectedValue === "career") {
        serviceSelect.value = "";
        messageTextarea.value = "";
        careerDiv.style.display = "flex";
        serviceDiv.style.display = "none";
        careerSelect.required = true;
        serviceSelect.removeAttribute("required");
    } else if (selectedValue === "service") {
        careerSelect.value = "";
        messageTextarea.value = "";
        serviceDiv.style.display = "flex";
        careerDiv.style.display = "none";
        careerSelect.removeAttribute("required");
        serviceSelect.required = true;
    } else {
        serviceSelect.value = "";
        careerSelect.value = "";
        messageTextarea.value = "";
        serviceDiv.style.display = "none";
        careerDiv.style.display = "none";
        serviceSelect.removeAttribute("required");
        careerSelect.removeAttribute("required");
    }
});

function onSubmit(token) {
    document.getElementById("contact-form").submit();
}
