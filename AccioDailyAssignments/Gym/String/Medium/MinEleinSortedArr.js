// Minimum Element in Sorted and Rotated Array
// https://course.acciojob.com/idle?question=7ab64a89-3cf0-45d0-836d-6996432f5f89
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

  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T * 2; i = i = i + 2) {
    let N = parseInt(inputArr[i]);
    let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
    console.log(findMin(Arr));
  }
}

function findMin(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[high]) {
      low = mid + 1; // Minimum element is in the right half
    } else {
      high = mid; // Minimum element is in the left half or at mid
    }
  }

  return arr[low]; // Minimum element found
}
