const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const speedInput = document.querySelector('#speed');

let intervalId = null;

// Function to generate a random color and set it as the background color
const setRandomColor = () => {
  const col1 = Math.round(Math.random() * 255);
  const col2 = Math.round(Math.random() * 255);
  const col3 = Math.round(Math.random() * 255);
  body.style.backgroundColor = `rgb(${col1}, ${col2}, ${col3})`;
};

// Start the color-changing interval
const startChangingColor = () => {
  const speed = parseInt(speedInput.value) || 100; // Get the speed value, default to 100ms
  if (!intervalId) {
    intervalId = setInterval(setRandomColor, speed);
  }
};

// Stop the color-changing interval
const stopChangingColor = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    alert('Stop Changing!');
  }
};

// Event listeners for start and stop buttons
startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

// Update interval speed when input changes
speedInput.addEventListener('input', () => {
  if (intervalId) {
    clearInterval(intervalId);
    startChangingColor(); // Restart with the new speed
  }
});
