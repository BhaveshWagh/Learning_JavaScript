// Remove Duplicates from String
// https://course.acciojob.com/idle?question=262b09fd-d23e-42b9-b697-7a28a7855c83
function removeDuplicates(str) {
  // return the string
  // do not console.log here
  // Your code here
  let uniqueStr = "";

  for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueStr.length; j++) {
      if (str[i] === uniqueStr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueStr += str[i];
    }
  }

  return uniqueStr;
  // Another approach using set
  //   const seen = new Set();
  //   let result = '';

  //   for (let char of str) {
  //     console.log(seen)
  //     console.log(result)
  //     if (!seen.has(char)) {
  //       seen.add(char);
  //       result += char;
  //     }
  //   }

  //   return result;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 1; i <= parseInt(inputArr[0]); i++) {
    console.log(removeDuplicates(inputArr[i].trim()));
  }
}
