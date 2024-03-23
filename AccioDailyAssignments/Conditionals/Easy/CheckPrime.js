const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    // your code heren 
      let count = 0
      for (let i = 2; i < n; i++) {
          if(n % i == 0){
              count += 1
          }
      }
      if(count != 0){
          console.log(`${n} is not a prime number`)
      }
      else{
        console.log(`${n} is a prime number`)
        
      }
    readline.close();
  });