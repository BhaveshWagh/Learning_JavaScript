// Test divisors of three
// https://course.acciojob.com/idle?question=e6ed10e2-8d64-455c-9596-28f22010ffe3
const DivisibleBy3 = (low, high) => {
  // Your code here
  const res = [];
  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      res.push(i + " div3");
    } else {
      res.push(i);
    }
  }
  return res.join(" ");
};

/*Do not change the code below*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  let [low, high] = line.split(" ").map((x) => +x);
  console.log(DivisibleBy3(low, high));
});
