// Longest Common Prefix in an Array
// https://course.acciojob.com/idle?question=3db0e81f-45be-4ff1-99f4-a6ac548a7747

function longestCommonPrefix(arr) {
    if (arr.length === 0) {
      return "-1"; // No strings in the array
    }
  
    // Sort the array to easily find common prefix among the first and last strings
    arr.sort();
    // console.log(arr)
    let firstStr = arr[0];
    let lastStr = arr[arr.length - 1];
    let prefix = "";
  
    for (let i = 0; i < firstStr.length; i++) {
      // console.log(firstStr, firstStr[i], lastStr, lastStr[i]);
  
      if (firstStr[i] === lastStr[i]) {
        prefix += firstStr[i];
      } else {
        break; // Break the loop if characters don't match
      }
    }
  
    return prefix.length > 0 ? prefix : "-1";
  }
  
  var readline = require("readline").createInterface(process.stdin);
  
  let inputArr = [];
  var lineNumber = -1;
  let arr = [];
  let n, k;
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) n = parseInt(line);
    if (lineNumber > 0) arr.push(line);
  
    if (lineNumber == n) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    console.log(longestCommonPrefix(arr));
  }
  
  // input
  // 4
  // geeks
  // gems
  // gese
  // geefs