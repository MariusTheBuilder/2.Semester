// ── VERSION 1: async / await (modern, cleaner) ──
async function loadUser() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Loading...";

  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json(); // parse JSON body
    const user = data.results[0];

    resultDiv.innerHTML = `
      <img src="${user.picture.medium}" alt="user" />
      <p><strong>${user.name.first} ${user.name.last}</strong></p>
      <p>${user.email}</p>
      <p>${user.location.city}, ${user.location.country}</p>
    `;

  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
  }
}

// ── VERSION 2: .then() chains (older style, also valid) ──
function loadUserChain() {
  fetch("https://randomuser.me/api/")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.results[0]);
    })
    .catch(function(error) {
      console.error("Fetch failed:", error);
    });
}