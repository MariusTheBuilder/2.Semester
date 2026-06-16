// Load saved note on page open
const saved = localStorage.getItem("myNote");
if (saved) {
  document.getElementById("noteInput").value = saved;
}

function saveNote() {
  const text = document.getElementById("noteInput").value;
  localStorage.setItem("myNote", text); // always stores as string
  document.getElementById("status").textContent = "Saved!";
}

function clearNote() {
  localStorage.removeItem("myNote");
  document.getElementById("noteInput").value = "";
  document.getElementById("status").textContent = "Cleared.";
}

// BONUS: storing an object (array, object) requires JSON
// localStorage.setItem("data", JSON.stringify({ name: "Marius" }));
// const obj = JSON.parse(localStorage.getItem("data"));