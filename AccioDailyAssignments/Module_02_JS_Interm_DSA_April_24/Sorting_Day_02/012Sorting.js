// 0-1-2 Sorting
// https://course.acciojob.com/idle?question=e6a85572-ab50-4b89-8fe0-c007ebf0d75b
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);
  const res = zero_one_two_sorting(arr);
  console.log(res.join(' '));
});

function zero_one_two_sorting(arr) {
  // Write your code here
      let n = arr.length;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count0++;
    }
    if (arr[i] === 1) {
      count1++;
    }
    if (arr[i] === 2) {
      count2++;
    }
  }
  let ans = [];
  for (let i = 0; i < count0; i++) ans.push(0);
  for (let i = 0; i < count1; i++) ans.push(1);
  for (let i = 0; i < count2; i++) ans.push(2);
  return ans;
}