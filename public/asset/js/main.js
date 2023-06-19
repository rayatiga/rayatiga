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
  let formStatus = document.getElementById('form-status')
  function radioChecked() {
    if (radioSupport.checked == 1) {
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
    formStatus.innerHTML = `Form resseted.`
    setTimeout(function () {
      formStatus.innerHTML = ``
    }, 2500)
  }
  function formSubmit() {
    formStatus.innerHTML = `Form submit triggered.`
    setTimeout(function () {
      formStatus.innerHTML = ``
    }, 2500)
  }
}
/* ===== Form: form.html ===== */

/* ===== Invoice: invoice.html ===== */
let invoicePage = document.getElementsByClassName('invoice')[0]
if (invoicePage) {
  let invoiceDataApi = `/asset/json/invoiceDataList.json`
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
          invoiceStatusReturn.innerHTML = `Please enter invoice number in <strong>5 digit only</strong>.`
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
          invoiceStatusReturn.innerHTML = `Please enter invoice number in <strong>5 digit only</strong>.`
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
  }
  function invoiceDisplay(invoiceDataList, invoiceInputValue, invI) {
    invoiceStatusReturn.innerHTML = ``
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

/* ===== Service: service.html ===== */
let servicePage = document.getElementsByClassName('service')[0]
if (servicePage) {
  let serviceDataApi = `/asset/json/serviceDataList.json`
  fetch(serviceDataApi)
    .then(function (serviceResponse) {
      if (!serviceResponse.ok && onLocal()) {
        console.error(`Network response was not ok.`)
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
        console.error(`There was a problem with the fetch operation: ${error}`)
      }
    })
  function serviceSearchParam(serviceDataList, serviceUrlParamId) {
    let svcI = serviceDataList.findIndex((item) => item.checkout == serviceUrlParamId)
    if (svcI == -1 && onLocal()) {
      console.error(`No data found for id: ${serviceUrlParamId}.`)
    } else {
      window.location.replace(serviceDataList[svcI].link)
    }
  }
}
/* ===== Service: service.html ===== */

/* ===== Workflow: workflow.html ===== */
let workflowPage = document.getElementsByClassName('workflow')[0]
if (workflowPage) {
  let workflowDataApi = `/asset/json/workflowDataList.json`
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
          workflowStatusReturn.innerHTML = `Please enter workflow id in <strong>10 digit only</strong>.`
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
          workflowStatusReturn.innerHTML = `Please enter workflow id in <strong>10 digit only</strong>.`
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
    tag.innerHTML = ``
    id.innerHTML = ``
    subject.innerHTML = ``
    pic.innerHTML = ``
    status.innerHTML = ``
  }
  function workflowDispay(workflowDataList, workflowInputValue, wflI) {
    workflowInformation.style.display = 'block'
    workflowStatusReturn.innerHTML = ``
    tag.innerHTML = `#${workflowInputValue}`
    id.innerHTML = workflowDataList[wflI].id
    subject.innerHTML = workflowDataList[wflI].subject
    pic.innerHTML = `<a href="/founder.html">${workflowDataList[wflI].pic}</a>`
    status.setAttribute('status', workflowDataList[wflI].status)
    for (let index = 0; index < workflowDataList[wflI].step.length; index++) {
      stepother.innerHTML += `<li>${workflowDataList[wflI].step[index]}</li>`
    }
  }
}
/* ===== Workflow: workflow.html ===== */

/* ===== Other ===== */
// Localhost detector
function onLocal() {
  return window.location.hostname == '127.0.0.1'
}
// Developer navigation
if (onLocal()) {
  console.warn(`Window hostname is ${window.location.hostname}. Developer navigation mode active.`)
  let navdev = document.getElementsByClassName('navigation-sitemap')[0]
  let navlist = {
    href: ['/404.html', '/about.html', '/cdn.html', '/contact.html', '/documentation.html', '/form.html', '/founder.html', '/index.html', '/invoice.html', '/maintenance.html', '/payment.html', '/privacy-policy.html', '/project.html', '/service.html', '/sitemap.html', '/template.html', '/ticket.html', '/workflow.html'],
    name: ['404', 'About', 'CDN', 'Contact', 'Documentation', 'Form', 'Founder', 'Index', 'Invoice', 'Maintenance', 'Payment', 'Privacy Policy', 'Project', 'Service', 'Sitemap', 'Template', 'Ticket', 'Workflow'],
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
