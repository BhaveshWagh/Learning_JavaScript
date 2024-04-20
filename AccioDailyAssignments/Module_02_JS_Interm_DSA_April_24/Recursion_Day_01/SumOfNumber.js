// Sum of natural numbers : Recursive function
// https://course.acciojob.com/idle?question=c978cb03-f171-461c-8fa7-40d33558141c
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function NumberSum(N,sum = 0) {
    //Write your code here
      if(N === 0){
      return sum;
      }
      return NumberSum(N-1,sum + N)
  }
  
  readline.question('', N => {
    console.log(NumberSum(Number(N)));
    readline.close();
  });