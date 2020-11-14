const express = require("express");
const dotenv = require("dotenv");

// dserver settings
dotenv.config();
const { EXPRESS_PORT, EXPRESS_URI } = process.env;

// express server
const app = express();
app.use(express.json());
app.use(require("./routes"));

app.listen(EXPRESS_PORT, () =>
  console.log(`Server started on ${EXPRESS_URI}:${EXPRESS_PORT}`)
);
