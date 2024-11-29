// str is input
// Is palindrome?
// https://course.acciojob.com/idle?question=880bf366-ebe4-4437-b987-c6552fcc3db4
function isPalindrome(str) {
  // write code here
  // do not console.log
  // return the 1 or 0
  return str === str.split("").reverse().join("") ? 1 : 0;
}
console.log(isPalindrome("1235321"))

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;
//   // if (lineNumber == 0) {
//   //   size = parseInt(inputArr[0]);
//   // }
//   //Exit Condition
//   if (lineNumber == 0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   const str = inputArr[0].trim();
//   console.log(isPalindrome(str));
// }
