const { getTopUsers } = require("../services/socialMediaService");

const getTopUsersHandler = async (req, res) => {
  try {
    const users = await getTopUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopUsersHandler };
