// Main
// Main: Check local
function checkLocal() {
    return window.location.href.includes("127.0.0.1") || window.location.href.includes("localhost") ? true : false;
}
checkLocal() && console.log("Message:\nLocal development.\nLog showed only in local mode.");
// Main: Kebab Case
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
}
// Main: Career Parameter
function careerPage() {
    const detailSummary = document.querySelectorAll("details > summary");
    const urlParams = new URLSearchParams(window.location.search);
    const jobName = urlParams.get("job");
    detailsOpen(jobName);
    function detailsOpen(jobName) {
        detailSummary.forEach((summary) => {
            if (toKebabCase(summary.textContent) == jobName) {
                summary.parentElement.setAttribute("open", "");
                summary.parentElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    }
}
window.location.href.includes("career") && careerPage();
