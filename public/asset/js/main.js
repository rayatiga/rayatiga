/* ===== Global ===== */
// Display location inside footer
let locationPath = document.getElementById('location')
locationPath.innerHTML = window.location.pathname
// Get preffered color scheme, local storage scheme, button scheme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('rayatiga-scheme')
let nativeScheme = document.getElementById('native-scheme')
// Initial set scheme by user device theme
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('rayatiga-scheme', currentScheme)
document.body.setAttribute('rayatiga-scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
// Scheme switcher to light or dark triggered by clicking button
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('rayatiga-scheme', 'light')
    document.body.setAttribute('rayatiga-scheme', 'light')
  }
  const toDark = () => {
    localStorage.setItem('rayatiga-scheme', 'dark')
    document.body.setAttribute('rayatiga-scheme', 'dark')
  }
  let currentScheme = localStorage.getItem('rayatiga-scheme')
  if (currentScheme == 'dark') {
    toLight()
  } else if (currentScheme == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== Global ===== */

/* ===== Form: form.html ===== */
let formPage = document.getElementsByClassName('form')[0]
if (formPage) {
  let radioSupport = document.getElementById('form-support')
  let radioByol = document.getElementById('form-byol')
  let radioProof = document.getElementById('form-proof')
  let inputSubject = document.getElementById('form-subject')
  let textareaMessage = document.getElementById('form-message')
  function radioChecked() {
    if (radioSupport.checked == 1) {
      inputSubject.placeholder = 'I need support for my...'
      textareaMessage.placeholder = 'Hello, i need support for...\ntroubleshooting?\nbug fixing?\netc.'
    } else if (radioByol.checked == 1) {
      inputSubject.placeholder = 'I bring with my BYOL...'
      textareaMessage.placeholder = 'Hello, my byol specs is...\nCloud provider?\nvCPUs?\nvRAM?\netc.'
    } else if (radioProof.checked == 1) {
      inputSubject.placeholder = 'My invoice e.g., 73023 is already paid'
      textareaMessage.placeholder = 'Hello, i have payed for invoice no e.g., 73023. Please proceed. Thank you.'
    }
  }
  // Display status form reseted
  function formReset() {
    document.getElementById('form-status').innerHTML = 'Form resseted.'
  }
  // Display status form under maintenance
  function formMaintenance() {
    document.getElementById('form-status').innerHTML = 'Sorry, the form is currently undergoing maintenance.'
  }
}
/* ===== Form: form.html ===== */

/* ===== Invoice: invoice.html ===== */
let invoicePage = document.getElementsByClassName('invoice')[0]
if (invoicePage) {
  // Initializing variable
  let invoiceTag = document.getElementById('invoice-tag')
  let invoiceForm = document.getElementById('invoice-form')
  let invoiceUserInput = document.getElementById('invoice-input')
  let invoiceNotFound = document.getElementById('invoice-not-found')
  let invoiceSubmitButton = document.getElementById('invoice-input-button')
  let invoiceInformation = document.getElementsByClassName('invoice-information')[0]
  // Prevent reloading page on submit form
  function handleForm(event) {
    event.preventDefault()
  }
  invoiceForm.addEventListener('submit', handleForm)
  // Give ability button click on pressing enter key
  invoiceUserInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      invoiceSubmitButton.click()
    }
  })
  // Initializing variable list loop for preventing duplicate on many submit
  let paidI = 0
  let discountotherI = 0
  // If user already entered invoice number retrieving from local storage
  let invoiceEntered = localStorage.getItem('rayatiga-invoice')
  if (invoiceEntered) {
    invoiceUserInput.value = invoiceEntered
    invoiceDisplay(invoiceEntered)
  }
  // Reset invoice at local storage
  function invoiceReset() {
    localStorage.removeItem('rayatiga-invoice')
    window.location.reload()
  }
  // Searching invoice by user input
  function invoiceSearch() {
    let invoiceInput = invoiceUserInput.value
    if (isNaN(invoiceInput) || invoiceInput.length < 5 || invoiceInput.length > 5) {
      invoiceNotFound.innerHTML = 'Please enter invoice number in <strong>5 digit only</strong>.'
    } else {
      invoiceDisplay(invoiceInput)
    }
  }
  // Displaying invoice from user input
  function invoiceDisplay(invoiceInput) {
    const invoiceDataList = [
      {
        no: 73023,
        due: '07/27/2023',
        submitted: '07/20/2023',
        paymentoption: 'QRIS - All Payment Method',

        status: 'paid',
        lastupdated: '09/03/2023',

        name: 'Sultan Kautsar',
        company: 'Rayatiga',
        phone: '+62 821 2222 0362',
        email: 'sultan@rayatiga.com',
        service: 'Domain .COM',

        paid: ['Domain name (sultankautsar.com) &mdash; IDR 245,000.00', 'Managed domain name system (DNS & Zone) &mdash; IDR 45,000.00', 'Maintenance &mdash; IDR 25,000.00'],
        discountother: ['Secure socket layer (SSL) &mdash; FREE', 'CloudFlare integration &mdash; FREE', 'Tax and other charge &mdash; FREE', 'Adjustment &mdash; IDR 0.045'],
        total: 'IDR 315,045.00',
      },
      {
        no: 73024,
        due: '09/11/2023',
        submitted: '09/04/2023',
        paymentoption: 'BCA - Bank Transfer',

        status: 'unpaid',
        lastupdated: '09/04/2023',

        name: 'John Doe',
        company: 'Rayatiga',
        phone: '+62 821 2222 0362',
        email: 'johndoe@rayatiga.com',
        service: 'Domain .COM',

        paid: ['Domain name (johndoe.com) &mdash; IDR 245,000.00', 'Managed domain name system (DNS & Zone) &mdash; IDR 45,000.00', 'Maintenance &mdash; IDR 25,000.00'],
        discountother: ['Secure socket layer (SSL) &mdash; FREE', 'CloudFlare integration &mdash; FREE', 'Tax and other charge &mdash; FREE', 'Adjustment &mdash; IDR 0.045'],
        total: 'IDR 315,045.00',
      },
    ]
    // Initialize variable on invoice detail
    let no = document.getElementById('invoice-no')
    let due = document.getElementById('invoice-due')
    let submitted = document.getElementById('invoice-submitted')
    let paymentoption = document.getElementById('invoice-payment-option')
    let status = document.getElementById('invoice-status')
    let lastupdated = document.getElementById('invoice-last-updated')
    let name = document.getElementById('invoice-for-name')
    let company = document.getElementById('invoice-for-company')
    let phone = document.getElementById('invoice-for-phone')
    let email = document.getElementById('invoice-for-email')
    let service = document.getElementById('invoice-for-service')
    let paid = document.getElementById('invoice-detail-paid')
    let discountother = document.getElementById('invoice-detail-discount-other')
    let total = document.getElementById('invoice-detail-total')
    // Check index location on invoice list object
    let invI = invoiceDataList.findIndex((item) => item.no == invoiceInput)
    // Display if invoice index found or not
    if (invI == -1) {
      invoiceNotFound.innerHTML = `<strong>No data found</strong> for invoice #${invoiceInput}, please enter invoice number correctly.`
    } else {
      localStorage.setItem('rayatiga-invoice', invoiceInput)
      invoiceNotFound.innerHTML = ''
      invoiceTag.innerHTML = `#${invoiceInput}`
      invoiceInformation.style.display = 'block'
      // Displaying invoice detail data
      no.innerHTML = invoiceDataList[invI].no
      due.innerHTML = invoiceDataList[invI].due
      submitted.innerHTML = invoiceDataList[invI].submitted
      paymentoption.innerHTML = invoiceDataList[invI].paymentoption
      status.setAttribute('status', invoiceDataList[invI].status)
      lastupdated.innerHTML = invoiceDataList[invI].lastupdated
      name.innerHTML = invoiceDataList[invI].name
      company.innerHTML = invoiceDataList[invI].company
      phone.innerHTML = invoiceDataList[invI].phone
      email.innerHTML = `<a href="${invoiceDataList[invI].email}">${invoiceDataList[invI].email}</a>`
      service.innerHTML = invoiceDataList[invI].service
      while (paidI < invoiceDataList[invI].paid.length) {
        paid.innerHTML += `<li>${invoiceDataList[invI].paid[paidI]}</li>`
        paidI++
      }
      while (discountotherI < invoiceDataList[invI].discountother.length) {
        discountother.innerHTML += `<li>${invoiceDataList[invI].discountother[discountotherI]}</li>`
        discountotherI++
      }
      total.innerHTML = invoiceDataList[invI].total
    }
  }
}
/* ===== Invoice: invoice.html ===== */

