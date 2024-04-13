// Palindrome String
// https://course.acciojob.com/idle?question=598cc264-4776-408f-a80b-4d156d9e8709
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(str) {
  //write code here
  str = str.toLowerCase();
  let newStr = "";
  for (let i of str) {
    if (i >= "a" && i <= "z") {
      newStr += i;
    }
  }

  let i = 0;
  let j = newStr.length - 1;
  let isPalindrome = 1;
  // while (i < j && j >= 0 && i <= newStr.length)
  while (i < j) {
    if (newStr[i] === newStr[j]) {
      i++;
      j--;
    } else {
      isPalindrome = 0;
      break;
    }
  }
  return isPalindrome;
}


