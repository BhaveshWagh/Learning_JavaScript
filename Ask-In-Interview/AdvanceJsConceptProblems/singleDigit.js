// Single digit
// https://course.acciojob.com/idle?question=b3fd7428-c87a-4900-8cb0-b6fb944410fd
//  ! 987 - > 9 + 8 + 7 => 24 = 2 + 4 => 6

function singleDigit(n) {
  //complete this function
  //do not console.log here
  if (n === 0) {
    return 0;
  }
  return 1 + ((n - 1) % 9);
}
console.log(singleDigit(987))

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;
// var K;
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;

//   if (lineNumber === 0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   const N = parseInt(inputArr[0]);

//   console.log(singleDigit(N));
// }
