// Summing Values Using a Callback Function
// https://course.acciojob.com/idle?question=211cbb64-040e-49f6-ba0e-fcd3460af26b

function sumWithCallback(arr, callback) {
  // Do not console.log here
  // Just return the output
  let runningSum = 0;
  for (let i = 0; i < arr.length; i++) {
    runningSum = callback(runningSum, arr[i]);
  }
  return runningSum;
}

function multiplyByTwo(runningSum, num) {
  return runningSum + num * 2
}

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]);
  console.log(sumWithCallback(arr, multiplyByTwo));
}
