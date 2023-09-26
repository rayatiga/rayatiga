/* ===== Global ===== */
// Skip to main content
document.getElementsByTagName('main')[0].setAttribute('id', 'main-content')
document.body.insertAdjacentHTML('afterbegin', `<a href="#main-content">Skip to main content</a>`)
// Navigation
let navigationHeaderFooter = document.querySelectorAll('.navigation')
let navigationList = `
<li><a href="/">Home</a></li>
<li><a href="/about.html">About</a></li>
<li><a href="/service.html">Service</a></li>
<li><a href="/project.html">Project</a></li>
<li><a href="/form.html">Form</a></li>
<li><a href="/contact.html">Contact</a></li>
<li><a href="/privacy-policy.html">Privacy & Policy</a></li>`
let navigationListFull = `
<li><a href="/">Home</a></li>
<li><a href="/about.html">About</a></li>
<li><a href="/service.html">Service</a></li>
<li><a href="/project.html">Project</a></li>
<li><a href="/form.html">Form</a></li>
<li><a href="/contact.html">Contact</a></li>
<li><a href="/privacy-policy.html">Privacy & Policy</a></li>
<li>&mdash;</li>
<li><a href="/cdn.html">CDN</a></li>
<li><a href="/documentation.html">Documentation</a></li>
<li><a href="/founder.html">Founder</a></li>
<li><a href="/invoice.html">Invoice</a></li>
<li><a href="/payment.html">Payment</a></li>
<li><a href="/sitemap.html">Sitemap</a></li>
<li><a href="/template.html">Template</a></li>
<li><a href="/ticket.html">Ticket</a></li>
<li><a href="/workflow.html">Workflow</a></li>`
navigationHeaderFooter[0].outerHTML = navigationList
navigationHeaderFooter[1].outerHTML = navigationListFull
document.querySelectorAll('header ul li a').forEach((navigationListHeader) => {
  if (navigationListHeader.href == window.location.href || navigationListHeader.href == window.location.href + '.html') {
    navigationListHeader.setAttribute('aria-current', 'page')
  }
})
document.querySelectorAll('footer ul li a').forEach((navigationListFooter) => {
  if (navigationListFooter.href == window.location.href || navigationListFooter.href == window.location.href + '.html') {
    navigationListFooter.setAttribute('aria-current', 'page')
  }
})
// Location
let locationPath = document.getElementById('location')
locationPath.innerText = window.location.pathname
// Scheme
let schemePrefer = window.matchMedia('(prefers-color-scheme: light)').matches
let schemeCurrent = localStorage.getItem('rayatiga-scheme')
let schemeNative = document.getElementById('native-scheme')
let schemeButton = document.getElementsByClassName('scheme')[0]
if (schemeCurrent == null && schemePrefer) {
  schemeCurrent = 'light'
  schemeButton.innerText = 'light'
} else if (schemeCurrent == null && !schemePrefer) {
  schemeCurrent = 'dark'
  schemeButton.innerText = 'dark'
}
localStorage.setItem('rayatiga-scheme', schemeCurrent)
document.body.setAttribute('rayatiga-scheme', schemeCurrent)
schemeNative.innerText = schemePrefer == true ? 'light' : 'dark'
schemeButton.innerText = schemeCurrent
function switchScheme() {
  const toLight = () => {
    localStorage.setItem('rayatiga-scheme', 'light')
    document.body.setAttribute('rayatiga-scheme', 'light')
    schemeButton.innerText = 'light'
  }
  const toDark = () => {
    localStorage.setItem('rayatiga-scheme', 'dark')
    document.body.setAttribute('rayatiga-scheme', 'dark')
    schemeButton.innerText = 'dark'
  }
  let schemeCurrent = localStorage.getItem('rayatiga-scheme')
  if (schemeCurrent == 'dark') {
    toLight()
  } else if (schemeCurrent == 'light') {
    toDark()
  } else {
    toLight()
  }
}
/* ===== Global ===== */

