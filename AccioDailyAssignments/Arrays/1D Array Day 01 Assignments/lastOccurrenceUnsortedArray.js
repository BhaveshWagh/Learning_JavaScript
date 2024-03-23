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
  let [n, key] = input[0].split(' ').map(Number);
  let arr = input[1].split(' ').map(Number);
  findIndex(key, arr);
});

function findIndex(key, arr) {
  //Your code goes here
  let lastOccurance = 0
  for(let i = 0; i < arr.length; i++){
        if(arr[i] == key){
            lastOccurance = i
        }
  }
  console.log(lastOccurance)
}