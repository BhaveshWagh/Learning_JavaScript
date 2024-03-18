function SumofDigits(n) {
  //complete this function
  // write a recursive method

  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = parseInt(n / 10);
  }
  return sum;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T; i = i = i + 1) {
    let N = parseInt(inputArr[i]);
    console.log(SumofDigits(N));
  }
}
