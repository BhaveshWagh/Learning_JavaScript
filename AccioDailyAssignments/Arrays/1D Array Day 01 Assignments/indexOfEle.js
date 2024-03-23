const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function indexOfElement(N, X, arr) {
    // write code and print here
      let flag = false;
      for(let i = 0; i < N; i++){
          if(arr[i] == X){
              process.stdout.write(i + 1 +" ")
              flag = true;
          }
      }
      if(flag == false){
          console.log(-1)
      }
  
  }
  
  readline.question('', (input) => {
    const [N, X] = input.split(' ').map(Number);
    readline.question('', (input) => {
      const arr = input.split(' ').map(Number);
      indexOfElement(N, X, arr);
      readline.close();
    });
  });