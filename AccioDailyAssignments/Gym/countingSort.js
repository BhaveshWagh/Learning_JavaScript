// Counting Sort using Map
// https://course.acciojob.com/idle?question=31b8b8df-8224-4413-ba40-86a35cc433fc
function countingSort(N, arr) {
  let max = Math.max(...arr);

  // fill array with max + 1 elements into array with 0

  const countedArr = new Array(max + 1).fill(0);

  // count the frequency of each element and push it into countedArr

  for (let num of arr) {
    countedArr[num]++;
  }

  // console.log(countedArr)

  // lets push the elements to its position
  const sortedArr = [];
  for (let i = 0; i < countedArr.length; i++) {
    while (countedArr[i] > 0) {
      sortedArr.push(i);
      countedArr[i]--;
    }
  }
  return sortedArr;
}
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
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
  const T = inputArr[0];

  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(countingSort(Arr.length, Arr).join(" "));
}
