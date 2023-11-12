// Select service redirect to WhatsApp
function selectService(service) {
  switch (service) {
    case "domain-com":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+domain+.COM+package.");
      break;
    case "domain-id":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+domain+.ID+package.");
      break;
    case "domain-coid":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+domain+.CO.ID+package.");
      break;
    case "static-a":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Static+A+package.");
      break;
    case "static-b":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Static+B+package.");
      break;
    case "static-c":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Static+C+package.");
      break;
    case "wordpress-a":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+WordPress+A+package.");
      break;
    case "wordpress-b":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+WordPress+B+package.");
      break;
    case "wordpress-c":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+WordPress+C+package.");
      break;
    case "cloud-a":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Cloud+A+package.");
      break;
    case "cloud-b":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Cloud+B+package.");
      break;
    case "cloud-c":
      window.open("https://wa.me/6282122220362?text=Hello+Rayatiga.+I+want+Cloud+C+package.");
      break;
    default:
      break;
  }
}

// Domain data
fetch("/asset/json/domain.json")
  .then((response) => response.json())
  .then((data) => {
    let html = document.getElementById("domain-data");
    for (let i = 0; i < data.length; i++) {
      html.innerHTML += `
        <div class="col">
        <div class="card">
        <div class="card-header ${data[i].featured ? "bg-primary text-white" : ""}">
        <p class="mb-0">${data[i].featured ? '<i class="bi-star-fill me-2"></i>' : ""}${data[i].title}</p>
        </div>
        <div class="card-body">
        <h2 class="card-title pricing-card-title">$${data[i].price}<small class="text-body-secondary fw-light">/yr.</small></h2>
        <p>${data[i].description}</p>
        <a class="w-100 btn ${data[i].featured ? "btn-primary" : "btn-outline-dark"}" href="#domain" onclick="selectService('domain-com')">Select Service</a>
        </div>
        </div>
        </div>
      `;
    }
  });
