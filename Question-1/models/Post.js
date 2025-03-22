const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ type: String }], // Array of comment texts
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
