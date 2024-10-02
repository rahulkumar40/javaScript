// Game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let maxGuesses = 10;
let remainingGuesses = maxGuesses;

const guessField = document.getElementById('guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const previousGuesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const gameOverMessage = document.querySelector('.game-over');

// Disable the form's default submit behavior
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    checkGuess();
});

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        lowOrHi.textContent = 'Please enter a valid number between 1 and 100!';
        lowOrHi.classList.add('message-fail');
        return;
    }

    // Add the guess to the guesses array
    guesses.push(userGuess);
    remainingGuesses--;

    // Display guesses and remaining attempts
    previousGuesses.textContent = guesses.join(', ');
    lastResult.textContent = remainingGuesses;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        lowOrHi.textContent = 'Congratulations! You guessed the correct number!';
        lowOrHi.classList.add('message-success');
        setGameOver();
    } else if (remainingGuesses === 0) {
        lowOrHi.textContent = `Game Over! The number was ${randomNumber}.`;
        lowOrHi.classList.add('message-fail');
        setGameOver();
    } else {
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your guess is too low!';
        } else {
            lowOrHi.textContent = 'Your guess is too high!';
        }
    }

    // Clear the input field
    guessField.value = '';
}

// Handle game over scenario
function setGameOver() {
    // Disable guess input and submit button
    guessField.disabled = true;
    guessSubmit.disabled = true;

    // Provide a button to restart the game
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Start New Game';
    restartButton.style.padding = '10px 20px';
    restartButton.style.marginTop = '20px';
    restartButton.addEventListener('click', resetGame);
    gameOverMessage.appendChild(restartButton);
}

function resetGame() {
    // Reset all variables
    guesses = [];
    remainingGuesses = maxGuesses;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset UI elements
    previousGuesses.textContent = '';
    lastResult.textContent = remainingGuesses;
    lowOrHi.textContent = '';
    gameOverMessage.textContent = '';

    // Re-enable guess input and submit button
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
}