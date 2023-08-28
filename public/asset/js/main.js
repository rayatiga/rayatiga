/* ===== GLOBAL START ===== */
// Display pathname location below header
document.getElementById('loc').outerHTML = `<p class="loc">Location: ${window.location.pathname}</p>`
// Display title and subtitle inside header
document.getElementById('hdr').outerHTML = `<h1>Rayatiga</h1>
                                            <p>Crafting cutting-edge websites to elevate your digital presence.</p>`
// Display navigation inside footer
document.getElementById('map').outerHTML = `<p>Navigation & Sitemap</p>
                                            <ul class="map">
                                              <li><a href="/" title="Go to home page">Home</a></li>
                                              <li><a href="/about.html" title="Go to about page">About</a></li>
                                              <li><a href="/service.html" title="Go to service page">Service</a></li>
                                              <li><a href="/form.html" title="Go to form submission page">Form</a></li>
                                              <li><a href="/contact.html" title="Go to contact page">Contact</a></li>
                                              <li><a href="/documentation.html" title="Go to documentation page">Docs</a></li>
                                              <li><a href="/cdn.html" title="Go to CDN page">CDN</a></li>
                                              <li><a href="/ticket.html" title="Go to Ticket page">Ticket</a></li>
                                              <li><a href="/privacy-policy.html" title="Go to privacy & policy page">Policy</a></li>
                                              <li><a href="/sitemap.html" title="Go to sitemap page">Sitemap</a></li>
                                            </ul>`
document.getElementById('cr').outerHTML = `<p class="cr">Copyright &copy; 2020-2023 Rayatiga Agency. All Rights Reserved.</p>`
document.getElementById('sme').outerHTML = `<p>Your native theme is <span id="nesme"></span>. Switch scheme to <a onclick="switchScheme()" class="sme"></a>.</p>`
// Get preffered color scheme, local storage scheme, button sme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('scheme')
let textScheme = document.getElementsByClassName('sme')[0]
let nativeScheme = document.getElementById('nesme')
// Initial set scheme by user device theme
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('scheme', currentScheme)
document.body.setAttribute('scheme', currentScheme)
textScheme.setAttribute('scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
// Scheme switcher to light or dark triggered by clicking button
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('scheme', 'light')
    document.body.setAttribute('scheme', 'light')
    textScheme.setAttribute('scheme', 'light')
  }
  const toDark = () => {
    localStorage.setItem('scheme', 'dark')
    document.body.setAttribute('scheme', 'dark')
    textScheme.setAttribute('scheme', 'dark')
  }
  let currentScheme = localStorage.getItem('scheme')
  if (currentScheme == 'dark' || textScheme.getAttribute('scheme') == 'dark') {
    toLight()
  } else if (currentScheme == 'light' || textScheme.getAttribute('scheme') == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== GLOBAL END ===== */

/* ===== FORM START (form.html) ===== */
// Display status form reseted
function formReset() {
  document.getElementById('form-status').innerHTML = 'Form resseted.'
}
// Display status form under maintenance
function formMaintenance() {
  document.getElementById('form-status').innerHTML = 'Sorry, the form is currently undergoing maintenance.'
}
/* ===== FORM END (form.html) ===== */
