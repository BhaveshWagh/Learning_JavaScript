// Buildings
// https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArr = [];
let lineNumber = -1;
let inputSize;
let K;
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
  const T = inputArr[0];

  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(countVisibleRoofs(Arr));
}

function countVisibleRoofs(heights) {
  // Write your code here

  // let visibleCount = 0;
  // let maxHeight = 0;

  // for (let i = 0; i < heights.length; i++) {
  //   if (heights[i] >= maxHeight) {
  //     visibleCount++;
  //     maxHeight = heights[i];
  //   }
  // }
  // return visibleCount;

  // Using running stream technique:
  const n = heights.length;
  let runningMax = -Infinity;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (runningMax <= heights[i]) {
      cnt++;
    }
    runningMax = Math.max(runningMax, heights[i]);
  }

  return cnt;
}
