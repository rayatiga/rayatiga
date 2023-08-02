// Scheme Worker
let schemeButton = document.getElementById('schemeButton')
let scheme = localStorage.getItem('scheme')
const darkScheme = () => {
  document.documentElement.setAttribute('data-bs-theme', 'dark')
  localStorage.setItem('scheme', 'dark')
}
const lightScheme = () => {
  document.documentElement.setAttribute('data-bs-theme', 'light')
  localStorage.setItem('scheme', 'light')
}
if (scheme === 'dark') {
  darkScheme()
} else if (scheme === 'light' || scheme === null || scheme === '') {
  lightScheme()
}
schemeButton.addEventListener('click', (e) => {
  scheme = localStorage.getItem('scheme')
  if (scheme === 'light') {
    darkScheme()
  } else {
    lightScheme()
  }
})
