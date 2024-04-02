const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numDigits(num){
  //Write your code here
  let cnt = 0
  while (num > 0) {
      let digit = num % 10
      cnt++
      num = parseInt(num/10)
    }
    return cnt
    // other way
    // let numSplit = String(num).split('')
    // return numSplit.length
}

rl.on('line', (n) => {
  console.log(numDigits(parseInt(n)));
  rl.close();
});