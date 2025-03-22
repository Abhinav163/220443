const User = require("../models/User");
const Post = require("../models/Post");

const getTopUsers = async () => {
  try {
    return await User.find().sort({ postCount: -1 }).limit(5);
  } catch (error) {
    throw new Error("Error fetching top users: " + error.message);
  }
};

const getPosts = async (type) => {
  try {
    if (type === "popular") {
      return await Post.find().sort({ commentsCount: -1 }); // Updated sorting
    } else if (type === "latest") {
      return await Post.find().sort({ createdAt: -1 }).limit(5);
    } else {
      throw new Error("Invalid type parameter");
    }
  } catch (error) {
    throw new Error("Error fetching posts: " + error.message);
  }
};

module.exports = { getTopUsers, getPosts };
