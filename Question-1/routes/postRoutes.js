const express = require("express");
const { getPostsHandler } = require("../controllers/postController");

const router = express.Router();

router.get("/posts", getPostsHandler);

module.exports = router;
