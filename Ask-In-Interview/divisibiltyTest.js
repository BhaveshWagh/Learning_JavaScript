function isDivisibleBy30(A) {
  // return 1 or 0
  // do not console.log here
  // return  % 30 === 0 ? 1 : 0;
  // Check if the number ends with 0
  if (A[A.length - 1] !== "0") {
    return 0;
  }

  // Calculate the sum of digits
  let sumOfDigits = 0;
  for (let i = 0; i < A.length; i++) {
    sumOfDigits += parseInt(A[i], 10);
    console.log(sumOfDigits)
  }

  // Check if the sum of digits is divisible by 3
  if (sumOfDigits % 3 === 0) {
    return 1;
  }

  return 0;
}
isDivisibleBy30('33032032')

// /*Do not change the code below */

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;

//   //Exit Condition
//   if (lineNumber == 0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   //let n = parseInt(inputArr[0].trim());
//   //let str1 = inputArr[1].trim();
//   let str = inputArr[0].trim();
//   console.log(isDivisibleBy30(str));
// }
