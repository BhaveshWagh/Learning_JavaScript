// Word Reversals
// https://course.acciojob.com/idle?question=16410112-d54f-4f03-830b-b4bd0c12c8f7
function reverseWords(str) {
  // write code here
  // use console.log to print output
  str = str.split(" ");
  let revArr = [];
  for (let i = 0; i < str.length; i++) {
    revArrItem = str[i].split("").reverse().join("");
    revArr.push(revArrItem);
  }
 
  let outPutStr = "";
  for (let i of revArr) {
    outPutStr += i + " ";
  }
  console.log(outPutStr);
}

/*Do not change the code below*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let noGuessName = [];
rl.on("line", function (line) {
  reverseWords(line);
});
