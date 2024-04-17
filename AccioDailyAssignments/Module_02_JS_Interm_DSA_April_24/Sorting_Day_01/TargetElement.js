// Index of the target element after sorting
// https://course.acciojob.com/idle?question=6c605dc2-74d4-4a25-9560-369b5ceead34
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  let large = parseInt(inputArr[2]);
  console.log(findTargetIndex(Arr, large));
}

function findTargetIndex(arr, target) {
  arr.sort((a, b) => a - b);
  const getPos = arr.indexOf(target);
  return getPos;
}
