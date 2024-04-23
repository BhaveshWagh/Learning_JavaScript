// First Occurence Index
// https://course.acciojob.com/idle?question=f03dab51-36ef-4e58-b5de-8995417f59ac
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let A = input[1].split(' ').map(Number);
  let T = Number(input[2]);
  console.log(firstIndex(A, T, 0));
});

function firstIndex(A, T, startIndex) {
  //Write your code here
    
      if (startIndex >= A.length) {
        return -1;
    }
    if (A[startIndex] === T) {
        return startIndex; 
    }
    return firstIndex(A, T, startIndex + 1);

}