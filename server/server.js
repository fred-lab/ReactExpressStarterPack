require("dotenv").config({ path: "../.env" });
const express = require("express");
const server = express();

server.listen(process.env.SERVER_PORT, () =>
  console.log(`Nodejs server is running on port ${process.env.SERVER_PORT}`)
);
