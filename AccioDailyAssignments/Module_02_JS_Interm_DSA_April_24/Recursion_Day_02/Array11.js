// Array11
// https://course.acciojob.com/idle?question=106c24fb-b071-40c1-aa8e-601f6096409d
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  console.log(array11(arr, 0));
});

function array11(nums, index) {
  //Write your code here

  if (index >= nums.length) {
    return 0;
  }
  if (nums[index] === 11) {
    return 1 + array11(nums, index + 1);
  }

  return array11(nums, index + 1);

  //   Iterative way
  // let count = 0
  // for(let num of nums){
  //     if(num === 11){
  //         count++
  //     }
  // }
  // return count
}

const res = array11([1, 11, 12, 11, 23], 0);
console.log(res);
