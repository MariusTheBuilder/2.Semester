// Apply saved preference on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("toggleBtn").textContent = "☀️ Light Mode";
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  const btn = document.getElementById("toggleBtn");

  if (isDark) {
    btn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
}