const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    // write code here
    if(n <= 1){
        console.log("You entered less")
    }else{
        console.log("You entered more")
    }
    readline.close();
  });
