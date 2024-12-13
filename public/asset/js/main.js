function openModal() {
    const modal = document.querySelector(".modal");
    if (!modal.classList.contains("show")) {
        modal.classList.add("show");
    } else {
        modal.classList.remove("show");
    }
}
