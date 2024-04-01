// Diagonal Traversal of a Matrix
// https://course.acciojob.com/idle?question=c6c26827-a9b9-478e-bafb-77ab8d37bc88
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    n = Number(n);
    let mat = [];
    let count = 0;
    readline.on('line', line => {
      mat.push(line.split(' ').map(Number));
      count++;
      if(count === n) {
        readline.close();
        let res = diagonalTraversal(mat, n);
        console.log(res.join(' '));
      }
    });
  });
  
  function diagonalTraversal(matrix, n) {
    // your code here
     
      const result = [];
  
      // Traverse from top-right to bottom-left in anti-diagonal segments
      for (let d = n - 1; d >= -n + 1; d--) {
          let rowStart = Math.max(0, -d);
          let colStart = Math.max(0, d);
          let row = rowStart;
          let col = colStart;
  
          while (row < n && col < n) {
              result.push(matrix[row][col]);
              row++;
              col++;
          }
      }
      return result
  }