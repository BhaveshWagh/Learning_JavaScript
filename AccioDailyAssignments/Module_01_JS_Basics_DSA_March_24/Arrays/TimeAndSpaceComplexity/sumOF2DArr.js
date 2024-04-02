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
  let [n, m] = input[0].split(' ').map(Number);
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(input[i].split(' ').map(Number));
  }
  console.log(findSum(arr, n, m));
});

function findSum(arr, n, m) {
  //Write your code here
     let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j]
        }
    }
    return sum
}