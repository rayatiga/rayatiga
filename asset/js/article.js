// ====================================
// [IMPORTTANT] EDIT ARTICLE LIST HERE
// ====================================
let articleBigData = [
    {
        id: "1",
        slug: "web-hosting-magelang",
        fullTitle: "Web Hosting Magelang",
        shortTitle: "Web Hosting Magelang",
        category: "Business",
        youtubeLink: "",
        dateUpdated: "Jun 19, 2023",
        timeUpdated: "11:33 AM",
    },
    {
        id: "2",
        slug: "fix-sshd-no-hostkeys-available-exiting-error",
        fullTitle: "Fix 'sshd: no hostkeys available — exiting' Error",
        shortTitle: "Fix 'sshd: no ...",
        category: "Problem",
        youtubeLink: "",
        dateUpdated: "Jun 19, 2023",
        timeUpdated: "4:11 PM",
    },
    {
        id: "3",
        slug: "fix-we-cant-reach-the-adobe-servers-error",
        fullTitle: "Fix 'We can't reach the Adobe servers' Error",
        shortTitle: "Fix 'We can't ...",
        category: "Problem",
        youtubeLink: "",
        dateUpdated: "Jun 19, 2023",
        timeUpdated: "4:24 PM",
    },
    {
        id: "4",
        slug: "fix-exception-eaccessviolation-in-module-xampp-control-exe-at-0025b2ae-error",
        fullTitle: "Fix 'Exception EAccessViolation in module xampp-control.exe at 0025B2AE' Error",
        shortTitle: "Fix 'Exception EAccessViolation ...",
        category: "Problem",
        youtubeLink: "https://youtu.be/kH_BxxwVZkI",
        dateUpdated: "Jun 20, 2023",
        timeUpdated: "8:15 AM",
    },
    {
        id: "5",
        slug: "fix-some-errors-have-been-detected-on-the-server-please-look-at-the-bottom-of-this-window-error",
        fullTitle: "Fix 'Some errors have been detected on the server! Please look at the bottom of this window' Error",
        shortTitle: "Fix 'Some errors ...",
        category: "Problem",
        youtubeLink: "https://youtu.be/MQZGRFmtH0Y",
        dateUpdated: "Jun 20, 2023",
        timeUpdated: "2:43 PM",
    },
    {
        id: "6",
        slug: "how-to-force-https-securely-using-htaccess",
        fullTitle: "How To Force HTTPS Securely Using .htaccess",
        shortTitle: "How To Force ...",
        category: "How To",
        youtubeLink: "https://youtu.be/npbzxdI72Bk",
        dateUpdated: "Jun 23, 2023",
        timeUpdated: "10:48 AM",
    },
]
// ======================================
// [IMPORTTANT] END OF EDIT ARTICLE LIST
// ======================================

let articleArchiveList = document.getElementById("articleArchiveList")
let articleListTrigger = document.getElementById("articleTitle")
if (articleArchiveList || articleListTrigger) {
    showArchiveArticle()
}
function showArchiveArticle() {
    let fileExt = ".html"
    let blogSlug = "/blog/"

    if (articleListTrigger) {
        let dateUpdatedTrigger = document.getElementById("articleDateUpdated")
        let timeUpdatedTrigger = document.getElementById("articleTimeUpdated")
        let youtubeLinkTrigger = document.getElementById("articleYoutube")
        for (let atIdx = 0; atIdx < articleBigData.length; atIdx++) {
            let pathArticleSlug = `/blog/${articleBigData[atIdx].slug}.html`
            let articleYTLink = articleBigData[atIdx].youtubeLink
            if (pathArticleSlug == window.location.pathname) {
                articleListTrigger.innerHTML = articleBigData[atIdx].fullTitle
                dateUpdatedTrigger.innerHTML = articleBigData[atIdx].dateUpdated
                timeUpdatedTrigger.innerHTML = articleBigData[atIdx].timeUpdated
                if (articleYTLink != "") {
                    youtubeLinkTrigger.innerHTML = `<a href="${articleYTLink}" class="link-dark">Watch on YouTube</a>`
                }
            }
        }
    }

    let idxLength = 0
    // SET MAX ARCHIVE ARTICLE TITLE IN /BLOG/INDEX.HTML
    let idxMaxLength = 10 // Default is 10 (ten)
    for (let index = articleBigData.length - 1; index >= 0; index--) {
        if (idxLength == idxMaxLength) {
            break
        } else {
            idxLength++
        }
        if (articleBigData[index].slug == undefined || articleBigData[index].slug == null || articleBigData[index].slug == "") {
            fileExt = ".html"
            blogSlug = "/"
            articleBigData[index].slug = "404"
        }
        if (articleArchiveList) {
            articleArchiveList.innerHTML += `<a href="${blogSlug}${articleBigData[index].slug}${fileExt}" class="link-magenta text-decoration-none">[${articleBigData[index].shortTitle}]</a>`
        }
    }

    let articleCountNumber = document.getElementById("articleCount")
    if (articleArchiveList) {
        let articleCount = articleBigData.length
        articleCountNumber.innerHTML = articleCount
    }
}
