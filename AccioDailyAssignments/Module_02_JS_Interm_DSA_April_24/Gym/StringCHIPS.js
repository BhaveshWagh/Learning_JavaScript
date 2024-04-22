// String of CHIPS
// https://course.acciojob.com/idle?question=32a5cb19-e075-4744-8c37-48646324cf41
function minMoves(S) {
  let minMove = 0;
  let compStr = "chips";

  if (S.toLowerCase() === compStr) {
    return minMove;
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== compStr[i % 5]) {
      minMove += 1;
    }
  }
  return minMove;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let word1 = inputArr[0];

  console.log(minMoves(word1));
}
