// Calculate nPr

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', r => {
      console.log(solve(parseInt(n), parseInt(r)));
      readline.close();
    });
  });
  
  function solve(n, r) {
    // Your code here
    let divisor = n - r;
    let factOfN = 1;
    let factOfDivisor = 1
    for(i = 1; i <= n; i++){
      factOfN = factOfN * i
    }
    for(i = 1; i <= divisor; i++){
      factOfDivisor = factOfDivisor * i
    }
    let result = factOfN/factOfDivisor
    return result
  }