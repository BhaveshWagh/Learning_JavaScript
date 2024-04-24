// Find Digit Sum
// https://course.acciojob.com/idle?question=ea62270d-e330-4190-9d03-e25e6c84d41e
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumOfDigi(n,sum = 0) {
    //Write code here
      // not submitted
       if (n === 0) {
          return sum
      }
      return  sumOfDigi(Math.floor(n / 10), sum + (n % 10) );
      // another way
      // if (n === 0) {
      //     return 0;
      // }
      // let digit = n % 10
      // return digit + sumOfDigi(Math.floor(n / 10) );
  }
  
  readline.question('', n => {
    let result = sumOfDigi(parseInt(n));
    console.log(result);
    readline.close();
  });