// String Palindrome
// https://course.acciojob.com/idle?question=b63a6d2a-0420-4244-a101-07df0a98872f
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
rl.on('line', (input) => {
  const result = isPalindrome(input);
  console.log(result ? 'YES' : 'NO');
  rl.close();
  });
function isPalindrome(str,start = 0,end = str.length - 1) {
  // Write your code here
    // not submitted
    if (start >= end) {
        return true;
    }

    if (str[start] === str[end]) {
        return isPalindrome(str, start + 1, end - 1);
    } else {
            return false; 
    }
    
  }