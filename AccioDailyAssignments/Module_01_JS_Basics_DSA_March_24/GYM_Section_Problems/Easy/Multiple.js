// Multiple
// https://course.acciojob.com/idle?question=16a50f96-9bc3-4bae-9612-ab5ef523d480
const Multiple = (N, arr) => {
  // return the answer as an array
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

/*Do Not Change anything below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(Multiple(N, Arr).join(" "));
}
