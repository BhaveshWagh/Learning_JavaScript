function findPair(array, k) {
  const indexMap = new Map(); // Map to store the number and its index

  for (let i = 0; i < array.length; i++) {
    const complement = k - array[i];

    // Check if the complement is already in the map
    if (indexMap.has(complement)) {
      // Return 1-indexed positions
      return [indexMap.get(complement) + 1, i + 1];
    }

    // Store the current number with its index
    indexMap.set(array[i], i);
  }
}

// Read input and process it
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic();
    readline.close();
  }
}

function logic() {
  let N = parseInt(inputArr[0].split(" ")[0]);
  let X = parseInt(inputArr[0].split(" ")[1]);
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  // Find the pair and print it
  console.log(findPair(Arr, X).join(" "));
}
