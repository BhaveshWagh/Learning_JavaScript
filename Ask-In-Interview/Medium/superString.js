// Super String
// https://course.acciojob.com/idle?question=cd59e699-2c1e-42ba-8348-9596440f1932
function getLongestGoodString(S) {
  let total_a = 0;
  for (let char of S) {
    if (char === "a") total_a++;
  }

  let maxLength = Math.min(2 * total_a - 1, S.length);
  console.log(Math.min(2 * total_a - 1, S.length))
  return maxLength;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

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
    console.log(getLongestGoodString(inputArr[i]));
  }
}
