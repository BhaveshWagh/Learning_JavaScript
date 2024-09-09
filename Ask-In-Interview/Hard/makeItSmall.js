// Make it small
// https://course.acciojob.com/idle?question=41a12e4a-97ce-4c61-a082-9b7eec71e041
function canMakeOneElementArray(arr) {
  let min = arr[0];
  let max = arr[0];

  // Find the min and max values in the array
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Check if the range between min and max is less than the length of the array
  if (max - min < n) {
    return "YES";
  } else {
    return "NO";
  }
  //  let freq = new Map();

  // for (let num of arr) {
  //     freq.set(num, (freq.get(num) || 0) + 1);
  // }

  // // Convert the frequency map to an array of [number, frequency] pairs and sort by number
  // let freqArray = Array.from(freq.entries()).sort((a, b) => a[0] - b[0]);

  // // Check the frequency difference between consecutive elements
  // for (let i = 1; i < freqArray.length; i++) {
  //     // If the difference between consecutive elements is greater than 1 in value,
  //     // we cannot remove them to make the array one element
  //     if (freqArray[i][0] - freqArray[i - 1][0] > 1) {
  //         return "NO";
  //     }
  // }

  // return "YES";
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let n, k;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    let Arr = inputArr[0].split(" ").map((x) => x);
    n = Arr[0];
    k = Arr[1];
  }

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => x);

  console.log(canMakeOneElementArray(Arr));
}
