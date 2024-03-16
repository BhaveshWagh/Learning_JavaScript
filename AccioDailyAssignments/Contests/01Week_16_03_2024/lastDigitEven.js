/**
 * Write a program to input a number and check if the last digit is even or not.
Input format
The first line contains a number n.
Output format
Print 1 if the last digit is even and 0 if the last digit is odd.
Example 1
Input format => 2009
Output format => 0
 */
function check_last_digit(nums) {
  //Write your code here
  if ((nums[0] % 10) % 2 == 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputNumbers = [];
rl.on("line", function (line) {
  inputNumbers = line.split(" ").map((a) => parseInt(a));
  check_last_digit(inputNumbers);
});
