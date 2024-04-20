// Factorial Recursively
// https://course.acciojob.com/idle?question=044b6db7-d0b6-4ab5-9bb5-8475269790cf
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    console.log(factorial_recursive(parseInt(n)));
    readline.close();
  });
  
  function factorial_recursive(n,fact = 1) {
    // your code here
      if( n === 0){
          return fact
      }
      return factorial_recursive(n - 1, n * fact)
      
  }