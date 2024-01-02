// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
const express = require("express");

//createe a server
const server = express();

//handle default request
server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
});

module.exports = { server };
