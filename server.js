const express = require("express");
const dotenv = require("dotenv");
const { createSocket } = require("./utils/socket");

// Enviroment vars
dotenv.config();
const { EXPRESS_URI, EXPRESS_PORT } = process.env;

// Express settings
const app = express();
app.use(require("./routes"));

// start server
const server = app.listen(EXPRESS_PORT, () => {
  console.log(`Server started on ${EXPRESS_URI}:${EXPRESS_PORT}`);
});

createSocket(server);
