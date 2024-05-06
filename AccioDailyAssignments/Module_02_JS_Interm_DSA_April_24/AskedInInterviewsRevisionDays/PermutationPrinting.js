// Permutation Printing
// https://course.acciojob.com/idle?question=6a9ab058-5cca-42d5-aeea-3f4003dcd428

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  perm(input);
  rl.close();
});

let obj = {};

function perm(str, ans = "") {
  if (str === "") {
    if (obj[ans]) {
      return;
    } else {
      obj[ans] = true;
      console.log(ans);
    }
    // console.log(ans)
    return;
  }
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    const rest = str.substring(0, i) + str.substring(i + 1);
    // console.log(curr,rest)
    perm(rest, ans + curr);
  }
}