/* ===== Form: form.html ===== */
let formPage = document.getElementsByClassName('form')[0]
if (formPage) {
  let radioContact = document.getElementById('form-contact')
  let radioSupport = document.getElementById('form-support')
  let radioByol = document.getElementById('form-byol')
  let radioProof = document.getElementById('form-proof')
  let inputSubject = document.getElementById('form-subject')
  let textareaMessage = document.getElementById('form-message')
  let formStatus = document.getElementById('form-status')
  function radioChecked() {
    if (radioContact.checked == 1) {
      inputSubject.placeholder = 'Enter your subject...'
      textareaMessage.placeholder = 'Enter your message...'
    } else if (radioSupport.checked == 1) {
      inputSubject.placeholder = 'I need support for...'
      textareaMessage.placeholder = 'Hello, I need support for...'
    } else if (radioByol.checked == 1) {
      inputSubject.placeholder = 'I bring with my own properties...'
      textareaMessage.placeholder = 'Hello, I have lab with specifications...'
    } else if (radioProof.checked == 1) {
      inputSubject.placeholder = 'My invoice 12345 is already paid'
      textareaMessage.placeholder = 'Hello, I have payed for invoice no 12345 with bank transfer...'
    }
  }
  function formReset() {
    inputSubject.placeholder = 'Enter your subject...'
    textareaMessage.placeholder = 'Please select type first or enter message...'
    formStatus.innerText = 'Form resseted.'
    setTimeout(function () {
      formStatus.innerText = ''
    }, 2500)
  }
  function formSubmit() {
    formStatus.innerText = 'Form submit triggered.'
    setTimeout(function () {
      formStatus.innerText = ''
    }, 2500)
  }
}
/* ===== Form: form.html ===== */

/* ===== Invoice: invoice.html ===== */
let invoicePage = document.getElementsByClassName('invoice')[0]
if (invoicePage) {
  let invoiceDataApi = 'https://cdn.rayatiga.com/invoiceDataList.json'
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
  function invoiceReload() {
    window.location.replace(window.location.origin + window.location.pathname)
  }
  function invoiceSearch() {
    fetch(invoiceDataApi)
      .then(function (invoiceResponse) {
        if (!invoiceResponse.ok) {
          invoiceErrorApi(invoiceResponse.status, 1)
        }
        return invoiceResponse.json()
      })
      .then(function (invoiceDataList) {
        let invoiceInputValue = invoiceInput.value
        let invI = invoiceDataList.findIndex((item) => item.no == invoiceInputValue)
        if (invoiceInputValue.length < 5 || invoiceInputValue.length > 5) {
          invoiceStatusReturn.innerHTML = 'Please enter invoice number in <strong>5 digit only</strong>.'
        } else {
          if (invI == -1) {
            invoiceNoDataFound(invoiceInputValue)
          } else {
            invoiceDisplay(invoiceDataList, invoiceInputValue, invI)
          }
        }
      })
      .catch(function (error) {
        invoiceErrorApi(error, 2)
      })
  }
  let invoiceUrlParam = new URLSearchParams(window.location.search)
  let invoiceUrlParamId = invoiceUrlParam.get('no')
  if (invoiceUrlParamId) {
    fetch(invoiceDataApi)
      .then(function (invoiceResponse) {
        if (!invoiceResponse.ok) {
          invoiceErrorApi(invoiceResponse.status, 1)
        }
        return invoiceResponse.json()
      })
      .then(function (invoiceDataList) {
        if (invoiceUrlParamId.length < 5 || invoiceUrlParamId.length > 5) {
          invoiceStatusReturn.innerHTML = 'Please enter invoice number in <strong>5 digit only</strong>.'
        } else {
          InvoiceSearchParam(invoiceDataList, invoiceUrlParamId)
        }
      })
      .catch(function (error) {
        invoiceErrorApi(error, 2)
      })
  }
  function InvoiceSearchParam(invoiceDataList, invoiceUrlParamId) {
    let invI = invoiceDataList.findIndex((item) => item.no == invoiceUrlParamId)
    if (invI == -1) {
      invoiceNoDataFound(invoiceUrlParamId)
    } else {
      invoiceInput.value = invoiceUrlParamId
      invoiceDisplay(invoiceDataList, invoiceUrlParamId, invI)
    }
  }
  function invoiceErrorApi(invoiceResponseStatus, numberOfError) {
    if (numberOfError == 1) {
      invoiceStatusReturn.innerHTML = `There is a <strong>server-side error</strong>. The code is: ${invoiceResponseStatus}.`
    } else {
      invoiceStatusReturn.innerHTML += `<br />Please report it to us on the <a href="/contact.html">contact page</a>. <pre>Error message: ${invoiceResponseStatus}</pre>`
    }
  }
  function invoiceNoDataFound(invoiceValue) {
    invoiceStatusReturn.innerHTML = `<strong>No data found</strong> for invoice #${invoiceValue}, please enter invoice number correctly.`
    invoiceTag.innerText = ''
    invoiceInformation.style.display = 'none'
    no.innerText = ''
    due.innerText = ''
    submitted.innerText = ''
    paymentoption.innerText = ''
    status.setAttribute('status', '')
    lastupdated.innerText = ''
    name.innerText = ''
    company.innerText = ''
    phone.innerText = ''
    email.innerText = ''
    service.innerText = ''
    paid.innerText = ''
    discountother.innerText = ''
    total.innerText = ''
  }
  function invoiceDisplay(invoiceDataList, invoiceInputValue, invI) {
    invoiceStatusReturn.innerText = ''
    invoiceTag.innerText = `#${invoiceInputValue}`
    invoiceInformation.style.display = 'block'
    no.innerText = invoiceDataList[invI].no
    due.innerText = invoiceDataList[invI].due
    submitted.innerText = invoiceDataList[invI].submitted
    paymentoption.innerText = invoiceDataList[invI].paymentoption
    status.setAttribute('status', invoiceDataList[invI].status)
    lastupdated.innerText = invoiceDataList[invI].lastupdated
    name.innerText = invoiceDataList[invI].name
    company.innerText = invoiceDataList[invI].company
    phone.innerText = invoiceDataList[invI].phone
    email.innerHTML = `<a href="${invoiceDataList[invI].email}">${invoiceDataList[invI].email}</a>`
    service.innerText = invoiceDataList[invI].service
    while (paidI < invoiceDataList[invI].paid.length) {
      paid.innerHTML += `<li>${invoiceDataList[invI].paid[paidI]}</li>`
      paidI++
    }
    while (discountotherI < invoiceDataList[invI].discountother.length) {
      discountother.innerHTML += `<li>${invoiceDataList[invI].discountother[discountotherI]}</li>`
      discountotherI++
    }
    total.innerText = invoiceDataList[invI].total
  }
}
/* ===== Invoice: invoice.html ===== */

