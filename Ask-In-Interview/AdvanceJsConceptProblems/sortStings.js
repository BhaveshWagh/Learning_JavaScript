// Sort Strings
// https://course.acciojob.com/idle?question=fc6a4257-796e-4480-8972-2a2c41fcecdd
function sortStrings(arr) {
  // Your code here
  // do not console.log here
  // return the sorted string array
  // return arr.sort()
  // without using prebuilt functions
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => x);

  console.log(sortStrings(Arr).join(" "));
}
