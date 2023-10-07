const moon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>'
const sun = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
document.body.insertAdjacentHTML(
  'beforeend',
  `
<button class="scheme" title="switch scheme"></button>
`
)

// set attribute aria current page to navigation
document.querySelectorAll('header nav ul li a').forEach((navList) => {
  if (navList.href === window.location.href || navList.href === window.location.href + '.html') {
    navList.setAttribute('aria-current', 'page')
  }
})

// implement dark mode switch but check local storage first
const scheme = document.querySelector('.scheme')
if (localStorage.getItem('scheme') === 'dark') {
  document.body.classList.add('dark')
  scheme.innerHTML = sun
} else {
  document.body.classList.remove('dark')
  scheme.innerHTML = moon
}
scheme.addEventListener('click', () => {
  if (localStorage.getItem('scheme') === 'dark') {
    localStorage.setItem('scheme', 'light')
    document.body.classList.remove('dark')
    scheme.innerHTML = moon
  } else {
    localStorage.setItem('scheme', 'dark')
    document.body.classList.add('dark')
    scheme.innerHTML = sun
  }
})

// if hamburger clicked then show ul by translateX to 0
const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('header ul')
hamburger.addEventListener('click', () => {
  ul.classList.toggle('show')
  hamburger.classList.toggle('clicked')
})
// close ul if clicked outside except hamburger
document.addEventListener('click', (e) => {
  if (!e.target.closest('header ul') && !e.target.closest('.hamburger')) {
    ul.classList.remove('show')
    hamburger.classList.remove('clicked')
  }
})

// main tag min height = window height - header height and footer height change on resize
const main = document.querySelector('main')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
window.addEventListener('resize', () => {
  main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
})

// add loading class to form submit button if clicked
const form = document.querySelector('form')
if (form) {
  const submit = document.querySelector('form button')
  form.addEventListener('submit', () => {
    submit.classList.add('loading')
    setTimeout(() => {
      const done = document.createElement('span')
      submit.after(done)
      done.textContent = 'Done, redirecting...'
      form.reset()
    }, 250)
    setTimeout(() => {
      submit.classList.remove('loading')
    }, 1750)
  })
}
