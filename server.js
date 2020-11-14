const express = require("express");
const dotenv = require("dotenv");
const socketIo = require("socket.io");

// dserver settings
dotenv.config();
const { EXPRESS_PORT, EXPRESS_URI } = process.env;

// express server
const app = express();
app.use(express.json());
app.use(require("./routes"));

const server = app.listen(EXPRESS_PORT, () =>
  console.log(`Server started on ${EXPRESS_URI}:${EXPRESS_PORT}`)
);

// socket server
const io = socketIo(server);
