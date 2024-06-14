// Sort 0's 1's and 2's
// https://course.acciojob.com/idle?question=6d9ab483-570c-4217-9ff1-8739fab488b4

function Sort012(nums) {
    let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  
  while (mid <= high) {
      if (nums[mid] === 0) {
          [nums[low], nums[mid]] = [nums[mid], nums[low]];
          low++;
          mid++;
      } else if (nums[mid] === 1) {
          mid++;
      } else {
          [nums[mid], nums[high]] = [nums[high], nums[mid]];
          high--;
      }
  }
  
  return nums;
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

if (lineNumber == 2 * size) {
  logic("s");
  readline.close();
}
}

function logic(input) {
const T = size;
for (let i = 1; i <= T*2; i = i = i + 2) {
  let N = parseInt(inputArr[i]);
  let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
  console.log(Sort012(Arr));
}
}


