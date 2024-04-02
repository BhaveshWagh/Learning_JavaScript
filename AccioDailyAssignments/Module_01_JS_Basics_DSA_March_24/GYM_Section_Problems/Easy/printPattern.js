// Print Number Pattern 2
// Given an integer n, print a pattern of n lines, where the ith line has the numbers i to 1 printed in descending order.
//  Check the sample cases for a better understanding.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  // your code here
    for(i = 0; i < n; i++){
        let num = i + 1
        for(let j = 0; j < i + 1; j++){
            process.stdout.write(String(num))
            num--;
        }
        console.log()
    }
  rl.close();
});