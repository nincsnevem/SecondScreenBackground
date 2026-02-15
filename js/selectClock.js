const offButton = document.getElementById("option-off")
offButton.addEventListener("click", () => setClock("off"));

const digitalButton = document.getElementById("option-digital")
digitalButton.addEventListener("click", () => setClock("digital"));

const analogButton = document.getElementById("option-analog")
analogButton.addEventListener("click", () => setClock("analog"))

const digitalClock = document.getElementById("digitalClockContainer")
const analogClock = document.getElementById("analogClockContainer")





const savedClockStatus = localStorage.getItem("clockStatus");
setClock(savedClockStatus)
console.log("Clock loaded");


function setClock(status) {
    digitalClock.style.setProperty("opacity", "0")
    digitalClock.style.setProperty("visibility", "visible")
    analogClock.style.setProperty("opacity", "0")
    analogClock.style.setProperty("visibility", "visible")
    if (status == "off") {
        document.documentElement.style.setProperty("--off-button-size", "10vw")
        document.documentElement.style.setProperty("--digital-button-size", "6vw")
        document.documentElement.style.setProperty("--analog-button-size", "6vw")



    }
    if (status == "digital") {
        document.documentElement.style.setProperty("--off-button-size", "6vw")
        document.documentElement.style.setProperty("--digital-button-size", "10vw")
        document.documentElement.style.setProperty("--analog-button-size", "6vw")
        digitalClock.style.setProperty("opacity", "1")

    }
    if (status == "analog") {
        document.documentElement.style.setProperty("--off-button-size", "6vw")
        document.documentElement.style.setProperty("--digital-button-size", "6vw")
        document.documentElement.style.setProperty("--analog-button-size", "10vw")
        analogClock.style.setProperty("opacity", "1")
    }
    localStorage.setItem("clockStatus", status);
}