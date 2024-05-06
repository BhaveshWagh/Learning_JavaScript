// Minimum operations to Palindrome
// https://course.acciojob.com/idle?question=cf413727-10b6-4764-af22-7ef6b0e67469
function minChangesToMakePalindrome(s) {
  let changes = 0;
  const n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - 1 - i]) {
      changes++;
    }
  }

  return changes;
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
  let word1 = inputArr[0];

  console.log(minChangesToMakePalindrome(word1));
}
