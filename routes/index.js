const router = require("express").Router();

router.use("/api/test", require("./test"));

module.exports = router;
