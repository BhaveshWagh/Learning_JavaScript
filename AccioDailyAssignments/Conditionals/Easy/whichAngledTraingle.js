/**
 * Given the 3 sides of a triangle, find out whether it is acute-angled, right-angled, or obtuse-angled.

You need to output 1 for acute, 2 for right-angled, and 3 for an obtuse-angled triangle. You can assume that the input values always form a triangle and are valid integers.

Note

A triangle is acute-angled, if twice the square of the largest side is less than the sum of squares of all the sides.

A triangle is obtuse-angled, if twice the square of its largest side is greater than the sum of squares of all the sides.

A triangle is right-angled, if twice the square of its largest side is exactly equal to the sum of squares of all the sides.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (sides) => {
  let [a, b, c] = sides.split(" ");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  // Write your code here
  let max = Math.max(a, b, c);
  //   acute angle
  if (2 * max * max < a * a + b * b + c * c) {
    console.log(1);
  }
  // right angled
  else if (2 * max * max == a * a + b * b + c * c) {
    console.log(2);
  } else if (2 * max * max > a * a + b * b + c * c) {
    console.log(3);
  }
  rl.close();
});
