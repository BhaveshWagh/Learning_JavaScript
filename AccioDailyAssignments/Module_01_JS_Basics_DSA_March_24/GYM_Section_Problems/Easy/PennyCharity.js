// Penny and Charity
// https://course.acciojob.com/idle?question=19e0d0a6-b547-4833-b3d2-80638efedeb4
const Charity = (N, M) => {
  // code here
  if (N == M) return -1;
  let getMaxClothes = M / N;
  if (parseInt(getMaxClothes) == 0) return -1;
  else return parseInt(getMaxClothes);
};

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    //size=parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const [N, M] = inputArr[0].split(" ").map((x) => parseInt(x));
  console.log(Charity(N, M));
}
