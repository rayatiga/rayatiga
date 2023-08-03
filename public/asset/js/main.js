// get scroll to top button with id attribute
let scrollTopButton = document.getElementById('scrollTopButton')
// if scroll to top button exist in the page
if (scrollTopButton) {
  // show scroll top button when window is on scroll
  window.onscroll = function () {
    scrollTopButtonShow()
  }
  function scrollTopButtonShow() {
    // check if there are scroll top button exist in the page
    if (scrollTopButton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // show scroll to top button when scrolling 20px from top of the page
        scrollTopButton.style.opacity = '1'
      } else {
        // hide scroll to top button when window below 20px from top of the page
        scrollTopButton.style.opacity = '0'
      }
    }
  }
  function scrollTopButtonAction() {
    // if button clicked then window will be scrolled to the top of the page or 0px
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
// get checkout timer by id attribute
let checkoutTimerSpan = document.getElementById('checkoutTimer')
// if there are checkout timer exist in the page
if (checkoutTimerSpan) {
  checkoutTimer()
}
function checkoutTimer() {
  // set countdown to 5 seconds
  let countdown = 5
  // set interval countdown to zero (0) with delay 1000ms or 1 second
  let interval = setInterval(function () {
    checkoutTimerSpan.innerHTML = --countdown
    if (countdown <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}
// close checkout window
function closeWindow() {
  // close window and return to before opened tab browser
  window.open('', '_self', '')
  window.close()
}
