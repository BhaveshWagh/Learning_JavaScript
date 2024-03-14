const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;

rl.on('line', (input) => {
  const num = parseInt(input);
  count++;
  if (num % 2 !== 0) {
    console.log(count);
    rl.close();
  }

});
