// Count Maze Path
// https://course.acciojob.com/idle?question=a5508cd1-b8dc-4bf3-a968-b42a488c3265
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countMazePath(n, m) {
 // Write your code here
    if(n === 1 || m === 1){
        return 1
    }
    return countMazePath(n-1,m) + countMazePath(n,m-1)
}

rl.question("", (n) => {
  rl.question("", (m) => {
    // const [n, m] = input.split(' ').map(Number);
    n = Number(n);
    m = Number(m);
    console.log(countMazePath(n, m));
    rl.close();
  });
  rl.close();
});