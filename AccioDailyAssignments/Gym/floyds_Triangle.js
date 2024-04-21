// Floyd's Triangle.
// https://course.acciojob.com/idle?question=055c9df8-1fbc-403c-98ee-cd52d18e0b04
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line) {
  const numberOfRows = parseInt(line);
  printNumbers(numberOfRows);
});

function printNumbers(numberOfRows) {
  //Write your code here
  let k = 1;
  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(k + " ");
      k++;
    }
    console.log();
  }
}