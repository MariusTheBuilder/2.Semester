document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page from reloading

  let valid = true;

  const name     = document.getElementById("name");
  const email    = document.getElementById("email");
  const password = document.getElementById("password");

  // Clear previous errors
  ["nameError", "emailError", "passwordError"].forEach(function(id) {
    document.getElementById(id).textContent = "";
  });
  [name, email, password].forEach(function(el) {
    el.classList.remove("invalid");
  });

  // Validate name
  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    name.classList.add("invalid");
    valid = false;
  }

  // Validate email (must contain @)
  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    email.classList.add("invalid");
    valid = false;
  }

  // Validate password length
  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    password.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("success").style.display = "block";
  }
});