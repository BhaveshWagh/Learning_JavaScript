const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (N) => {
  // write your code here
    // let num = Number(N)
    // let sumOfNNaturals = num*(num+1)/2
    let sum = 0;
    for(let i = 1; i <= N; i++ ){
        sum += i
    }
    console.log(sumOfNNaturals);
  rl.close();
});