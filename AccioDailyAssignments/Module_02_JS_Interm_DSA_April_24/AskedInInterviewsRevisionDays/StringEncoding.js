// String Encodings
// https://course.acciojob.com/idle?question=38c7e0ba-2e2e-40a2-b207-e6f6171a5fbd
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printEncodings(str, i = 0, ans = "") {
  // Write your code here
  if (i >= str.length) {
    if (i === str.length) {
      console.log(ans);
    }
    return 1;
  }
  if (str[i] === "0") {
    return 0;
  }
  let first = String.fromCharCode(+str[i] + 96);
  let digits = +(str[i] + str[i + 1]);

  let twoDigit = String.fromCharCode(digits + 96);
  let c = 0;
  c += printEncodings(str, i + 1, ans + first);
  if (digits >= 10 && digits <= 26) {
    c += printEncodings(str, i + 2, ans + twoDigit);
  }
  // console.log(c)
  // return c
}

rl.question("", (str) => {
  printEncodings(str);
  rl.close();
});
