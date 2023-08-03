// get scheme button
let schemeButton = document.getElementById('schemeButton')
// get item scheme at local storage
let scheme = localStorage.getItem('scheme')
// get iframe html tag
let iframe = document.getElementsByTagName('iframe')[0]
// get prefer color scheme device (is dark/true or light/false)
let prefer = window.matchMedia('(prefers-color-scheme: dark)').matches
// set color scheme to dark
const darkScheme = () => {
  // set html attribute to dark
  document.documentElement.setAttribute('data-bs-theme', 'dark')
  if (iframe) {
    // set iframe style filter if iframe html tag exist
    iframe.style.filter = 'grayscale(52%) invert(92%) contrast(92%)'
  }
  // set local storage item scheme to dark
  localStorage.setItem('scheme', 'dark')
}
// set color scheme to light
const lightScheme = () => {
  // set html attribute to light
  document.documentElement.setAttribute('data-bs-theme', 'light')
  if (iframe) {
    // set iframe style to none if iframe html tag exist
    iframe.style.filter = ''
  }
  // set local storage item scheme to dark
  localStorage.setItem('scheme', 'light')
}
// check if scheme set to dark or light
if (scheme === 'dark') {
  darkScheme()
} else if (scheme === 'light' || scheme === null || scheme === '') {
  lightScheme()
}
// initial state if device is on dark mode (prefer = true) or light mode (prefer = false)
if ((prefer === true && scheme === null) || scheme === '') {
  darkScheme()
}
// scheme toggle button if exist in the page
if (schemeButton) {
  schemeButton.addEventListener('click', (e) => {
    // get item scheme at local storage
    scheme = localStorage.getItem('scheme')
    if (scheme === 'light') {
      // set dark scheme if now/before in light scheme
      darkScheme()
    } else {
      // set light scheme if now/before in dark scheme
      lightScheme()
    }
  })
}
