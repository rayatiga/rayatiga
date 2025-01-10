const params = new URLSearchParams(window.location.search);
const form = document.querySelector("#contact-form");
const inquirySelect = document.querySelector("#inquiry");
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
        inquirySelect.value = "career";
        if (careerValue) {
            careerSelect.value = careerValue;
            serviceSelect.value = "";
            careerSelect.required = true;
            serviceSelect.removeAttribute("required");
        }
        careerDiv.style.display = "flex";
    } else if (params.has("s")) {
        const serviceValue = params.get("s");
        inquirySelect.value = "service";
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

inquirySelect.addEventListener("change", function () {
    const selectedValue = inquirySelect.value;
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

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute("6LeW5qwqAAAAAI_Ocn-rxYvmTdiJz6bTjhHJhUFw", { action: "LOGIN" });
    });
}
