const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [h1, h2, v1, v2] = input.split(" ").map(Number);
  // Write your code here
  // Calculate the difference in initial heights
  const heightDifference = Math.abs(h1 - h2);
  // Calculate the speed difference
  const speedDifference = Math.abs(v1 - v2);
  if (h1 === h2) {
    console.log(true);
  }
  // If both have the same speed and different heights, they will never meet, so return false
  else if (v1 === v2) {
    console.log(false);
  }
  // Check if the speed difference allows them to meet
  else if (heightDifference % speedDifference === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
});
