// Select service redirect to WhatsApp
function selectService(service) {
  switch (service) {
    case "domain-com":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+domain+.COM+package.");
      break;
    case "domain-id":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+domain+.ID+package.");
      break;
    case "domain-coid":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+domain+.CO.ID+package.");
      break;
    case "static-a":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Static+A+package.");
      break;
    case "static-b":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Static+B+package.");
      break;
    case "static-c":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Static+C+package.");
      break;
    case "wordpress-a":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+WordPress+A+package.");
      break;
    case "wordpress-b":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+WordPress+B+package.");
      break;
    case "wordpress-c":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+WordPress+C+package.");
      break;
    case "cloud-a":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Cloud+A+package.");
      break;
    case "cloud-b":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Cloud+B+package.");
      break;
    case "cloud-c":
      window.open("https://api.whatsapp.com/send/?phone=6282122220362&text=Hello+Rayatiga.+I+want+Cloud+C+package.");
      break;
    default:
      break;
  }
}

if (!window.location.href.includes("127.0.0.1" || "localhost")) {
  document.querySelector("a[href='/service.html#domain']").href = "/service#domain";
  document.querySelector("a[href='/service.html#static']").href = "/service#static";
  document.querySelector("a[href='/service.html#wordpress']").href = "/service#wordpress";
  document.querySelector("a[href='/service.html#cloud']").href = "/service#cloud";
}
