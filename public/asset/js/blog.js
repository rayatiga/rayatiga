/* File: blog.js */
/* Default: Function Trim Text */
function trimText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}
/* Default: Trim Card Title */
const cardPostTitle = document.querySelectorAll("#blog .card a");
for (let i = 0; i < cardPostTitle.length; i++) {
  const trimmedTitleText = trimText(cardPostTitle[i].textContent, 32);
  cardPostTitle[i].textContent = trimmedTitleText;
}
/* Default: Trim Card Description */
const cardPostDescription = document.querySelectorAll("#blog .card p");
for (let i = 0; i < cardPostDescription.length; i++) {
  const trimmedDescriptionText = trimText(cardPostDescription[i].textContent, 128);
  cardPostDescription[i].textContent = trimmedDescriptionText;
}