/* ===== Other ===== */
// Display developer navigation if in local host
if (window.location.hostname == '127.0.0.1' || window.location.hostname == 'localhost') {
  console.warn(`Window hostname is ${window.location.hostname}. Developer navigation mode active.`)
  let navdev = document.getElementsByClassName('navigation-sitemap')[0]
  let navlist = {
    href: ['/404.html', '/about.html', '/cdn.html', '/contact.html', '/documentation.html', '/form.html', '/founder.html', '/index.html', '/invoice.html', '/maintenance.html', '/payment.html', '/privacy-policy.html', '/project.html', '/service.html', '/sitemap.html', '/template.html', '/ticket.html', '/workflow.html'],
    name: ['404', 'About', 'CDN', 'Contact', 'Documentation', 'Form', 'Founder', 'Home', 'Invoice', 'Maintenance', 'Payment', 'Privacy Policy', 'Project', 'Service', 'Sitemap', 'Template', 'Ticket', 'Workflow'],
  }
  navdev.innerHTML = `<!-- main.js: Developer Navigation -->`
  let count = 0
  for (let i = 0; i < navlist.href.length; i++) {
    navdev.innerHTML += `<li><a href="${navlist.href[i]}">${navlist.name[i]}</a></li>`
    count++
  }
  navdev.innerHTML += `<li>(Count: ${count})</li>`
}
/* ===== Other ===== */
