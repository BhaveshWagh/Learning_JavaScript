//  Special Matrix
// https://course.acciojob.com/idle?question=178c414a-f842-4be8-ae84-179be8e00b57
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let t = Number(input.shift());
  while(t-- > 0){
    let n = Number(input.shift());
    let matrix = [];
    for(let i = 0; i < n; i++){
      matrix.push(input.shift().split(' ').map(Number));
    }
    console.log(special(matrix, n));
  }
});

function special(matrix, n){
  //Write code here const n = matrix.length;

    // Check diagonal elements
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] === 0) {
            return false; // Diagonal element is zero
        }
    }

    // Check anti-diagonal elements
    for (let i = 0; i < n; i++) {
        if (matrix[i][n - i - 1] === 0) {
            return false; // Anti-diagonal element is zero
        }
    }

    // Check non-diagonal elements
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && j !== n - i - 1 && matrix[i][j] !== 0) {
                return false; // Non-diagonal element is non-zero
            }
        }
    }

    return true; // Matrix is special
}