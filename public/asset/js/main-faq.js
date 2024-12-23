document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", function () {
        if (this.open) {
            document.querySelectorAll("details").forEach((otherDetail) => {
                if (otherDetail !== this) {
                    otherDetail.removeAttribute("open");
                }
            });
        }
    });
});
