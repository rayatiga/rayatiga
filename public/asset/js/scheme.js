let schemeButton = document.getElementById('schemeButton')
let scheme = localStorage.getItem('scheme')
let iframe = document.getElementsByTagName('iframe')[0]
let prefer = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkScheme = () => {
  document.documentElement.setAttribute('data-bs-theme', 'dark')
  if (iframe) {
    iframe.style.filter = 'grayscale(52%) invert(92%) contrast(92%)'
  }
  localStorage.setItem('scheme', 'dark')
}
const lightScheme = () => {
  document.documentElement.setAttribute('data-bs-theme', 'light')
  if (iframe) {
    iframe.style.filter = ''
  }
  localStorage.setItem('scheme', 'light')
}
if (scheme === 'dark') {
  darkScheme()
} else if (scheme === 'light' || scheme === null || scheme === '') {
  lightScheme()
}
if ((prefer === true && scheme === null) || scheme === '') {
  darkScheme()
}
if (schemeButton) {
  schemeButton.addEventListener('click', (e) => {
    scheme = localStorage.getItem('scheme')
    if (scheme === 'light') {
      darkScheme()
    } else {
      lightScheme()
    }
  })
}
