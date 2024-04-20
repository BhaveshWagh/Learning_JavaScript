// Product of natural numbers
// https://course.acciojob.com/idle?question=87e75921-1f5a-4df9-bab1-ee5bea40c5db
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function product(n,prod = 1) {
    // Write code here
    if(n === 0){
      return prod
    }
    return product(n-1,prod*n)
  }
  
  readline.question('', n => {
    console.log(product(Number(n)));
    readline.close();
  });