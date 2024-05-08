// Sum of several arrays
// https://course.acciojob.com/idle?question=4125e49c-5ff1-4805-8fc1-5844f7290107
function sum_array(arr) {
  // write code here
  // use console.log for displaying the output
  // not submitted
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
}
const arr = [[3, 2], [1], [4, 12]]
sum_array(arr)

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

// rl.on("line", function (line) {
//   sum_array(JSON.parse(line));
// });
