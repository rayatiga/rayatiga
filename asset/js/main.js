// Main
// Main: Check local
function checkLocal() {
    return window.location.href.includes("127.0.0.1") || window.location.href.includes("localhost") ? true : false;
}
checkLocal() && console.log("Message:\nLocal development.\nLog showed only in local mode.");
