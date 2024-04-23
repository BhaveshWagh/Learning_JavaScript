// Print the pattern
// https://course.acciojob.com/idle?question=2a4d1033-68f5-4f85-b9d3-6b7035fe3c5a
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function solve(n) {
    // Your code here
      if(n === 0){
      return
    }    
    solve(n-1)
    console.log("* ".repeat(n))
      
  }
  
  readline.question('', n => {
    solve(parseInt(n));
    readline.close();
  });