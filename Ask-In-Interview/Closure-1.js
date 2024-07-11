//  Order count - JS Clousre
// You need to make an order counter to keep track of the total number of orders received.

// Complete the function generateOrder() which returns a function which increments 
//the count and returns the order number formed with concatenating prefix - "Total orders = " + count.

// Note: The function generateOrder() will be called internally. 
// You do not need to call it yourself.
// https://course.acciojob.com/idle?question=e24ef357-cc2a-43c4-b152-9deda87f5802https://course.acciojob.com/idle?question=e24ef357-cc2a-43c4-b152-9deda87f5802

let generateOrder = function () {
    let count = 0;
    return function() {
        count++
        return `Total orders = ${count}`
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


