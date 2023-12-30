// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here

  if (req.method === "POST") {
    // Fix the typo here
    req.on("data", (chunk) => {
      //body += chunk.toString();
      //console.log(body);
      fs.appendFileSync("data.txt", chunk.toString());
    });
    req.on("end", () => {
      // console.log(body);

      console.log(fs.readFileSync("data.txt", { encoding: "utf-8" }));
      res.end("data updated");
      return;
    });
  } else {
    res.end("data received");
  }
});

export default server;
