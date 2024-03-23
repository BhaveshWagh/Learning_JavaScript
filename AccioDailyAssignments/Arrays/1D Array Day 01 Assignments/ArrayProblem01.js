const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      let ans = ArrayProblem1(n, arr);
      console.log(ans);
      readline.close();
    });
  });
  
  function ArrayProblem1(n, arr) {
    // Write code here
      let index = 0;
      let maxElement = arr[0]
      for (let i = 0;  i < arr.length; i++) {
          if(arr[i] > maxElement){
              maxElement = arr[i]
              index = i
          }
      }
      return index
      
  }