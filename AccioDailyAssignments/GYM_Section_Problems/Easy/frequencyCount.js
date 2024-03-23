const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function countFreqDigit(n, d) {
    // write code here
      let count = 0
      while (n != 0) {
          const digit = n % 10;
          n = parseInt(n / 10)
          if(digit == d){
          count++
          }
      }
      return count
  }
  
  readline.question('', (input) => {
    const [n, d] = input.split(' ').map(Number);
    console.log(countFreqDigit(n, d));
    readline.close();
  });