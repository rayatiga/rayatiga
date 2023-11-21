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

const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
});
