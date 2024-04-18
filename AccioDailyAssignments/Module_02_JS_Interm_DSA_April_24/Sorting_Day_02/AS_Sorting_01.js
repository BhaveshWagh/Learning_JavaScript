// AS Sorting 1
// https://course.acciojob.com/idle?question=e776455a-949d-4ca4-a5a6-cd530e1fad62
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [n, m] = input[0].split(' ').map(Number);
  let mat = [];
  for(let i = 1; i <= n; i++) {
    mat.push(input[i].split(' ').map(Number));
  }
  sortCol(mat, n, m);
});

function sortCol(mat, N, M) {
  // Write your code here
    const cols = mat[0].length;
  const rows = mat.length; 
     for(let k = 0; k < cols; k++){
    for (let i = 1; i < rows; i++) {
      let j = i - 1;
      const curr = mat[i][k];
      while (j >= 0 && curr < mat[j][k]) {
        mat[j + 1][k] = mat[j][k];
        j--;
      }
      mat[j + 1][k] = curr;
    }
  }
  for(let i = 0; i < mat.length; i++){
    console.log(mat[i].join(' '))
  }
    
}