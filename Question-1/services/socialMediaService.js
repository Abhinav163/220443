const User = require("../models/User");
const Post = require("../models/Post");

const getTopUsers = async () => {
  return await User.find().sort({ postCount: -1 }).limit(5);
};

const getPosts = async (type) => {
  if (type === "popular") {
    return await Post.find().sort({ "comments.length": -1 });
  } else if (type === "latest") {
    return await Post.find().sort({ createdAt: -1 }).limit(5);
  } else {
    throw new Error("Invalid type parameter");
  }
};

module.exports = { getTopUsers, getPosts };
