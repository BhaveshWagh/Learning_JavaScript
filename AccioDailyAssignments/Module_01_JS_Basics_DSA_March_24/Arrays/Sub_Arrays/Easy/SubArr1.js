// Subarray Problem 1
https://course.acciojob.com/idle?question=aaa5a80f-db4e-4cca-a438-ff25b1aadebf

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [1,2,3,4,5,6,7,8,9,10];

rl.on('line', (input) => {
  let [n, s] = input.split(' ').map(Number);
  solve(arr, n, s);
  rl.close();
});

function solve(arr, n, s) {
    let flag = false
 for (let i = 0; i <= arr.length - n; i++) {
      let sum = 0;
      for (let j = i; j < i + n; j++) {
          sum += arr[j];
      }
      if (sum === s) {
        console.log("YES");
          flag = true
      }
     
  }
    if(flag == false){
        console.log("NO");
    }
  
}