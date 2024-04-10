function findTargetIndex(n, arr, target) {
    // Write your code here
    const sortedArray = arr.slice().sort((a, b) => a - b); // Sort the array in non-descending order
    const reversedArray = sortedArray.reverse(); // Reverse the sorted array
    const index = reversedArray.indexOf(target); // Find the index of the target element
    return index !== -1 ? index : -1;
  }
  
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let inputArr = [];
  let lineNumber = -1;
  let n, arr, target;
  
  readline.on("line", (line) => {
    lineNumber++;
  
    if (lineNumber === 0) {
      n = parseInt(line);
    }
  
    if (lineNumber === 1) {
      arr = line.trim().split(" ").map(Number);
    }
  
    if (lineNumber === 2) {
      target = parseInt(line);
      console.log(findTargetIndex(n, arr, target));
      readline.close();
    }
  });
  