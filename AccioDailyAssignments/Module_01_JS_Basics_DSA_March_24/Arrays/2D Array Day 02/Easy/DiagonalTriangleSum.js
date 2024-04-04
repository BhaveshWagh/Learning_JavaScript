// Sum of upper and lower triangles
const { userInfo } = require("os");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let matrix = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    matrix.push(input.split(" ").map(Number));
    if (matrix.length === n) {
      triangleSums(n, matrix);
      rl.close();
    }
  }
});

function triangleSums(n, matrix) {
  // your code here
  let lsum = 0;
  let usum = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r >= c) {
        lsum += matrix[r][c];
      }
      if (r <= c) {
        usum += matrix[r][c];
      }
    }
  }
  console.log(usum, lsum);
}
