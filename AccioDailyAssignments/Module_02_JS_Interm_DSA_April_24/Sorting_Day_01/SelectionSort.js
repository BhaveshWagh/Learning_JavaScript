// Selection sort
// https://course.acciojob.com/idle?question=b5580fe6-2d5b-4c20-98dc-299219e55dda
// Visualizer : https://visualgo.net/en/sorting

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(arr) {
  // Write your code here
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let minPos = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minPos = j;
      }
    }
    swap(arr, i, minPos);
  }
  return arr;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(" "));
    readline.close();
  });
});
