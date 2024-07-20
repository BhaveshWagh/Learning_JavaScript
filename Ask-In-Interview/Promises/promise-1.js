// JS Promise me - 1
// https://course.acciojob.com/idle?question=c8463934-78d9-419d-a6d4-4438c638f241

function promiseMe(number, dat) {
  // return the output using return keyword
  // do not console.log it
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dat); // return true if its resolved
    }, number);
  });
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  const args = line.split(" ");
  const num = parseInt(args[0], 10);
  const op = args[1];

  let start = Date.now();

  promiseMe(num, op).then((dat) => {
    let end = Date.now();
    console.log(num < end - start < num + 200, dat == op);
    rl.close();
  });
});
