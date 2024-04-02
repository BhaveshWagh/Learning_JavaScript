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
    ArrayProblem(arr);
    rl.close();
  }
});

function ArrayProblem(arr) {
	// Write your code here
    let maxDiff = -Infinity
    let n = arr.length
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            const diff = Math.abs(arr[i]-arr[j])
            // console.log(i,j,arr[i], arr[j])
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
    }
    console.log(maxDiff)
}