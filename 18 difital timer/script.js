
function updateClock() {
      const now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');
  
      const clockDisplay = document.getElementById('clockDisplay');
      clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  function toggleTheme() {
      document.body.classList.toggle('light-mode');
  }
  
  setInterval(updateClock, 1000);
  
 
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  
  updateClock();
  