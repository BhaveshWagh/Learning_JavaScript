const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    n = parseInt(n);
    //write code here
      for(let i = 0; i < n; i++){
          const hashes = i + 1;
          const spaces = n - hashes;
          for(let space = 0; space < spaces ; space++){
              process.stdout.write(" ")
          }for(let hash = 0; hash < hashes ; hash++){
              process.stdout.write("#")
          }
          console.log()
          
      }
    readline.close();
  });