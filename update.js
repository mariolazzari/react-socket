const { emit } = require("./utils/socket");

setInterval(() => {
  emit("test", { message: "Server is running", update: new Date() });
}, 1000);
