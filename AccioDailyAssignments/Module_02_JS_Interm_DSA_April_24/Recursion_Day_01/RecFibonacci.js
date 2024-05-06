// Recursive Fibonacci
// https://course.acciojob.com/idle?question=2ab95db8-5ccf-444f-abc0-22a6c03ccfd0
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function fib(n) {
    // write code here
      // Not Submitted
      if (n === 1) {
          return 0
      }
      if (n === 2) {
          return 1
      }
      return fib(n-1) + fib(n-2)
      
  }
  
  readline.question('', n => {
    console.log(fib(Number(n)));
    readline.close();
  });