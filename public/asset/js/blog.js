function trimText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}
const cardPostTitle = document.querySelectorAll("#blog .card h5");
for (let i = 0; i < cardPostTitle.length; i++) {
  const trimmedTitleText = trimText(cardPostTitle[i].textContent, 64);
  cardPostTitle[i].textContent = trimmedTitleText;
}
const cardPostDescription = document.querySelectorAll("#blog .card p");
for (let i = 0; i < cardPostDescription.length; i++) {
  const trimmedDescriptionText = trimText(cardPostDescription[i].textContent, 192);
  cardPostDescription[i].textContent = trimmedDescriptionText;
}

