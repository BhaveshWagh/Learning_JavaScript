const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  const res = camelCase(line);
  console.log(res);
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(s) {
  // your code here
  let newStr = "";
  let isUnderScore = false;
  for (let char of s) {
    if (char === "_") {
      isUnderScore = true;
      continue;
    }
    if (isUnderScore) {
      newStr += char.toUpperCase();
    } else {
      newStr += char;
    }
    isUnderScore = false;
  }
  return newStr;
}
