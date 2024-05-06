// Smallest Greater Elements - Bubble Sort
// https://course.acciojob.com/idle?question=037c82ed-47d5-4683-a08c-5cdfb48fb39e
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(smallestGreaterElements(Arr).join(" "));
}

function smallestGreaterElements(arr) {
  const n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let minDiff = Infinity;
    let minPos = -1;
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        const currDiff = arr[j] - arr[i];
        if (currDiff < minDiff) {
          minDiff = currDiff;
          minPos = j;
        }
      }
    }
    if (minPos !== -1) {
      ans.push(arr[minPos]);
    } else {
      ans.push(-10000000);
    }
  }
  return ans;
}
