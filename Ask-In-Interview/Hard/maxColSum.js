// Max sum column
// https://course.acciojob.com/idle?question=d6a7bc77-23a7-4f01-8537-2f41a1f01f61

function maxColSum(mat) {
  if (mat.length === 0 || mat[0].length === 0) return 0;

  const numRows = mat.length;
  const numCols = mat[0].length;

  // Initialize an array to store the sum of each column
  let columnSums = new Array(numCols).fill(0);

  // Iterate over each element in the matrix to calculate column sums
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      columnSums[j] += mat[i][j];
    }
  }

  // Find the maximum sum among the column sums
  let maxSum = columnSums[0];
  for (let i = 1; i < columnSums.length; i++) {
    if (columnSums[i] > maxSum) {
      maxSum = columnSums[i];
    }
  }

  return maxSum;
}

/* Do not edit the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let mat = [];
var lineNumber = -1;

readline.on("line", readInputs);

let n, m;

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 0) {
    let Arr = inputArr[0].split(" ").map((x) => parseInt(x));
    n = Arr[0];
    m = Arr[1];
  } else {
    let Arr = inputArr[lineNumber].split(" ").map((x) => parseInt(x));
    mat.push(Arr);
  }

  if (lineNumber === n) {
    logic();
    readline.close();
  }
}

function logic() {
  console.log(maxColSum(mat));
}
