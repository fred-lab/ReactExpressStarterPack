require("dotenv").config({ path: "../.env" });
const express = require("express");
const server = express();

//Serve the files inside the dist folder where Webpack generate assets
server.use(express.static("../dist"));

server.get("/", (req, res) => {
  res.render("index.html");
});

server.listen(process.env.SERVER_PORT, () =>
  console.log(`Nodejs server is running on port ${process.env.SERVER_PORT}`)
);
