const express = require("express");
const app = express();
app.use(express.json());

// In-memory "database" (resets on server restart)
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob",   email: "bob@example.com" }
];
let nextId = 3;

// READ ALL
app.get("/api/users", function(req, res) {
  res.json(users);
});

// READ ONE
app.get("/api/users/:id", function(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find(function(u) { return u.id === id; });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// CREATE
app.post("/api/users", function(req, res) {
  const { name, email } = req.body; // destructure from body

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email required" });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser); // 201 = Created
});

// UPDATE (partial)
app.patch("/api/users/:id", function(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find(function(u) { return u.id === id; });

  if (!user) return res.status(404).json({ error: "Not found" });

  // Only update fields that were sent
  if (req.body.name)  user.name  = req.body.name;
  if (req.body.email) user.email = req.body.email;

  res.json(user);
});

// DELETE
app.delete("/api/users/:id", function(req, res) {
  const id = parseInt(req.params.id);
  const index = users.findIndex(function(u) { return u.id === id; });

  if (index === -1) return res.status(404).json({ error: "Not found" });

  users.splice(index, 1); // remove 1 item at index
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Running on port 3000"));