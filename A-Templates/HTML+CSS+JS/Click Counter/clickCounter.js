let count = 0;

function change(amount) {
  count += amount;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = count;

  // Remove both classes first, then add the right one
  display.classList.remove("positive", "negative");
  if (count > 0) display.classList.add("positive");
  if (count < 0) display.classList.add("negative");
}