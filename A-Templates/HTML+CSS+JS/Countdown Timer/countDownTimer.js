const START_SECONDS = 10; // 10 seconds
let secondsLeft = START_SECONDS;
let intervalId = null; // stores the interval so we can stop it

function startTimer() {
  if (intervalId !== null) return; // already running

  intervalId = setInterval(function() {
    secondsLeft--;
    updateDisplay();

    if (secondsLeft <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      document.getElementById("display").textContent = "Time's up!";
    }
  }, 1000); // runs every 1000ms = 1 second
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  secondsLeft = START_SECONDS;
  updateDisplay();
}

function updateDisplay() {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  // padStart(2, "0") ensures "05" instead of "5"
  document.getElementById("display").textContent =
    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}