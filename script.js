document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('mouseenter', function() {
        const thumbnailInfo = this.querySelector('.thumbnail-info');
        const thumbnailInfoWidth = thumbnailInfo.offsetWidth;
  
        if (index < thumbnails.length - 1) {
          thumbnails[index + 1].style.marginRight = thumbnailInfoWidth + 'px';
        }
      });
  
      thumbnail.addEventListener('mouseleave', function() {
        if (index < thumbnails.length - 1) {
          thumbnails[index + 1].style.marginRight = '20px';
        }
      });
    });
// Function to get the current day and time
function getCurrentDateTime() {
  const currentDate = new Date();
  return currentDate.toString();
}


// Using a Math method
const randomNumber = Math.floor(Math.random() * 100);

// Delaying a command
setTimeout(() => {
  showAlert("This alert is delayed by 3 seconds.");
}, 3000);

// Converting between number and text
function convertNumberToText(number) {
  const numberText = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return numberText[number];
}

// Countdown function
function countdown(seconds) {
  let count = seconds;
  const countdownInterval = setInterval(() => {
      if (count === 0) {
          clearInterval(countdownInterval);
          showAlert("Countdown finished!");
      } else {
          showAlert(`Countdown: ${count} seconds remaining.`);
          count--;
      }
  }, 1000);
}


let activityTimer;
let countdownTimer;

// Function to show the custom alert
function showCustomAlert() {
    document.getElementById('customAlertModal').style.display = 'block';
}

// Function to hide the custom alert
function hideCustomAlert() {
    document.getElementById('customAlertModal').style.display = 'none';
    clearTimeout(countdownTimer);
}

// Function to close the custom alert
function closeCustomAlert() {
    hideCustomAlert();
    clearTimeout(activityTimer);
}

// Function to start the countdown
function startCountdown() {
  let seconds = 300; // 5 minutes
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerText = `Countdown: ${formatTime(seconds)}`;

  countdownTimer = setInterval(() => {
      seconds--;
      countdownElement.innerText = `Countdown: ${formatTime(seconds)}`;
      if (seconds <= 0) {
          logout(); // Sign out user
      }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function resetActivityTimer() {
  clearTimeout(activityTimer);
  activityTimer = setTimeout(() => {
      showCustomAlert();
      startCountdown();
  }, 300000); // 5 minutes (300,000 milliseconds)
}

// Event listeners for mouse movement and key press
document.addEventListener('mousemove', resetActivityTimer);
document.addEventListener('keypress', resetActivityTimer);

// Initial start of the timer
resetActivityTimer();

// Function to logout the user
function logout() {
    window.location.href = 'index.html'; // Redirect to login page
}






  });
  