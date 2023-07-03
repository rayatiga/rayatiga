var scrollTopButton = document.getElementById("scrollTop")
if (scrollTopButton) {
    window.onscroll = function () {
        showScrollButton()
    }
    function showScrollButton() {
        if (scrollTopButton) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopButton.style.opacity = "1"
            } else {
                scrollTopButton.style.opacity = "0"
            }
        }
    }
    function scrollTopAction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}
let checkoutTimerSpan = document.getElementById("checkoutTimer")
if (checkoutTimerSpan) {
    checkoutTimer()
}
function checkoutTimer() {
    let countdown = 5
    let interval = setInterval(function () {
        checkoutTimerSpan.innerHTML = --countdown

        if (countdown <= 0) {
            clearInterval(interval)
        }
    }, 1000)
}
function closeWindow() {
    window.open("", "_self", "")
    window.close()
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
