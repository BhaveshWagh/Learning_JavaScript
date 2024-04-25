// Print Stair Path
// https://course.acciojob.com/idle?question=c6abdf5c-6981-4f50-8908-0ce691ee6851
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
rl.on('line', (input) => {
  const n = parseInt(input, 10);
  printStairPaths(n, '');
  rl.close();
  });
function printStairPaths(n, pathSoFar) {
  // Write your code here
    if(n === 0){
         console.log(pathSoFar)
        return
    }
    if(n < 0){
        return
    }
    printStairPaths(n-1,pathSoFar + '1')
    printStairPaths(n-2,pathSoFar + '2')
    printStairPaths(n-3,pathSoFar + '3')
  }