//! Not printing trailing zeros if the decimal part is 00, you can use JavaScript's parseFloat to convert the result to a floating-point number before converting it to a string. This will ensure that trailing zeros are removed
// Formula : A = P * (1 + R/100)^t
function compoundinterest(P, R, T) {
  const A = P * Math.pow(1 + R / 100, T); // Final amount
  const CI = A - P; // Compound Interest
  return parseFloat(CI.toFixed(2)); // Return compound interest rounded to 2 decimal places
}

// console.log(compoundinterest(1, 99, 2));
// console.log(compoundinterest(150000, 10, 2));

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [a, b, c] = line.split(" ");

  const P = parseInt(a);
  const R = parseInt(b);
  const T = parseInt(c);

  console.log(compoundinterest(P, R, T));
});
