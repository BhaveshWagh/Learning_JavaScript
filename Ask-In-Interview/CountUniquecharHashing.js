// solved hashing

// Unique number of characters
// https://course.acciojob.com/idle?question=665b5b46-4ec7-4a52-80c9-4519582e02d9
function countUniqueCharacters(s) {
  // return the count
  let seenElemets = {};

  for (let char of s) {
    if (!seenElemets[char]) {
      seenElemets[char] = true;
    }
  }
  return Object.keys(seenElemets).length;

  // ! second approach using set
    // Initialize a set to store unique characters

    // let uniqueChars = new Set();

    // Iterate through each character in the string
    
    // for (let char of s) {
        // uniqueChars.add(char);
    // }

    // Return the size of the set, which represents the number of unique characters
    
    // return uniqueChars.size;
}

console.log(countUniqueCharacters("abcdeaa"));

// Driver code
// /*Do not change the code below */

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var query = 100000;
// var K;
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;
//   if (lineNumber == 0) {
//     size = parseInt(inputArr[0]);
//   }
//   //Exit Condition
//   if (lineNumber == 0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   //let s = parseInt(inputArr[0].trim());
//   //let str1 = inputArr[1].trim();
//   let Arr = inputArr[0].trim();

//   console.log(countUniqueCharacters(Arr));
// }
