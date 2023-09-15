/* ===== Global ===== */
// Location
let locationPath = document.getElementById('location')
locationPath.innerHTML = window.location.pathname
// Scheme
let preferScheme = window.matchMedia('(prefers-color-scheme: light)').matches
let currentScheme = localStorage.getItem('rayatiga-scheme')
let nativeScheme = document.getElementById('native-scheme')
if (currentScheme == null && preferScheme) {
  currentScheme = 'light'
} else if (currentScheme == null && !preferScheme) {
  currentScheme = 'dark'
}
localStorage.setItem('rayatiga-scheme', currentScheme)
document.body.setAttribute('rayatiga-scheme', currentScheme)
nativeScheme.innerHTML = preferScheme == true ? 'light' : 'dark'
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
  // Placeholder
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
  // Status
  function formReset() {
    document.getElementById('form-status').innerHTML = 'Form resseted.'
  }
  function formMaintenance() {
    document.getElementById('form-status').innerHTML = 'Sorry, the form is currently undergoing maintenance.'
  }
}
/* ===== Form: form.html ===== */

/* ===== Invoice: invoice.html ===== */
let invoicePage = document.getElementsByClassName('invoice')[0]
if (invoicePage) {
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
  let invoiceForm = document.getElementById('invoice-form')
  let invoiceInput = document.getElementById('invoice-input')
  let invoiceSubmitButton = document.getElementById('invoice-input-button')
  let invoiceStatusReturn = document.getElementById('invoice-status-return')
  let invoiceInformation = document.getElementsByClassName('invoice-information')[0]
  let invoiceTag = document.getElementById('invoice-tag')
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
  let paidI = 0
  let discountotherI = 0
  // Prevent reload
  function handleForm(event) {
    event.preventDefault()
  }
  invoiceForm.addEventListener('submit', handleForm)
  invoiceInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      invoiceSubmitButton.click()
    }
  })
  // Reload
  function invoiceReload() {
    window.location.reload()
  }
  // Search
  function invoiceSearch() {
    let invoiceInputValue = invoiceInput.value
    let invI = invoiceDataList.findIndex((item) => item.no == invoiceInputValue)
    if (invoiceInputValue.length < 5 || invoiceInputValue.length > 5) {
      invoiceStatusReturn.innerHTML = 'Please enter invoice number in <strong>5 digit only</strong>.'
    } else {
      if (invI == -1) {
        invoiceStatusReturn.innerHTML = `<strong>No data found</strong> for invoice #${invoiceInputValue}, please enter invoice number correctly.`
        invoiceTag.innerHTML = ``
        invoiceInformation.style.display = 'none'
        no.innerHTML = ``
        due.innerHTML = ``
        submitted.innerHTML = ``
        paymentoption.innerHTML = ``
        status.setAttribute('status', '')
        lastupdated.innerHTML = ``
        name.innerHTML = ``
        company.innerHTML = ``
        phone.innerHTML = ``
        email.innerHTML = ``
        service.innerHTML = ``
        paid.innerHTML = ``
        discountother.innerHTML = ``
        total.innerHTML = ``
      } else {
        invoiceDisplay(invoiceInputValue, invI)
      }
    }
  }
  // Display
  function invoiceDisplay(invoiceInputValue, invI) {
    invoiceStatusReturn.innerHTML = ''
    invoiceTag.innerHTML = `#${invoiceInputValue}`
    invoiceInformation.style.display = 'block'
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
/* ===== Invoice: invoice.html ===== */

/* ===== Workflow: workflow.html ===== */
let workflowPage = document.getElementsByClassName('workflow')[0]
if (workflowPage) {
  const workflowDataList = [
    {
      id: '2308251137',
      subject: 'front page displayed not properly',
      pic: 'r01',
      status: 'resolved',
    },
    {
      id: '2308251457',
      subject: 'ajax shopping cart not working',
      pic: 'r01',
      status: 'pending',
    },
    {
      id: '2308251534',
      subject: 'my payment gateway error',
      pic: 'r01',
      status: 'unresolved',
    },
  ]
  let workflowForm = document.getElementById('workflow-form')
  let workflowInput = document.getElementById('workflow-input')
  let workflowSubmitButton = document.getElementById('workflow-input-button')
  let workflowStatusReturn = document.getElementById('workflow-status-return')
  let workflowInformation = document.getElementsByClassName('workflow-information')[0]
  let tag = document.getElementById('workflow-tag')
  let id = document.getElementById('workflow-id')
  let subject = document.getElementById('workflow-subject')
  let pic = document.getElementById('workflow-pic')
  let status = document.getElementById('workflow-status')
  // Prevent reload
  function handleForm(event) {
    event.preventDefault()
  }
  workflowForm.addEventListener('submit', handleForm)
  workflowInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      workflowSubmitButton.click()
    }
  })
  // Search
  function workflowSearch() {
    let workflowInputValue = workflowInput.value
    if (workflowInputValue.length < 10 || workflowInputValue.length > 10) {
      workflowStatusReturn.innerHTML = `Please enter workflow id in <strong>10 digit only</strong>.`
    } else {
      let wflI = workflowDataList.findIndex((item) => item.id == workflowInputValue)
      if (wflI == -1) {
        workflowStatusReturn.innerHTML = `<strong>No data found</strong> for workflow #${workflowInputValue}, please enter workflow id correctly.`
        workflowInformation.style.display = 'none'
        tag.innerHTML = ``
        id.innerHTML = ``
        subject.innerHTML = ``
        pic.innerHTML = ``
        status.innerHTML = ``
      } else {
        workflowDispay(workflowInputValue, wflI)
      }
    }
  }
  // Reload
  function workflowReload() {
    window.location.reload()
  }
  // Display
  function workflowDispay(workflowInputValue, wflI) {
    workflowInformation.style.display = 'block'
    workflowStatusReturn.innerHTML = ``
    tag.innerHTML = `#${workflowInputValue}`
    id.innerHTML = workflowDataList[wflI].id
    subject.innerHTML = workflowDataList[wflI].subject
    pic.innerHTML = workflowDataList[wflI].pic
    status.innerHTML = workflowDataList[wflI].status
  }
}
/* ===== Workflow: workflow.html ===== */

/* ===== Other ===== */
// Developer navigation
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
