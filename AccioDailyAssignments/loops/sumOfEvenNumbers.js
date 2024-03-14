const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
      n = parseInt(n);
      // Write your code here
      let sum = 0
      for(let i = 1; i <= n; i++){
        if(i % 2 == 0){
          sum += i;
        }
      }
      console.log(sum)
      
      readline.close();
  });