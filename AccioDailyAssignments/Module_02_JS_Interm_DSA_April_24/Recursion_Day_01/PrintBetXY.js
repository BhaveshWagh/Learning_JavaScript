// Print between X & Y
// https://course.acciojob.com/idle?question=398c8e7b-d61f-4a2a-8991-a0a754020eb1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const inputs = [];
rl.on('line', (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    rl.close();
    printXY(inputs[0], inputs[1]);
  }
});

function printXY(x, y) {
  //Write your code here
  if(x > y){
    return 
  }
  process.stdout.write(x + " ")
  printXY(x + 1, y)
 }