let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                    <div class="container py-2">
                      <a class="navbar-brand fw-bold" href="/">Rayatiga</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link${path == '/' ? (state = active) : (state = '')}"${path == '/' ? (state = aria) : (state = '')} href="/">Home</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/about/' ? (state = active) : (state = '')}"${path == '/about/' ? (state = aria) : (state = '')} href="/about/">About</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/career/' || path == '/career/vacancy/' ? (state = active) : (state = '')}"${path == '/career/' || path == '/career/vacancy/' ? (state = aria) : (state = '')} href="/career/">Career</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/service/' ? (state = active) : (state = '')}"${path == '/service/' ? (state = aria) : (state = '')} href="/service/">Service</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/project/' ? (state = active) : (state = '')}"${path == '/project/' ? (state = aria) : (state = '')} href="/project/">Project</a></li>
                          <li class="nav-item d-lg-none"><a class="nav-link${path == '/contact/' || path == '/contact/form/' ? (state = active) : (state = '')}"${path == '/contact/' || path == '/contact/form/' ? (state = aria) : (state = '')} href="/contact/">Contact</a></li>
                          <li class="nav-item d-none d-lg-block"><a class="btn btn-dark border ms-2${path == '/contact/' || path == '/contact/form/' ? (state = active) : (state = '')}"${path == '/contact/' || path == '/contact/form/' ? (state = aria) : (state = '')} href="/contact/">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>`
}
let footer = document.getElementsByTagName('footer')[0]
if (footer) {
  footer.outerHTML = `<footer>
                        <div class="d-flex justify-content-center align-items-center bg-body border-top h-73px">
                          <p class="text-center m-0">Copyright <i class="bi bi-c-circle"></i> Rayatiga 2023</p>
                        </div>
                      </footer>`
}
let checkoutContent = document.getElementById('checkoutContent')
if (checkoutContent) {
  checkoutContent.innerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                                <div class="container justify-content-center">
                                  <a class="navbar-brand fw-bold m-0" href="/">Rayatiga</a>
                                </div>
                              </nav>
                              <main>
                                <div class="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
                                  <h1 class="fw-bold">Checkouting...</h1>
                                  <p>Please wait, you'll be redirected to WhatsApp Rayatiga in <span id="checkoutTimer">5</span>s.</p>
                                    <button class="btn btn-danger" onclick="closeWindow()">Cancel</button>
                                </div>
                                <button id="schemeButton" aria-label="Scheme Toggle" class="rounded-1"><i class="bi bi-sun-fill text-dark-tertiary"></i></button>
                              </main>`
}
