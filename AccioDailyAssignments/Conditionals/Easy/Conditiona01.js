const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    // write code here
   if(n == 28){
    console.log("i am young")
   }
   else{
    console.log("i am not young")
   }
    readline.close();
  });