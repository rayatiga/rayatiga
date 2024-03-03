/* File: checkout.js */
/* Default: Service Parameter */
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const value = params.get("service");
// Default: Null Parameter Check
if (value == null) {
  window.location.replace("/");
}
/* Default: Service Parameter Check */
if (params.has("service")) {
  const selectedService = document.getElementById("checkout-service");
  const serviceName = document.getElementById("service-name");
  const servicePrice = document.getElementById("price");
  const selectedName = document.getElementById("selected-name");
  const selectedPrice = document.getElementById("selected-price");
  const selectedDesc = document.getElementById("selected-desc");
  const cardBorder = document.getElementById("card-style-border");
  const cardBackground = document.getElementById("card-style-bg");
  const serviceSubs = document.getElementById("service-subs");
  const serviceStar = document.getElementById("service-star");
  const domainExt = document.getElementById("domain-extension");
  const perks = {
    domain: document.getElementById("perk-domain"),
    ssl: document.getElementById("perk-ssl"),
    whois: document.getElementById("perk-whois"),
  };
  /* Default: Function Subscription Period */
  function serviceSubscription(value) {
    if (value == "year") {
      serviceSubs.textContent = "yr";
    } else {
      serviceSubs.textContent = "mo";
    }
  }
  /* Default: Function Starred Service Check */
  function isStarred(value) {
    if (value == true) {
      cardBorder.classList.add("border-primary");
      cardBorder.classList.remove("border");
      cardBackground.classList.add("text-white");
      cardBackground.classList.remove("text-black");
      cardBackground.classList.add("bg-primary");
      cardBackground.classList.remove("bg-body");
      serviceStar.style.display = "inline-block";
    } else {
      cardBorder.classList.remove("border-primary");
      cardBorder.classList.add("border");
      cardBackground.classList.remove("text-white");
      cardBackground.classList.add("text-black");
      cardBackground.classList.remove("bg-primary");
      cardBackground.classList.add("bg-body");
      serviceStar.style.display = "none";
    }
  }
  /* Default: Fetch Product Data */
  fetch("/asset/json/product.json")
    .then((response) => response.json())
    .then((data) => {
      /* Default: Function Domain Checkout */
      function domainCheckout(value) {
        selectedService.value = data[0].domain[value].name;
        serviceName.textContent = data[0].domain[value].name;
        selectedName.textContent = data[0].domain[value].name;
        selectedDesc.textContent = data[0].domain[value].desc;
        servicePrice.value = data[0].domain[value].price;
        selectedPrice.textContent = data[0].domain[value].price;
        isStarred(data[0].domain[value].star);
        serviceSubscription(data[0].domain[value].subscription);
        perks.domain.style.display = "none";
        perks.ssl.style.display = "block";
        perks.whois.style.display = "block";
        domainExt.setAttribute("disabled", "");
        switch (value) {
          case 0:
            domainExt.value = "com";
            break;
          case 1:
            domainExt.value = "id";
            break;
          case 2:
            domainExt.value = "co.id";
            break;
          case 3:
            domainExt.removeAttribute("disabled");
            domainExt.value = "com";
            break;
        }
      }
      /* Default: Function Static Checkout */
      function staticCheckout(value) {
        selectedService.value = data[0].static[value].name;
        serviceName.textContent = data[0].static[value].name;
        selectedName.textContent = data[0].static[value].name;
        selectedDesc.textContent = data[0].static[value].desc;
        servicePrice.value = data[0].static[value].price;
        selectedPrice.textContent = data[0].static[value].price;
        isStarred(data[0].static[value].star);
        serviceSubscription(data[0].static[value].subscription);
        perks.domain.style.display = "block";
        perks.ssl.style.display = "block";
        perks.whois.style.display = "block";
        domainExt.setAttribute("disabled", "");
        domainExt.value = "com";
      }
      /* Default: Function WordPress Checkout */
      function wordpressCheckout(value) {
        selectedService.value = data[0].wordpress[value].name;
        serviceName.textContent = data[0].wordpress[value].name;
        selectedName.textContent = data[0].wordpress[value].name;
        selectedDesc.textContent = data[0].wordpress[value].desc;
        servicePrice.value = data[0].wordpress[value].price;
        selectedPrice.textContent = data[0].wordpress[value].price;
        isStarred(data[0].wordpress[value].star);
        serviceSubscription(data[0].wordpress[value].subscription);
        perks.domain.style.display = "block";
        perks.ssl.style.display = "block";
        perks.whois.style.display = "block";
        domainExt.setAttribute("disabled", "");
        domainExt.value = "com";
      }
      /* Default: Function Cloud Checkout */
      function cloudCheckout(value) {
        selectedService.value = data[0].cloud[value].name;
        serviceName.textContent = data[0].cloud[value].name;
        selectedName.textContent = data[0].cloud[value].name;
        selectedDesc.textContent = data[0].cloud[value].desc;
        servicePrice.value = data[0].cloud[value].price;
        selectedPrice.textContent = data[0].cloud[value].price;
        isStarred(data[0].cloud[value].star);
        serviceSubscription(data[0].cloud[value].subscription);
        perks.domain.style.display = "block";
        perks.ssl.style.display = "block";
        perks.whois.style.display = "block";
        domainExt.setAttribute("disabled", "");
        domainExt.value = "com";
      }
      /* Default: Run Function By SKU */
      switch (value) {
        case data[0].domain[0].sku:
          domainCheckout(0);
          break;
        case data[0].domain[1].sku:
          domainCheckout(1);
          break;
        case data[0].domain[2].sku:
          domainCheckout(2);
          break;
        case data[0].domain[3].sku:
          domainCheckout(3);
          break;
        case data[0].static[0].sku:
          staticCheckout(0);
          break;
        case data[0].static[1].sku:
          staticCheckout(1);
          break;
        case data[0].static[2].sku:
          staticCheckout(2);
          break;
        case data[0].wordpress[0].sku:
          wordpressCheckout(0);
          break;
        case data[0].wordpress[1].sku:
          wordpressCheckout(1);
          break;
        case data[0].wordpress[2].sku:
          wordpressCheckout(2);
          break;
        case data[0].cloud[0].sku:
          cloudCheckout(0);
          break;
        case data[0].cloud[1].sku:
          cloudCheckout(1);
          break;
        case data[0].cloud[2].sku:
          cloudCheckout(2);
          break;
        default:
          window.location.replace("/");
          break;
      }
    })
    /* Default: Print Error to Console */
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
