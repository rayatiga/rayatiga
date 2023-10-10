let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                    <div class="container py-2">
                      <a class="navbar-brand fw-bold" href="/res/v3/">Rayatiga</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link${path == '/res/v3/' ? (state = active) : (state = '')}"${path == '/res/v3/' ? (state = aria) : (state = '')} href="/res/v3/">Home</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/res/v3/about/' ? (state = active) : (state = '')}"${path == '/res/v3/about/' ? (state = aria) : (state = '')} href="/res/v3/about/">About</a></li>
                          <li class="nav-item"><a class="nav-link${path == '/res/v3/career/' ? (state = active) : (state = '')}"${path == '/res/v3/career/' ? (state = aria) : (state = '')} href="/res/v3/career/">Career</a></li>
                          <li class="nav-item dropdown">
                            <a class="nav-link${path == '/res/v3/hosting/' || path == '/res/v3/hosting/about/' || path == '/res/v3/hosting/contact/' || path == '/res/v3/hosting/pricing/' ? (state = active) : (state = '')} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service&nbsp;</a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item${path == '/res/v3/hosting/' ? (state = active) : (state = '')}"${path == '/res/v3/hosting/' ? (state = aria) : (state = '')} href="/res/v3/hosting/">Home</a></li>
                              <li><a class="dropdown-item${path == '/res/v3/hosting/about/' ? (state = active) : (state = '')}"${path == '/res/v3/hosting/about/' ? (state = aria) : (state = '')} href="/res/v3/hosting/about/">About</a></li>
                              <li><a class="dropdown-item${path == '/res/v3/hosting/contact/' ? (state = active) : (state = '')}"${path == '/res/v3/hosting/contact/' ? (state = aria) : (state = '')} href="/res/v3/hosting/contact/">Contact</a></li>
                              <li><a class="dropdown-item${path == '/res/v3/hosting/pricing/' ? (state = active) : (state = '')}"${path == '/res/v3/hosting/pricing/' ? (state = aria) : (state = '')} href="/res/v3/hosting/pricing/">Pricing</a></li>
                            </ul>
                          </li>
                          <li class="nav-item"><a class="nav-link${path == '/res/v3/project/' ? (state = active) : (state = '')}"${path == '/res/v3/project/' ? (state = aria) : (state = '')} href="/res/v3/project/">Project</a></li>
                          <li class="nav-item d-lg-none"><a class="nav-link${path == '/res/v3/contact/' ? (state = active) : (state = '')}"${path == '/res/v3/contact/' ? (state = aria) : (state = '')} href="/res/v3/contact/">Contact</a></li>
                          <li class="nav-item d-none d-lg-block"><a class="btn btn-dark border ms-2${path == '/res/v3/contact/' ? (state = active) : (state = '')}"${path == '/res/v3/contact/' ? (state = aria) : (state = '')} href="/res/v3/contact/">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>`
}
let footer = document.getElementsByTagName('footer')[0]
if (footer) {
  footer.outerHTML = `<footer>
                        <div class="d-flex justify-content-center align-items-center bg-body border-top h-73px">
                          <p class="text-center m-0">Copyright <i class="bi bi-c-circle"></i> 2020-2023 Rayatiga. All Rights Reserved.</p>
                        </div>
                      </footer>`
}
let checkoutContent = document.getElementById('checkoutContent')
if (checkoutContent) {
  checkoutContent.innerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                                <div class="container justify-content-center">
                                  <a class="navbar-brand fw-bold m-0" href="/res/v3/">Rayatiga</a>
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
