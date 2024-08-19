// Understanding Rotation Cost:

// Each ring can be rotated in two directions: clockwise and counterclockwise.
// If the current digit is d1 and the target digit is d2, the cost to rotate from d1 to d2 can be calculated in two ways:
// Clockwise rotation: (d2 - d1 + 10) % 10
// Counterclockwise rotation: (d1 - d2 + 10) % 10
// The minimum of these two values gives the least number of rotations needed to change d1 to d2.
// Algorithm:

// For each digit in the lock (represented by string lock), calculate the minimum rotations required to match the corresponding digit in the code (represented by string code).
// Sum the rotations for all digits to get the total minimum number of rotations.
// Implementation:

// Loop through each character in the lock and code strings.
// For each position, convert the characters to integers.
// Calculate the rotation cost in both directions.
// Sum up the minimum rotation costs for all digits.

// Infinity Stone : The Time Stone in Mystery Box
// https://course.acciojob.com/idle?question=6da42a26-910f-403a-abc7-a969c92ef0c3
function minRotations(n, lock, code) {
  // return the value
  // do not console.log here
  let totalRotations = 0;

  for (let i = 0; i < n; i++) {
    let d1 = parseInt(lock[i], 10);
    let d2 = parseInt(code[i], 10);

    let clockwise = (d2 - d1 + 10) % 10;
    let counterclockwise = (d1 - d2 + 10) % 10;

    totalRotations += Math.min(clockwise, counterclockwise);
  }

  return totalRotations;
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
  if (lineNumber == 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let n = parseInt(inputArr[0].trim());
  let str1 = inputArr[1].trim();
  let str2 = inputArr[2].trim();
  console.log(minRotations(n, str1, str2));
}
/**
 * Explanation:
parseInt(lock[i], 10): Converts the character at position i in the lock string to an integer.
parseInt(code[i], 10): Converts the character at position i in the code string to an integer.
The expression (d2 - d1 + 10) % 10 calculates the number of clockwise rotations needed.
The expression (d1 - d2 + 10) % 10 calculates the number of counterclockwise rotations needed.
Math.min(clockwise, counterclockwise) gives the minimum number of rotations for that particular ring.
Finally, totalRotations accumulates the sum of the minimum rotations for all rings.
This solution efficiently calculates the minimum number of rotations required for each ring, resulting in the least total rotations needed to open the lock.
 */
