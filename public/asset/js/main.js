// Dynamic main height to minimum height 100vh
const main = document.querySelector('main')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
window.addEventListener('resize', () => {
  main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
})

// Popover trigger
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))
popoverTriggerList.forEach((popoverTriggerEl) => {
  popoverTriggerEl.style.cursor = 'pointer'
})

// Tooltip trigger
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

// Form validation
;(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      },
      false
    )
  })
})()
