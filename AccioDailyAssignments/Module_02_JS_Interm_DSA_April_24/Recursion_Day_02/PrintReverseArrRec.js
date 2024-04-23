// Print Reverse Array Recursively
// https://course.acciojob.com/idle?question=4ad63387-62e1-484f-916b-16a1e5bde7c9
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      printReverseArray(arr, n);
      readline.close();
    });
  });
  
  function printReverseArray(arr, n) {
    printReverseArrayRecursive(arr, 0, n);
  }
  
  function printReverseArrayRecursive(arr, i, n) {
     
      // Write your code here    
       if(n === 0){
          return 
      }
      process.stdout.write(arr[n - 1] + " ")
      printReverseArrayRecursive(arr, i, n-1)
  }