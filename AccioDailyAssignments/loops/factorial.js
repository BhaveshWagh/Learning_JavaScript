const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.close();
    // Write your code here
    let fact = 1;
    for (let i = 1; i <= n; i++){
      fact = fact * i;
    }
    console.log(fact)
  });