/* ===== Service: service.html ===== */
let servicePage = document.getElementsByClassName('service')[0]
if (servicePage) {
  let serviceDataApi = 'https://cdn.rayatiga.com/serviceDataList.json'
  fetch(serviceDataApi)
    .then(function (serviceResponse) {
      if (!serviceResponse.ok && onLocal()) {
        console.error('Network response was not ok.')
      }
      return serviceResponse.json()
    })
    .then(function (serviceDataList) {
      let serviceUrlParam = new URLSearchParams(window.location.search)
      let serviceUrlParamId = serviceUrlParam.get('checkout')
      if (serviceUrlParamId) {
        serviceSearchParam(serviceDataList, serviceUrlParamId)
      }
    })
    .catch(function (error) {
      if (onLocal()) {
        console.error(`LOG ERROR (main.js): ${error}`)
      }
    })
  function serviceSearchParam(serviceDataList, serviceUrlParamId) {
    let svcI = serviceDataList.findIndex((item) => item.checkout == serviceUrlParamId)
    if (svcI == -1) {
      console.error(`No data found for id: ${serviceUrlParamId}.`)
    } else {
      window.location.replace(serviceDataList[svcI].link)
    }
  }
}
/* ===== Service: service.html ===== */

/* ===== Ticket: ticket.html ===== */
let ticketPage = document.getElementsByClassName('ticket')[0]
if (ticketPage) {
  let ticketDataApi = 'https://cdn.rayatiga.com/ticketDataList.json'
  let ticketTable = document.getElementById('ticket-table')
  let ticketPlaceholder = document.getElementById('ticket-placeholder')
  let ticketLastUpdated = document.getElementById('ticket-last-updated')
  fetch(ticketDataApi)
    .then(function (ticketResponse) {
      if (!ticketResponse.ok) {
        ticketTable.rows[1].outerHTML = `
        <tr>
        <td colspan=4>An error has occurred. Please contact the administrator.</td>
        </tr>`
      }
      return ticketResponse.json()
    })
    .then(function (ticketDataList) {
      let ticketUrlParam = new URLSearchParams(window.location.search)
      let ticketUrlParamId = ticketUrlParam.get('id')
      if (ticketUrlParamId) {
        ticketSearchParam(ticketDataList, ticketUrlParamId)
      } else {
        ticketTable.rows[1].outerHTML = `
        <tr>
        <td colspan=4>No query parameter found.</td>
        </tr>`
      }
    })
    .catch(function (error) {
      ticketTable.rows[1].outerHTML = `
        <tr>
        <td colspan=4>An error has occurred. Please contact the administrator</td>
        </tr>`
      if (onLocal()) {
        console.error(`LOG ERROR (main.js): ${error}`)
      }
    })
  function ticketSearchParam(ticketDataList, ticketUrlParamId) {
    let tktI = ticketDataList.findIndex((item) => item.id == ticketUrlParamId)
    if (tktI == -1) {
      ticketTable.rows[1].outerHTML = `
      <tr>
      <td colspan=4>No data found for ticket that param id. Please check again.</td>
      </tr>`
    } else {
      ticketPlaceholder.remove()
      let i = 0
      while (i < ticketDataList[tktI].ticket.length) {
        ticketTable.rows[i].outerHTML += `
        <tr>
        <td><a href="/workflow.html?id=${ticketDataList[tktI].ticket[i].id}">${ticketDataList[tktI].ticket[i].id}</a></td>
        <td>${ticketDataList[tktI].ticket[i].subject}</td>
        <td><a href="/founder.html">${ticketDataList[tktI].ticket[i].pic}</a></td>
        <td><code status="${ticketDataList[tktI].ticket[i].status}"></code></td>
        </tr>`
        i++
      }
      ticketLastUpdated.innerText = ticketDataList[tktI].lastUpdated
    }
  }
}
/* ===== Ticket: ticket.html ===== */

