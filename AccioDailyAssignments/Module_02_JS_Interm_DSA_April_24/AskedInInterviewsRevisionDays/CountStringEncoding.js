// Count String Encodings
// https://course.acciojob.com/idle?question=d87d1a01-6956-4b27-a521-0499605191b1
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countEncodings(str, i = 0, ans = "") {
  // Write your code here

  // Write your code here
  if (i >= str.length) {
    // console.log(ans)
    return 1;
  }
  if (str[i] === "0") {
    return 0;
  }
  let first = String.fromCharCode(+str[i] + 96);
  let digits = +(str[i] + str[i + 1]);

  let twoDigit = String.fromCharCode(digits + 96);
  let c = 0;
  c += countEncodings(str, i + 1, ans + first);
  if (digits >= 10 && digits <= 26) {
    c += countEncodings(str, i + 2, ans + twoDigit);
  }
  // console.log(c)
  return c;
}

rl.question("", (str) => {
  console.log(countEncodings(str));
  rl.close();
});
