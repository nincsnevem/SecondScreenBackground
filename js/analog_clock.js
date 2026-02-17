const hourHand = document.getElementById("analogHour");
const minuteHand = document.getElementById("analogMinute");
const secondHand = document.getElementById("analogSecond");

const shadowHourX = 0;
const shadowHourY = 0;
const shadowHourDistance = 10;

const shadowMinX = 0;
const shadowMinY = 0;
const shadowMinDistance = 12;

const shadowSecX = 0;
const shadowSecY = 0;
const shadowSecDistance = 14;





function setHands(ms, seconds, minutes, hours) {
    hoursDeg = (hours % 12) * 30 + minutes / 2 + seconds / 120 + ms / 120000;
    minutesDeg = minutes * 6 + seconds / 10 + ms * 0.0001;
    secondsDeg = seconds * 6 + ms * 0.006;

    hourHand.style.transform = `translate(-50%, -110%) rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -110%) rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;


}

function setShadow(ms, seconds, minutes, hours) {
    hoursRad = (Math.PI / 180) * ((hours % 12) * 30 + minutes / 2 + seconds / 60 + ms / 120000);
    minutesRad = (Math.PI / 180) * (minutes * 6 + seconds / 10 + ms * 0.0001);
    secondsRad = (Math.PI / 180) * (seconds * 6 + ms * 0.006);


    const shadowHourX = Math.sin(hoursRad) * shadowHourDistance;
    const shadowHourY = Math.max(Math.cos(-hoursRad) * shadowHourDistance, 0);

    const shadowMinX = Math.sin(minutesRad) * shadowHourDistance;
    const shadowMinY = Math.max(Math.cos(-minutesRad) * shadowMinDistance, 0);

    const shadowSecX = Math.sin(secondsRad) * shadowHourDistance;
    const shadowSecY = Math.max(Math.cos(-secondsRad) * shadowSecDistance, 0);



    document.documentElement.style.setProperty('--hour-x', `${shadowHourX}px`);
    document.documentElement.style.setProperty('--hour-y', `${shadowHourY}px`);

    document.documentElement.style.setProperty('--min-x', `${shadowMinX}px`);
    document.documentElement.style.setProperty('--min-y', `${shadowMinY}px`);

    document.documentElement.style.setProperty('--sec-x', `${shadowSecX}px`);
    document.documentElement.style.setProperty('--sec-y', `${shadowSecY}px`);
}


function updateClock() {
    const now = new Date();

    setHands(now.getMilliseconds(), now.getSeconds(), now.getMinutes(), now.getHours());
    setShadow(now.getMilliseconds(), now.getSeconds(), now.getMinutes(), now.getHours());
    requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);