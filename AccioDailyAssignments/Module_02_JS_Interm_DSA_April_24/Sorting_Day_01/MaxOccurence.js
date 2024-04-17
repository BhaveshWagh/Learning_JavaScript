// Maximum Occurrence
// https://course.acciojob.com/idle?question=a0cc6d77-dec4-4c4e-af36-05a21426fe01
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(' ').map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  //Write code here
    let obj = {};

  for (let i of arr) {
    if (obj[i]) {
      obj[i] += 1;
      // console.log(obj[i])
    } else {
      obj[i] = 1;
      // console.log("else",obj[i])
    }
  }

// console.log(obj)

let maxNum = -1;
  let max = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > max) {
      max = value;
      maxNum = key;
    }
      
    if (max == value) {
      if (maxNum > key) {
        maxNum = key;
      }
    }
  }
  
  return maxNum;

}