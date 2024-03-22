const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <=  Math.sqrt(num); i++) {
      if (num % i === 0) {
        //   console.log( Math.sqrt(num))
        return false;
      }
    }
    return true;
  }

  function printPrimeNumbers(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }

  const inputNumber = parseInt(n);
  printPrimeNumbers(inputNumber);
});
