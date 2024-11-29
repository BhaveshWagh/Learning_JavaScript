// K continuous elements sum check
// https://course.acciojob.com/idle?question=5465d817-a26d-4a7e-ac06-97cf409a2063
function subarraySum(arr, k) {
  // return a boolean value
  // do not console.log here
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // Check if the initial sum is greater than or equal to k
  if (currentSum >= k) {
    return true;
  }

  // Slide the window across the array
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    if (currentSum >= k) {
      return true;
    }
  }

  // If no such subarray is found
  return false;
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = JSON.parse(inputArr[0].trim());
  let k = parseInt(inputArr[1].trim());
  // console.log(Arr,k);
  console.log(subarraySum(Arr, k));
}
