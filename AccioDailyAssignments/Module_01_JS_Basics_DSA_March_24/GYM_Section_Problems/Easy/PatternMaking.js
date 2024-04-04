// Pattern Making
// https://course.acciojob.com/idle?question=f61e08ec-1283-46b1-ab00-40aff4746a94
/**
 * 
 * 
1
1 2 1
1 2 3 2 1
1 2 3 4 3 2 1
1 2 3 2 1
1 2 1
1
 
 */
function pattern(n) {
    // print the pattern using console.log() statements
     for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    for (let k = i - 1; k >= 1; k--) {
      process.stdout.write(k + " ");
    }
    console.log();
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    for (let k = i - 1; k >= 1; k--) {
      process.stdout.write(k + " ");
    }
    console.log();
  }
  }

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    N = parseInt(inputArr[0]);
    logic("s");
    readline.close();
  }
  

}

function logic(input) {
  pattern(N);
}

// 
// using console log
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        for (let k = i - 1; k >= 1; k--) {
            pattern += k + ' ';
        }
        console.log(pattern.trim());
    }
    for (let i = rows - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        for (let k = i - 1; k >= 1; k--) {
            pattern += k + ' ';
        }
        console.log(pattern.trim());
    }
}

// Example usage:
let row = 5;
printPattern(row);