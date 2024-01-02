// Please do not change the prewritten code
const axios = require("axios");
const Solution = async () => {
  // Write your code here
  axios.get("https://api.codingninjas.com/api/v3/event_tags").then((data) => {
    console.log(data.data);
  });
};
Solution();
module.exports = Solution;
