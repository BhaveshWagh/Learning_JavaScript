// Check whether Array is a Palindrome using Recursion
// https://course.acciojob.com/idle?question=ad0d1ee4-a4b1-4132-b6b5-5a226479cc3a
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      console.log(isPalindrome(arr, n));
      readline.close();
    });
  });
  
  function isPalindrome(arr, n) {
    let res = isPalindromic(arr, 0, n - 1);
    if (res === 1){
  
      return true;
    }
    return false;
  }
  
  function isPalindromic(arr, begin, end) {
      if(begin >= end){
          return 1
      }
      if(arr[begin] === arr[end]){
          return isPalindromic(arr,begin+1,end-1)
      }
      return 0
  }