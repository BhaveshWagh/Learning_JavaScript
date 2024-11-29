// https://course.acciojob.com/idle?question=e73c2c6a-7fba-46b7-8e4d-6d16f8271638
function correctMistake(line, charToBeReplaced, what) {
  //Write your code here
  const regex = new RegExp(charToBeReplaced, "g");
  return line.replace(regex, what);
}
const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  const [line1, ch, hc] = line.split(",");
  console.log(correctMistake(line1, ch, hc));
});
