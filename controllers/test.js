// Test api
const { emit } = require("../utils/socket");

// test message
const getTestMessage = (req, res, next) => {
  const data = {
    message: "Server is working",
    update: new Date(),
  };
  emit("test", data);
  res.status(200).json({ ...data });
};

module.exports = { getTestMessage };
