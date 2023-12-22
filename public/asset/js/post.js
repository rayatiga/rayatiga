/* Post JS */
// Default: Function Measuring Reading Time
function readingTime() {
  const text = document.querySelector("article").innerText;
  const wpm = 265;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}
readingTime();
// Default: Event Copy Article
const copyArticleBtn = document.getElementById("copy");
const copyArticleBtnText = document.getElementById("copy-text");
const articleTitle = document.querySelector("article h1").textContent;
const articleLink = window.location.href;
const originalText = copyArticleBtnText.textContent;
copyArticleBtn.addEventListener("click", () => {
  const copyText = `${articleTitle} - ${articleLink}`;
  navigator.clipboard.writeText(copyText);
  copyArticleBtnText.textContent = "Copied";
  setTimeout(() => {
    copyArticleBtnText.textContent = originalText;
  }, 2000);
});
// Default: Event Share Article
const shareArticleBtn = document.getElementById("share");
shareArticleBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href,
      text: "This is a great article that you should read.",
    });
  }
});
