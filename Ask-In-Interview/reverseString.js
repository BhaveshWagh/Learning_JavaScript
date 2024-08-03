// Rev Strings
// https://course.acciojob.com/idle?question=bfd57c59-4538-48a6-8336-b4d5a98b7e86
function reverseString(string) {
  // return the reversed string
  // do not console.log here
  // code here
  let revStr = "";
  for (let char = string.length - 1; char >= 0; char--) {
    revStr += string[char];
  }
  return revStr;
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
    //size = parseInt(inputArr[0].trim());
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(reverseString(inputArr[0].trim()));
}
