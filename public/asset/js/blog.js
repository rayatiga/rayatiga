function trimText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}
const cardPostTitle = document.querySelector("#blog .card h5");
const cardPostTitleText = document.querySelector("#blog .card h5").textContent;
const trimmedTitleText = trimText(cardPostTitleText, 64);
cardPostTitle.textContent = trimmedTitleText;
const cardPostDescription = document.querySelector("#blog .card p");
const cardPostDescriptionText = document.querySelector("#blog .card p").textContent;
const trimmedDescriptionText = trimText(cardPostDescriptionText, 192);
cardPostDescription.textContent = trimmedDescriptionText;
