/* ===== Global ===== */
// Display title and subtitle inside header
document.getElementById('header').outerHTML = `<h1>Rayatiga</h1>
                                               <p>Crafting cutting-edge websites to elevate your digital presence.</p>`
// Display navigation inside footer
document.getElementById('navigation-sitemap').outerHTML = `<p>Navigation & Sitemap</p>
                                                           <ul class="navigation-sitemap">
                                                             <li><a href="/" title="Go to home page">Home</a></li>
                                                             <li><a href="/about.html" title="Go to about page">About</a></li>
                                                             <li><a href="/service.html" title="Go to service page">Service</a></li>
                                                             <li><a href="/form.html" title="Go to form submission page">Form</a></li>
                                                             <li><a href="/project.html" title="Go to project page">Project</a></li>
                                                             <li><a href="/contact.html" title="Go to contact page">Contact</a></li>
                                                             <li><a href="/documentation.html" title="Go to documentation page">Docs</a></li>
                                                             <li><a href="/cdn.html" title="Go to CDN page">CDN</a></li>
                                                             <li><a href="/ticket.html" title="Go to Ticket page">Ticket</a></li>
                                                             <li><a href="/privacy-policy.html" title="Go to privacy & policy page">Policy</a></li>
                                                             <li><a href="/sitemap.html" title="Go to sitemap page">Sitemap</a></li>
                                                           </ul>`
// Display pathname location inside footer
document.getElementById('location').outerHTML = `<p>Location: ${window.location.pathname}</p>`
// Display scheme inside footer
document.getElementById('scheme').outerHTML = `<p>Your native theme is <span id="native-scheme"></span>. Switch scheme to <span onclick="switchScheme()" class="scheme"></span>.</p>`
// Display copyright inside footer
document.getElementById('copyright').outerHTML = `<p class="copyright">Copyright &copy; 2020-2023 Rayatiga Agency. All Rights Reserved.</p>`
// Get preffered color scheme, local storage scheme, button sme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('scheme')
let nativeScheme = document.getElementById('native-scheme')
// Initial set scheme by user device theme
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('scheme', currentScheme)
document.body.setAttribute('scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
// Scheme switcher to light or dark triggered by clicking button
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('scheme', 'light')
    document.body.setAttribute('scheme', 'light')
  }
  const toDark = () => {
    localStorage.setItem('scheme', 'dark')
    document.body.setAttribute('scheme', 'dark')
  }
  let currentScheme = localStorage.getItem('scheme')
  if (currentScheme == 'dark') {
    toLight()
  } else if (currentScheme == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== Global ===== */

/* ===== form.html ===== */
let formPage = document.getElementsByClassName('form')[0]
if (formPage) {
  let radioSupport = document.getElementById('support')
  let radioByol = document.getElementById('byol')
  let radioProof = document.getElementById('proof')
  let inputSubject = document.getElementById('subject')
  let textareaMessage = document.getElementById('message')

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
/* ===== form.html ===== */

/* ===== invoice.html ===== */
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
  let discotherI = 0
  // If user already entered invoice number retrieving from local storage
  let invoiceEntered = localStorage.getItem('invoice')
  if (invoiceEntered) {
    invoiceUserInput.value = invoiceEntered
    invoiceDisplay(invoiceEntered)
  }
  // Reset invoice at local storage
  function invoiceReset() {
    localStorage.removeItem('invoice')
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
        sub: '07/20/2023',

        name: 'Sultan Kautsar',
        company: 'Rayatiga',
        phone: '+62 821 2222 0362',
        email: 'sultan@rayatiga.com',
        service: 'Domain .COM',

        paid: ['Domain name (sultankautsar.com) &mdash; IDR 245,000.00', 'Managed domain name system (DNS & Zone) &mdash; IDR 45,000.00', 'Maintenance &mdash; IDR 25,000.00'],
        discother: ['Secure socket layer (SSL) &mdash; FREE', 'CloudFlare integration &mdash; FREE', 'Tax and other charge &mdash; FREE', 'Adjustment &mdash; IDR 0.045'],
        total: 'IDR 315,045.00',
      },
    ]
    // Initialize variable on invoice detail
    let no = document.getElementById('invoice-no')
    let due = document.getElementById('invoice-due')
    let sub = document.getElementById('invoice-sub')
    let name = document.getElementById('invoice-for-name')
    let company = document.getElementById('invoice-for-comp')
    let phone = document.getElementById('invoice-for-ph')
    let email = document.getElementById('invoice-for-em')
    let service = document.getElementById('invoice-for-serv')
    let paid = document.getElementById('invoice-detail-paid')
    let discother = document.getElementById('invoice-detail-disco')
    let total = document.getElementById('invoice-detail-tot')
    // Check index location on invoice list object
    let invoiceIndex = invoiceDataList.findIndex((item) => item.no == invoiceInput)
    // Display if invoice index found or not
    if (invoiceIndex == -1) {
      invoiceNotFound.innerHTML = `<strong>No data found</strong> for invoice #${invoiceInput}, please enter invoice number correctly.`
    } else {
      localStorage.setItem('invoice', invoiceInput)
      invoiceNotFound.innerHTML = ''
      invoiceTag.innerHTML = `#${invoiceInput}`
      invoiceInformation.style.display = 'block'
      // Displaying invoice detail data
      no.innerHTML = invoiceDataList[invoiceIndex].no
      due.innerHTML = invoiceDataList[invoiceIndex].due
      sub.innerHTML = invoiceDataList[invoiceIndex].sub
      name.innerHTML = invoiceDataList[invoiceIndex].name
      company.innerHTML = invoiceDataList[invoiceIndex].company
      phone.innerHTML = invoiceDataList[invoiceIndex].phone
      email.innerHTML = `<a href="${invoiceDataList[invoiceIndex].email}">${invoiceDataList[invoiceIndex].email}</a>`
      service.innerHTML = invoiceDataList[invoiceIndex].service
      while (paidI < invoiceDataList[invoiceIndex].paid.length) {
        paid.innerHTML += `<li>${invoiceDataList[invoiceIndex].paid[paidI]}</li>`
        paidI++
      }
      while (discotherI < invoiceDataList[invoiceIndex].discother.length) {
        discother.innerHTML += `<li>${invoiceDataList[invoiceIndex].discother[discotherI]}</li>`
        discotherI++
      }
      total.innerHTML = invoiceDataList[invoiceIndex].total
    }
  }
}

/* ===== invoice.html ===== */
