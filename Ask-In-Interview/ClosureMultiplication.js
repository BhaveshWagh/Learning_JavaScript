// Closure Multiplication
// https://course.acciojob.com/idle?question=7ecd7cb0-92ce-466a-bad0-83168d6cb114
// here arguments are not passed.
// in the function mul try to pass arguments accordingly.
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  let [a, b, c] = line.split(" ").map((x) => +x);
  console.log(mul(a)(b)(c));
});
