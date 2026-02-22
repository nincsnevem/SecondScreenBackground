const snakeParts = document.querySelectorAll(".snakeElement");
const snakeCords = [];



let screenUnit = Math.min(window.innerWidth, window.innerHeight) * 0.05;

let movingDirectionX = 1;
let movingDirectionY = 0;
let snakeX = 0;
let snakeY = 0;
let snakeScreenX = window.innerWidth;
let snakeScreenY = window.innerHeight;
let tempDirection = 0;

let randomNumber = Math.random();
let lastTurn = 9;

setInterval(() => moveSnake(snakeLogic()), 700);

function snakeLogic() {
    randomNumber = Math.random()
    if (lastTurn > 8) {
        if (randomNumber < 0.15) {
            lastTurn = 0
            return ("left")

        }
        if (randomNumber >= 0.15 && randomNumber < 0.3) {
            lastTurn = 0
            return ("right")

        }
    }
    lastTurn += 1;
    return ("forward")
}

function moveSnake(direction) {
    if (snakeContainer.style.visibility === "visible") {
        snakeScreenX = window.innerWidth;
        snakeScreenY = window.innerHeight;
        screenUnit = Math.min(window.innerWidth, window.innerHeight) * 0.05;

        if (direction === "left") {
            tempDirection = movingDirectionY;
            movingDirectionY = movingDirectionX;
            movingDirectionX = tempDirection * -1;
        }
        if (direction === "right") {
            tempDirection = movingDirectionY;
            movingDirectionY = movingDirectionX * -1;
            movingDirectionX = tempDirection;
        }

        snakeX += movingDirectionX * 5;
        snakeY += movingDirectionY * -5;
        if (snakeX >= Math.round(snakeScreenX / screenUnit) * 5) {
            snakeX = 0;
        }
        if (snakeX < 0) {
            snakeX = Math.round(snakeScreenX / screenUnit) * 5 - 5;
        }
        if (snakeY >= Math.round(snakeScreenY / screenUnit) * 5) {
            snakeY = 0;
        }
        if (snakeY < 0) {
            snakeY = Math.round(snakeScreenY / screenUnit) * 5 - 5;
        }

        snakeCords.unshift([snakeX, snakeY]);
        if (snakeParts.length > 13) {
            snakeCords.pop()
        }

        snakeParts.forEach((item, index) => {

            if (snakeCords[index]) {
                item.style.transform = `translate(${snakeCords[index][0]}vmin, ${snakeCords[index][1]}vmin)`
            }
        });
    }
}