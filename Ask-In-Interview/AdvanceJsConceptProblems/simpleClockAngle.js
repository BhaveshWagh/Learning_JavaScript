// Simple Clock Angle
// https://course.acciojob.com/idle?question=6c2571c9-932c-4959-b5dc-726121982642
// To solve this problem, you need to calculate the angle formed by the minute hand of a clock relative to the 12 o'clock position.
// The clock is divided into 60 minutes, and a full circle is 360 degrees.
// Thus, each minute mark corresponds to an angle of
// 360/60 = 6 degrees;
function ClockAngle(n) {
  //complete this function
  //do not console.log here
  return n * 6;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);

  // let N = parseInt(inputArr[i]);
  console.log(ClockAngle(N));
}
