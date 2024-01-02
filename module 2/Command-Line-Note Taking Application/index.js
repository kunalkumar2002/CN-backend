// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');
const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt", "The world has enough coders");
  let bufferdata = fs.readFileSync('notes.txt', { encoding: 'utf-8' })
  console.log(bufferdata)
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  bufferdata = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(bufferdata);
};
Solution();
module.exports = Solution;
