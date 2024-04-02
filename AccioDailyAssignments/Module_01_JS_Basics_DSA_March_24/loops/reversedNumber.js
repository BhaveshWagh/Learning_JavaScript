const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    let num = parseInt(n);
    let reversed = 0;
    while (num !== 0) {
      const digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
    console.log(reversed);
    readline.close();
  });
  