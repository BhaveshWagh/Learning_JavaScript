// input = [["1", "Dish1", 10],["2", "Dish2", 20], ["3", "Dish3", 30]] 
function totalPrice(arr) {
  // arr[0][2] + arr[1][2] + arr[2][2]
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i][2] + sum;
  }
  return sum;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let arr = JSON.parse(inputArr[0]);
  console.log(totalPrice(arr));
}
