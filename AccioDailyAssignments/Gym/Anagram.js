// Anagram
// https://course.acciojob.com/idle?question=677bc44a-737c-4999-8400-a62564b77fd5

// str1 and str2 are the two input strings
function isAnagram(a, b) {

    // return YES or NO
    // Do not console.log here
   // If the lengths are different, they can't be anagrams
      if (a.length !== b.length) {
          return "NO";
      }
  
      // Create a character count object for each string
      const charCountA = {};
      const charCountB = {};
  
      // Count the frequency of each character in string a
      for (let char of a) {
          charCountA[char] = (charCountA[char] || 0) + 1;
      }
  
      // Count the frequency of each character in string b
      for (let char of b) {
          charCountB[char] = (charCountB[char] || 0) + 1;
      }
  
      // Compare the character counts
      for (let char in charCountA) {
          if (charCountA[char] !== charCountB[char]) {
              return "NO";
          }
      }
  
      return "YES";
  }
  
  var readline = require("readline").createInterface(process.stdin);
  
  let inputArr = [];
  var lineNumber = -1;
  var inputSize;
  
  //multipleline input from User
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    // if (lineNumber == 0) {
    //   size = parseInt(inputArr[0]);
    // }
    //Exit Condition
    if (lineNumber == 1) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    const str1 = inputArr[0].trim();
    const str2 = inputArr[1].trim();
    console.log(isAnagram(str1, str2));
  }
  