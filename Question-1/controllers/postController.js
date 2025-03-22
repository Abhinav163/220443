const { getPosts } = require("../services/socialMediaService");

const getPostsHandler = async (req, res) => {
  try {
    const { type } = req.query;
    const posts = await getPosts(type);
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPostsHandler };
