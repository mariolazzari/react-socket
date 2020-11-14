const router = require("express").Router();
const { getTestMessage } = require("../controllers/test");

router.route("/").get(getTestMessage);

module.exports = router;
