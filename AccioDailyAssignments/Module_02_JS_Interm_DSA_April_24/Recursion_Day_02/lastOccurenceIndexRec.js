// Last Occurence Index
// https://course.acciojob.com/idle?question=a33a78a1-76d9-45f9-b6a3-9c7d51df6ee2
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', N => {
    readline.question('', A => {
      readline.question('', T => {
        const arr = A.split(' ').map(Number);
        console.log(lastIndex(arr, Number(T), Number(N)-1));
        readline.close();
      });
    });
  });
  
  function lastIndex(A, T, startIndex) {
    //Write your code here
      if(startIndex < 0){
          return -1
      }
          if(A[startIndex] === T){
              return startIndex
          }
      return lastIndex(A,T,startIndex - 1)
  }