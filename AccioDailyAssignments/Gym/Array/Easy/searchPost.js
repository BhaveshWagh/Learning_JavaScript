// Search Post
// https://course.acciojob.com/idle?question=7b0a076c-8ea4-450d-be65-49ce44dcb56a
function searchPost(arr, word) {
  return arr.filter((post) => post.includes(word));
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let arr = JSON.parse(inputArr[0]);
  let word = inputArr[1];
  console.log(searchPost(arr, word));
}
