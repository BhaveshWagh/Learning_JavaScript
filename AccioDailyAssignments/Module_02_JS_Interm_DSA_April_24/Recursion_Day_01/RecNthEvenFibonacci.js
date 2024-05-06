// Nth Even Fibonacci Number
// https://course.acciojob.com/idle?question=09f6911f-992e-43cb-98dc-75f7848a14e3

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  let ans = fib(parseInt(n));
  ans = ans % (Math.pow(10, 9) + 7);
  console.log(ans);
  rl.close();
});

function fib(n) {
    // Not submitted
  if (n < 1) {
    return n;
  }
  if (n == 1) {
    return 2;
  }
  return 4 * fib(n - 1) + fib(n - 2);
}