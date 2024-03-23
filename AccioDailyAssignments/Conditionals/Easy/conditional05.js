// Given a number n, If the number is divisible by 6 then print Divisible else Not divisible

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  // Your code here
  if(n / 6){
    console.log("Divisible")
  }
  else{
    console.log("Not divisible")
  }
});

