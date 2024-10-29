// Student Sorted Array
// https://course.acciojob.com/idle?question=f746aec9-7b73-4956-8bb3-2c4059b0ddb5
function sortStudents(arr) {
  // return the sorted array
  // do not console.log here
  //   extract names from the arr
  const names = arr.map((name) => name[0]);
  return names.sort();
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let str = JSON.parse(inputArr[0].trim());
  console.log(sortStudents(str).join(" "));
}
