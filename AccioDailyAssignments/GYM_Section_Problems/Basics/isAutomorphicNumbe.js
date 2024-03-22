/**
 * Automorphic Number or Not
Write a Java program check whether a number is an Automorphic number or not.

In mathematics, an automorphic number is a number whose square "ends" in the same digits as the number itself. For example, 5^2 = 25, 6^2 = 36, 76^2 = 5776, and 890625^2 = 793212890625, so 5, 6, 76 and 890625 are all automorphic numbers.

Input Format
Any integer value.

Output Format
Return whether number is an "Automorphic Number" or "Not an Automorphic Number".

Example 1
Input

10
Output

Not an Automorphic Number
 * 
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user with readline without a message
rl.question("", function (userInput) {
  // Display the user input
  let lengthOfDigits = userInput.length 
  let square = userInput * userInput
  let lastTwoDigits = String(square).split('').slice(lengthOfDigits).join('')
  if(userInput === lastTwoDigits){
    console.log("Automorphic Number")
  }
  else{
    console.log("Not an Automorphic Number")
  }

// console.log(arr)

  // Close the readline interface
  rl.close();
});
