// output
// N = 3
// * * *
// *
// *
//*
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (n) => {
    // Write your code here
  
    for (let i = 1; i <= n; i++) {
      process.stdout.write("* ");
      if (i == n) {
        console.log("")
        for (let i = 1; i <= n; i++) {
          console.log("*");
        }
      }
    }
  
    readline.close();
  });
  