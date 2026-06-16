// Send a POST request with JSON data
async function createUser() {
  const userData = {
    name: "Marius",
    email: "marius@aau.dk"
  };

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // tell server we're sending JSON
      },
      body: JSON.stringify(userData)  // convert object → string
    });

    const result = await response.json();
    console.log("Created:", result);

  } catch (error) {
    console.error("Error:", error);
  }
}

// PATCH (update) – same idea but method: "PATCH"
async function updateUser(id) {
  await fetch(`/api/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Updated Name" })
  });
}

// DELETE
async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: "DELETE" });
}