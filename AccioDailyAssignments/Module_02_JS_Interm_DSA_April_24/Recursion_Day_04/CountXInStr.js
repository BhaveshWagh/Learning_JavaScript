// Count X in a String
// https://course.acciojob.com/idle?question=9123c554-21a6-4a1a-a824-e7fd6e851d65
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(countX(input, 0, input.length));
  rl.close();
});

function countX(str, i) {
  // if (i > str.length) {
  //   return 0;
  // }
  // let count = 0;
  // if (str[i] === "x") {
  //   count = 1;
  // }
  // return count + countX(str, i + 1);
  // another way
  if (i > str.length) {
    return 0;
  }

  if (str[i] === "x") {
    return 1 + countX(str, i + 1);
  }
  return countX(str, i + 1);
}
