const mongoose = require("mongoose");

// 1. Define the shape of documents in this collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true   // must be present
  },
  email: {
    type: String,
    required: true,
    unique: true     // no duplicates
  },
  age: {
    type: Number,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now  // auto-set on creation
  }
});

// 2. Create the Model (= collection in DB is "users")
const User = mongoose.model("User", userSchema);

module.exports = User;