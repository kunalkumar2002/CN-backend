// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require("http");
const fs = require("fs");

const responsehandler = (req, res) => {
  const data = fs.readFileSync("index.html").toString();
  res.end(data);
};

const server = http.createServer(responsehandler);

server.listen(8080, () => {
  console.log("server is up");
});

module.exports = server;
