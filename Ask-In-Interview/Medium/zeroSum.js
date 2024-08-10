// Zero Sum
// https://course.acciojob.com/idle?question=787ad22e-4433-446e-8797-8efce3203a5e
function smallestDifferenceArray(N) {
  // return the sorted array
  const result = [];
  const half = Math.floor(N / 2);

  // Add numbers from -half to half
  for (let i = -half; i <= half; i++) {
    if (N % 2 === 0 && i === 0) continue; // Skip 0 if N is even
    result.push(i);
  }

  return result;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    N = parseInt(inputArr[0]);
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(smallestDifferenceArray(N).join(" "));
}
