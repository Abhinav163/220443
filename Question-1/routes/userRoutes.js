const express = require("express");
const { getTopUsersHandler } = require("../controllers/userController");

const router = express.Router();

router.get("/users", getTopUsersHandler);

module.exports = router;
