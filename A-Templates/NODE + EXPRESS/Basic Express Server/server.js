const express = require("express");
const app = express();
const PORT = 3000;

// ── Middleware ──────────────────────────────────────────
// Parse incoming JSON bodies (needed for POST/PUT/PATCH)
app.use(express.json());

// Serve static files (HTML/CSS/JS) from "public" folder
app.use(express.static("public"));

// ── Routes ─────────────────────────────────────────────
// GET request → send back a response
app.get("/", function(req, res) {
  res.send("Hello, World!");
});

// GET with URL parameter
app.get("/greet/:name", function(req, res) {
  const name = req.params.name; // from the URL
  res.json({ message: `Hello, ${name}!` });
});

// GET with query string (?city=Copenhagen)
app.get("/search", function(req, res) {
  const city = req.query.city; // from ?city=...
  res.json({ searching: city });
});

// POST request → receive data from body
app.post("/submit", function(req, res) {
  const data = req.body; // requires express.json() middleware
  console.log("Received:", data);
  res.json({ received: data });
});

// ── Start server ────────────────────────────────────────
app.listen(PORT, function() {
  console.log(`Server running on http://localhost:${PORT}`);
});