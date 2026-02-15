const now = new Date();
const clockText = document.getElementById("digital-clock");

clockText.innerText = formatTime(now);
setInterval(updateClock, 1000);



function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}


function updateClock() {
    const now = new Date();
    clockText.innerText = formatTime(now);

}