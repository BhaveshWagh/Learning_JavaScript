// Bubble Sort
// https://course.acciojob.com/idle?question=0ef618cf-606f-4c76-a4e2-659b4ccd7113
// Visualizer : https://visualgo.net/en/sorting
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    bubbleSort(N, arr);
    console.log(arr.join(" "));
    readline.close();
  });
});

function bubbleSort(n, a) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      let left = a[j];
      let right = a[j + 1];
      if (left > right) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

  return a;
}

const res = bubbleSort(5, [-2,-3,-1,-0,0])
console.log(res)