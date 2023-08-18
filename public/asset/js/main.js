let scrollTopButton = document.getElementById('scrollTopButton')
if (scrollTopButton) {
  window.onscroll = function () {
    scrollTopButtonShow()
  }
  function scrollTopButtonShow() {
    if (scrollTopButton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.opacity = '1'
      } else {
        scrollTopButton.style.opacity = '0'
      }
    }
  }
  function scrollTopButtonAction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
let checkoutTimerSpan = document.getElementById('checkoutTimer')
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
  window.open('', '_self', '')
  window.close()
}
