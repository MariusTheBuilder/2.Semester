const express  = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.static("public")); // serves index.html automatically

mongoose.connect("mongodb+srv://<user>:<pass>@cluster.mongodb.net/notesdb");

// Schema + Model inline (fine for small projects)
const Note = mongoose.model("Note", new mongoose.Schema({
  title: { type: String, required: true },
  body:  { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
}));

// GET all notes
app.get("/api/notes", async function(req, res) {
  const notes = await Note.find().sort({ createdAt: -1 }); // newest first
  res.json(notes);
});

// POST create note
app.post("/api/notes", async function(req, res) {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE note
app.delete("/api/notes/:id", async function(req, res) {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("http://localhost:3000"));