const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let t = Number(input[0]);
  let index = 1;

  while (t > 0) {
    let n = Number(input[index]);
    // Write your code here
    function pyramid(rows) {
      for (let r = 0; r < rows - 1; r++) {
        const spaces = rows - r - 1;
        const stars = 2 * r + 1;
        for (let sp = 0; sp < spaces; sp++) {
          process.stdout.write("  ");
        }
        for (let st = 0; st < stars; st++) {
          process.stdout.write("* ");
        }
        console.log();
      }
    }

    function invPyramid(rows) {
      for (let r = rows - 1; r >= 0; r--) {
        const spaces = rows - r - 1;
        const stars = 2 * r + 1;
        for (let sp = 0; sp < spaces; sp++) {
          process.stdout.write("  ");
        }
        for (let st = 0; st < stars; st++) {
          process.stdout.write("* ");
        }
        console.log();
      }
    }

    pyramid(parseInt(n / 2) + 1);
    invPyramid(parseInt(n / 2) + 1);

    t--;
    index++;
  }
});
