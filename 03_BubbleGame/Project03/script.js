let timer = 60;
let score = 0;
let highScore = 0;
let randomHit = 0;
let gameInterval, countdownInterval;

// Get DOM elements
const pbutton = document.querySelector("#pbutton");
const scoreDisplay = document.querySelector("#show-score");
const highScoreDisplay = document.querySelector("#high-score");
const timeDisplay = document.querySelector("#time-left");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

function generateRandomNumber() {
    return Math.floor(Math.random() * 9);
}

function makeBubble() {
    randomHit = generateRandomNumber();
    pbutton.textContent = randomHit;
}

function increaseScore() {
    score += 10;
    scoreDisplay.textContent = score;

    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }
}

function handleClick(event) {
    const clickedNumber = Number(event.target.textContent);
    if (clickedNumber === randomHit) {
        increaseScore();
    }
    makeBubble();
}

function startTimer() {
    gameInterval = setInterval(() => {
        timer--;
        timeDisplay.textContent = timer;

        if (timer <= 0) {
            clearInterval(gameInterval);
            clearInterval(countdownInterval);
            pbutton.textContent = "Game Over";
            alert("Time's up! Final Score: " + score);
        }
    }, 1000);
}

function startGame() {
    timer = 60;
    score = 0;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timer;
    pbutton.textContent = generateRandomNumber();

    startTimer();
    makeBubble();

    pbutton.addEventListener("click", handleClick);
}

function resetGame() {
    clearInterval(gameInterval);
    clearInterval(countdownInterval);

    timer = 60;
    score = 0;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timer;
    pbutton.textContent = "0";

    pbutton.removeEventListener("click", handleClick);
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
