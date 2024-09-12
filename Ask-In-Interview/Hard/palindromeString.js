// Paindrome strings in the array
// https://course.acciojob.com/idle?question=d58c6dde-e25e-4709-beb0-473d98b831cf
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromes(arr) {
  const palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return palindromes;
}
const arr = ["racecar", "hello", "level", "radar", "civic"]
console.log(findPalindromes(arr))
// function palindromes(arr) {
//   // return the array
//   // do not console.log here
//   return arr.filter((str) => str === str.split("").reverse().join(""));
// }

/*Do not change the code below */

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;

//   //Exit Condition
//   if (lineNumber == 0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   let Arr = JSON.parse(inputArr[0].trim());
//   //let k = parseInt(inputArr[1].trim());
//   // console.log(Arr,k);
//   console.log(palindromes(Arr).join(", "));
// }
