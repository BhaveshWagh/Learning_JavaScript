// Recursively Print Numbers In Reverse
// https://course.acciojob.com/idle?question=b0401342-76e9-4b81-9e06-4a92b204a6ef
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printtillN(N) {
  // Write your code here
    if(N === 0){
        return
    }
    process.stdout.write(N + " ")
    printtillN(N - 1)
}

rl.on('line', (N) => {
  printtillN(parseInt(N));
  rl.close();
});