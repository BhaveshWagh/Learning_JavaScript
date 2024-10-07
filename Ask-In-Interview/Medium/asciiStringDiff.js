// ASCII string
// https://course.acciojob.com/idle?question=c187b0e4-61e0-40cc-a28e-101cd39170fa
function solution(str) {
  let result = str[0];
  for (let i = 0; i < str.length - 1; i++) {
    let diff = str.charCodeAt(i + 1) - str.charCodeAt(i);

    result += diff + str[i + 1];
  }
  return result;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  console.log(solution(str));
  rl.close();
});
