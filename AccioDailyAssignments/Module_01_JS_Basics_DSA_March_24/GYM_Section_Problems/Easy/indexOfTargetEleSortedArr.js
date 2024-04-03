// Index of the target element after sorting
// https://course.acciojob.com/idle?question=6c605dc2-74d4-4a25-9560-369b5ceead34

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let N = Number(input[0]);
  let A = input[1].split(' ').map(Number);
  let B = Number(input[2]);
  getIndex(N ,A, B);
});
function getIndex(n, arr, target){
    arr.sort((a,b) => a - b)
    for(let i = 0; i < n; i++){
        if(arr[i] == target){
            console.log(i)
        }
    }
    // console.log(arr)
}
// your code here
