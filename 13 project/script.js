
function countdown() {
      const targetDate = new Date("December 31, 2024 23:59:59").getTime();
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Display the results in the corresponding elements
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
  
      // Update the progress bar
      const totalDuration = targetDate - new Date("October 5, 2024 00:00:00").getTime(); // Starting point
      const progressPercentage = ((totalDuration - timeRemaining) / totalDuration) * 100;
      document.querySelector('.progress-fill').style.width = `${progressPercentage}%`;
  
      // If the countdown is finished
      if (timeRemaining < 0) {
          clearInterval(timerInterval);
          document.getElementById("countdown").innerHTML = "Happy New Year!";
      }
  }
  
  // Update the countdown every 1 second
  const timerInterval = setInterval(countdown, 1000);
  
  // Initial call to set the progress bar
  countdown();
  