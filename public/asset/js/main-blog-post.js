const shareButton = document.querySelector("main > section:nth-child(1) > div > div > span:nth-child(2)");
shareButton.addEventListener("click", () => {
    const textToCopy = `${document.title} - ${window.location.href}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = shareButton.textContent;
        shareButton.textContent = "Copied!";
        setTimeout(() => {
            shareButton.textContent = originalText;
        }, 2000);
    });
});
