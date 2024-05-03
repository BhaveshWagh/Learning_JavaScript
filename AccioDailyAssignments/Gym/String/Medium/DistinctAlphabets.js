// Distinct alphabets
// https://course.acciojob.com/idle?question=22f7123f-c888-47ff-8ca7-23e2567f9e71

function Alphabets(str) {
  str = str.toLowerCase();
  const countArr = new Array(26).fill(0);
  //  console.log(countArr)
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      const charCode = ch.charCodeAt();
      const index = charCode - 97;
      countArr[index] += 1;
    }
  }
  return countArr.join(" ");
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let str = line;
  //str = str.replace(/\\n/g, " ");

  console.log(Alphabets(str));
});
