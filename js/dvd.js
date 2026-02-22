dvdObject = document.getElementById("dvdLogo");

let screenX = window.innerWidth;
let screenY = window.innerHeight;
let objX = dvdObject.offsetWidth;
let objY = dvdObject.offsetHeight;



let velocity = 4;
let direction = (Math.random() * (50 - 40) + 40) * Math.PI / 180;
let x = 0;
let y = 0;

let velocityX = Math.sin(direction) * velocity;
let velocityY = Math.cos(direction) * velocity;;

let lastTime = 0;

function moveLogo(x, y) {
    dvdObject.style.transform = `translate(${x}px, ${y}px)`;
}



function updateLogo(currentTime) {
    if (animDVDButton.classList.contains("active")) {
        deltaTime = 0;
        if (currentTime - lastTime < 20) {
            deltaTime = (currentTime - lastTime);
        }
        lastTime = currentTime;


        screenX = window.innerWidth;
        screenY = window.innerHeight;
        objX = dvdObject.offsetWidth;
        objY = dvdObject.offsetHeight;


        if (x + objX > screenX) {
            velocityX *= -1;
            x = screenX - objX;
        }
        if (x < 0) {
            velocityX *= -1;
            x = 0;
        }

        if (y + objY > screenY) {
            velocityY *= -1;
            y = screenY - objY;
        }
        if (y < 0) {
            velocityY *= -1;
            y = 0
        }
        moveLogo(x, y);

        x += velocityX * deltaTime * 0.1;
        y += velocityY * deltaTime * 0.1;
    }




    requestAnimationFrame(updateLogo);
}