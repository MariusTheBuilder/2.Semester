const express  = require("express");
const mongoose = require("mongoose");
const User     = require("./models/User");

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas (replace with your connection string)
mongoose.connect("mongodb+srv://<user>:<pass>@cluster.mongodb.net/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));

// CREATE
app.post("/api/users", async function(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
app.get("/api/users", async function(req, res) {
  const users = await User.find();  // get all documents
  res.json(users);
});

// READ ONE
app.get("/api/users/:id", async function(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
app.patch("/api/users/:id", async function(req, res) {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }  // return the updated doc
  );
  res.json(user);
});

// DELETE
app.delete("/api/users/:id", async function(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running"));