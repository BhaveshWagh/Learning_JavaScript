// Recursively Print Numbers
// https://course.acciojob.com/idle?question=081952cc-46a8-4444-bebd-735bff0c558d
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const N = parseInt(line);
  rl.close();
  printTillN(N, 1);
});

function printTillN(N, i) {
//Write your code here
    if(N === 0){
    return 
  }
  process.stdout.write(i + " ")
  printTillN(N-1, i+1)
}