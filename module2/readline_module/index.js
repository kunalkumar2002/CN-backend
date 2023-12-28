// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const interfacefor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  interfacefor.question("Enter the first number: ", (num1) => {
    interfacefor.question("Enter the second number: ", (num2) => {
      console.log(
        "The maximum of the two numbers is: ",
        num1 > num2 ? num1 : num2
      );
    });
  });
};

Solution();
module.exports = Solution;
