// Recursive Multiplication
// https://course.acciojob.com/idle?question=a34b9f55-9ebc-479e-9446-b52e69107909
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function multiplyRecursively(n, m, sum = 0) {
    //Write code here and print output
      // not submitted
      if(m === 0){
          return console.log(sum) 
      }
      return multiplyRecursively(n,m-1,sum + n)
  }
  
  readline.question('', n => {
    readline.question('', m => {
      multiplyRecursively(parseInt(n), parseInt(m));
      readline.close();
    });
  });