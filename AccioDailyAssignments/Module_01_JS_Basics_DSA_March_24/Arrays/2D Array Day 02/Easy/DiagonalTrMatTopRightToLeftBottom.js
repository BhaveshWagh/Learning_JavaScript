// Diagonal Traversal of a Matrix
// https://course.acciojob.com/idle?question=c6c26827-a9b9-478e-bafb-77ab8d37bc88
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('', n => {
//     n = Number(n);
//     let mat = [];
//     let count = 0;
//     readline.on('line', line => {
//       mat.push(line.split(' ').map(Number));
//       count++;
//       if(count === n) {
//         readline.close();
//         let res = diagonalTraversal(mat, n);
//         console.log(res.join(' '));
//       }
//     });
//   });
  
//   function diagonalTraversal(matrix, n) {
//     // your code here
     
//       const result = [];
  
//       // Traverse from top-right to bottom-left in anti-diagonal segments
//       for (let d = n - 1; d >= -n + 1; d--) {
//           let rowStart = Math.max(0, -d);
//           let colStart = Math.max(0, d);
//           let row = rowStart;
//           let col = colStart;
  
//           while (row < n && col < n) {
//               result.push(matrix[row][col]);
//               row++;
//               col++;
//           }
//       }
//       return result
//   }

  // Another way
  function diagonalTraversal(mat, n) {
    // your code here
    const res = [];
  
    for (let c = n - 1; c >= 0; c--) {
      let row = 0;
      let col = c;
      while (row < n && col < n) {
        res.push(mat[row][col]);
        row++;
        col++;
      }
    }
  
    for (let r = 1; r < n; r++) {
      let row = r;
      let col = 0;
      while (row < n && col < n) {
        res.push(mat[row][col]);
        row++;
        col++;
      }
    }
  
    return res;
  }

  diagonalTraversal([[1,2,3],[1,2,3],[1,2,3]],3)