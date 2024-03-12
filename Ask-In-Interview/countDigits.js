const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numDigits(num){
  //Write your code here
    let numSplit = String(num).split('')
    return numSplit.length
}

rl.on('line', (n) => {
  console.log(numDigits(parseInt(n)));
  rl.close();
});