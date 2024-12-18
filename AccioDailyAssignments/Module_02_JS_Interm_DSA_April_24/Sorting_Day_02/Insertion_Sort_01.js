// https://course.acciojob.com/idle?question=757b5de7-d2dd-4e4d-bee5-13de2526d9d1
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (a) => {
    a = a.split(" ").map(Number);
    insertionSort1(a, parseInt(n));
    readline.close();
  });
});

function insertionSort1(arr, n) {
  // Write your code herefor
  let i = arr.length - 1;
  let j = i - 1;
  const curr = arr[i];
  while (j >= 0 && curr < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
    console.log(arr.join(" "));
  }
  arr[j + 1] = curr;
  console.log(arr.join(" "));
  return arr;
}
