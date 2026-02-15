const newPageButton = document.getElementById("blankPageButton");
newPageButton.addEventListener("click", newWindow);




async function newWindow() {
    window.location.href = "background.html";
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}