const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [a, b] = line.split(" ").map(Number);
  // write code here

  let power = 1;
  for (let i = 0; i < b; i++) {
    power = power * a;
  }
  console.log(power);
});
