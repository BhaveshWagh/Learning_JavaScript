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
  let n = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);
  SecondLargest(arr, n);
});

function SecondLargest(arr, n) {
  // Write code here
    let firstMax = -Infinity;
    for(let i = 0; i < n; i++){
        if(arr[i] > firstMax){
            firstMax = arr[i]
        }
    }
    
    let secondMax = -Infinity;
    for(let i = 0; i < n; i++){
        if(arr[i] > secondMax && arr[i] !== firstMax){
            secondMax = arr[i]
        }
    }
    console.log(secondMax)
    
}