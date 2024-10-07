// Most occurred string
// https://course.acciojob.com/idle?question=30602977-7087-49fc-b18c-ccf82087a785
function largestString(strings) {
  const countMap = new Map();

  for (const str of strings) {
    if (countMap.has(str)) {
      countMap.set(str, countMap.get(str) + 1);
    } else {
      countMap.set(str, 1);
    }
  }

  // Initialize variables to track the most occurred string and its count
  let maxCount = 0;
  let resultString = "";

  // Iterate over the hashmap to find the lexicographically largest string with the highest count
  countMap.forEach((count, str) => {
    if (count > maxCount || (count === maxCount && str > resultString)) {
      maxCount = count;
      resultString = str;
    }
  });

  return resultString;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber > 0) strs.push(line);

  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(largestString(strs));
}