/* ===== Workflow: workflow.html ===== */
let workflowPage = document.getElementsByClassName('workflow')[0]
if (workflowPage) {
  let workflowDataApi = 'https://cdn.rayatiga.com/workflowDataList.json'
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
  let stepother = document.getElementById('workflow-step-other')
  let stepotherI = 0
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
  function workflowReload() {
    window.location.replace(window.location.origin + window.location.pathname)
  }
  function workflowSearch() {
    fetch(workflowDataApi)
      .then(function (workflowResponse) {
        if (!workflowResponse.ok) {
          workflowErrorApi(workflowResponse.status, 1)
        }
        return workflowResponse.json()
      })
      .then(function (workflowDataList) {
        let workflowInputValue = workflowInput.value
        if (workflowInputValue.length < 10 || workflowInputValue.length > 10) {
          workflowStatusReturn.innerHTML = 'Please enter workflow id in <strong>10 digit only</strong>.'
        } else {
          let wflI = workflowDataList.findIndex((item) => item.id == workflowInputValue)
          if (wflI == -1) {
            workflowNoDataFound(workflowInputValue)
          } else {
            workflowDispay(workflowDataList, workflowInputValue, wflI)
          }
        }
      })
      .catch(function (error) {
        workflowErrorApi(error, 2)
      })
  }
  let workflowUrlParam = new URLSearchParams(window.location.search)
  let workflowUrlParamId = workflowUrlParam.get('id')
  if (workflowUrlParamId) {
    fetch(workflowDataApi)
      .then(function (workflowResponse) {
        if (!workflowResponse.ok) {
          workflowErrorApi(workflowResponse.status, 1)
        }
        return workflowResponse.json()
      })
      .then(function (workflowDataList) {
        if (workflowUrlParamId.length < 10 || workflowUrlParamId.length > 10) {
          workflowStatusReturn.innerHTML = 'Please enter workflow id in <strong>10 digit only</strong>.'
        } else {
          workflowSearchParam(workflowDataList, workflowUrlParamId)
        }
      })
      .catch(function (error) {
        workflowErrorApi(error, 2)
      })
  }
  function workflowSearchParam(workflowDataList, workflowUrlParamId) {
    let wflI = workflowDataList.findIndex((item) => item.id == workflowUrlParamId)
    if (wflI == -1) {
      workflowNoDataFound(workflowUrlParamId)
    } else {
      workflowInput.value = workflowUrlParamId
      workflowDispay(workflowDataList, workflowUrlParamId, wflI)
    }
  }
  function workflowErrorApi(workflowResponseStatus, numberOfError) {
    if (numberOfError == 1) {
      workflowStatusReturn.innerHTML = `There is a <strong>server-side error</strong>. The code is: ${workflowResponseStatus}.`
    } else {
      workflowStatusReturn.innerHTML += `<br />Please report it to us on the <a href="/contact.html">contact page</a>. <pre>Error message: ${workflowResponseStatus}</pre>`
    }
  }
  function workflowNoDataFound(workflowInputValue) {
    workflowStatusReturn.innerHTML = `<strong>No data found</strong> for workflow #${workflowInputValue}, please enter workflow id correctly.`
    workflowInformation.style.display = 'none'
    tag.innerText = ''
    id.innerText = ''
    subject.innerText = ''
    pic.innerText = ''
    status.innerText = ''
  }
  function workflowDispay(workflowDataList, workflowInputValue, wflI) {
    workflowInformation.style.display = 'block'
    workflowStatusReturn.innerText = ''
    tag.innerText = `#${workflowInputValue}`
    id.innerText = workflowDataList[wflI].id
    subject.innerText = workflowDataList[wflI].subject
    pic.innerHTML = `<a href="/founder.html">${workflowDataList[wflI].pic}</a>`
    status.setAttribute('status', workflowDataList[wflI].status)
    while (stepotherI < workflowDataList[wflI].step.length) {
      stepother.innerHTML += `<li>${workflowDataList[wflI].step[stepotherI]}</li>`
      stepotherI++
    }
  }
}
/* ===== Workflow: workflow.html ===== */

/* ===== Other ===== */
// Localhost detector
function onLocal() {
  return window.location.hostname == '127.0.0.1'
}
/* ===== Other ===== */
