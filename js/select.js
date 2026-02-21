const offButton = document.getElementById("option-off");
offButton.addEventListener("click", () => setVisible("off"));

const digitalButton = document.getElementById("option-digital");;
digitalButton.addEventListener("click", () => setVisible("digital"));

const analogButton = document.getElementById("option-analog");
analogButton.addEventListener("click", () => setVisible("analog"));

const animOffButton = document.getElementById("game-anim-off");
animOffButton.addEventListener("click", () => setVisible("off"))

const animDVDButton = document.getElementById("game-anim-dvd");
animDVDButton.addEventListener("click", () => setVisible("dvd"))

const digitalClock = document.getElementById("digitalClockContainer");
const analogClock = document.getElementById("analogClockContainer");
const dvdLogo = document.getElementById("dvdLogo");





const savedStatus = localStorage.getItem("Status");
setVisible(savedStatus)
console.log("Clock loaded");


function setVisible(status) {
    digitalClock.style.setProperty("opacity", "0");
    analogClock.style.setProperty("opacity", "0");

    analogClock.style.setProperty("visibility", "hidden");
    digitalClock.style.setProperty("visibility", "hidden");

    dvdLogo.style.setProperty("visibility", "hidden");
    dvdLogo.style.setProperty("opacity", "0");

    document.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
    });

    if (status == "off") {

        offButton.classList.add("active");
        animOffButton.classList.add("active");


    }
    if (status == "digital") {

        digitalButton.classList.add("active");
        animOffButton.classList.add("active");
        digitalClock.style.setProperty("visibility", "visible");
        digitalClock.style.setProperty("opacity", "1");


    }
    if (status == "analog") {

        analogButton.classList.add("active");
        animOffButton.classList.add("active")
        analogClock.style.setProperty("visibility", "visible");
        analogClock.style.setProperty("opacity", "1");

    }


    if (status == "dvd") {
        offButton.classList.add("active");
        animDVDButton.classList.add("active");

        dvdLogo.style.setProperty("visibility", "visible");
        dvdLogo.style.setProperty("opacity", "1");
        requestAnimationFrame(updateLogo);
    }
    localStorage.setItem("Status", status);
}