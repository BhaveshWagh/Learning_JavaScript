// Transpose of Matrix
// Link: https://course.acciojob.com/idle?question=57e7562d-b233-42ca-89f6-c10ad5cdf579

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let matrix = [];

rl.on('line', (input) => {
  if (!n) {
    n = Number(input);
  } else {
    matrix.push(input.split(' ').map(Number));
    if (matrix.length === n) {
      let ans = matrixTranspose(matrix, n);
      for(let i=0; i<n; i++) {
        console.log(ans[i].join(' '));
      }
      rl.close();
    }
  }
});

function matrixTranspose(mat,n){
    for(let r = 0; r < n; r++){
        for(let c = 0; c <= r; c++){
            let temp = mat[r][c]
            mat[r][c] = mat[c][r] 
            mat[c][r] = temp
        }
    }
    return mat
}

// let n = 4
// // const mat = [ [1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]] 
// const mat = [ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ]
// const res = matrixTranspose(mat,n)
// console.log(res)