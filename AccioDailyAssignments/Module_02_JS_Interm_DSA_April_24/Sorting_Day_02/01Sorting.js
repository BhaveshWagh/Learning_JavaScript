// 0-1 Sorting
// https://course.acciojob.com/idle?question=09d1a3ab-046f-4594-b5b4-41040ef6650f
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const ans = Sorting01(n, arr);
    console.log(ans.join(" "));
    rl.close();
  });
});

function Sorting01(n, arr) {
  // Write your code here
  // Return the answer; Do not print anything here
  // Another approach without using any sorting technique and prebuild function
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    }
    let k = 0;
    for (let i = 0; i < count0; i++) {
      arr[k] = 0;
      k++;
    }
    for (let i = 0; i < count1; i++) {
      arr[k] = 1;
      k++;
    }
  }
  return arr;
  // Another way
  // return sortedArray = arr.sort((a,b)=>a-b)
  // sortedArray;
}

const res = Sorting01(5, [0, 1, 0, 1, 1]);
console.log(res);
