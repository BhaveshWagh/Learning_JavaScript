// Sum of Array elements using recursion
// https://course.acciojob.com/idle?question=fba72d31-dfb6-4db7-8d05-1ff67555e229
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      console.log(sumofArrayRec(arr, arr.length));
      readline.close();
    });
  });
  
  function sumofArrayRec(arr, n) {
      
      //  Write your code here
      // Return your answer. Do not print anything here
      if(n === 0){
      return 0
  }	
  return arr[n - 1] + sumofArrayRec(arr, n - 1)	
  }