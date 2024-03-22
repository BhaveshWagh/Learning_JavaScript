const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  // your code here
  for (i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      let alpha = String.fromCharCode(65 + i + j);
      process.stdout.write(alpha);
    }
    console.log();
  }
  rl.close();
});
