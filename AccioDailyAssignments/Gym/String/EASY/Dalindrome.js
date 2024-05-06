// Dalindrome
// https://course.acciojob.com/idle?question=705ea0f6-2a3a-4f5e-ba83-7c6032df7b32
function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
function isDalindrome(s) {
  // return YES or No
  // do not console.log here
  // write your code below
  let n = s.length;
  if (n === 1) {
    return "YES";
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let sub = s.substring(i, j);
      if (isPalindrome(sub) && sub.length > 1) {
        return "YES";
      }
    }
  }
  return "NO";
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
    //size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let s = inputArr[0].trim();

  console.log(isDalindrome(s));
}
