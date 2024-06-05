// Order count - JS Clousre
// https://course.acciojob.com/idle?question=619d2b65-685e-4a87-ab73-a6245e53f052
let generateOrder = function () {
    // do not console.log here
    // return using return method
        let count = 0;
      
      // Return a function that increments the count and returns the formatted string
      return function() {
          count++;
          return "Total orders = " + count;
      }
   
  };
  
  /*Do not change the code below */
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  
  rl.on("line", function (line) {
    const args = line.split(" ").map(Number);
    const starting = args[0];
    const initC = generateOrder();
    for (let i = 0; i < starting; i++) {
      console.log(initC());
    }
  });
  
  
  