// Count7
// https://course.acciojob.com/idle?question=906aec93-4171-4669-9c94-f2a9bcac0778
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    console.log(count7(parseInt(n)));
    readline.close();
  });
  
  function count7(n, count = 0) {
    // your code here
      // not submitted
      if(n === 0){
          return count
      }
      let digit = n % 10
      if(digit === 7){
          count++
      }
      return count7(Math.floor(n/10),count)
      
  }