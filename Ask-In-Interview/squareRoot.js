// Square Root Of an Integer
// https://course.acciojob.com/idle?question=ac71b103-7d11-4032-8946-7a4c501d0265

function SqrtBinary(N) {
    if (N < 0) {
        throw new Error("N should be a non-negative integer.");
    }

    if (N === 0) {
        return 0;
    }

    let low = 0;
    let high = N;
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midSquared = mid * mid;

        if (midSquared === N) {
            return mid;
        } else if (midSquared < N) {
            result = mid; // mid is a potential result, but there might be a larger value
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
  }

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  
  if (lineNumber ==  size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T; i = i = i + 1) {
    let N = parseInt(inputArr[i]);
   
    console.log(SqrtBinary(N));
  }
}

