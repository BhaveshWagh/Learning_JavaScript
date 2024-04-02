const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [a, b] = input.split(' ').map(Number);

  let hcf;
  let smallerNumber = Math.min(a, b);

  for (let i = 1; i <= smallerNumber; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }

  console.log("HCF:", hcf);
  rl.close();
});
