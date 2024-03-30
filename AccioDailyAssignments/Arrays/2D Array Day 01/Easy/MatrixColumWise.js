// Print Matrix Column Wise
// Link: https://course.acciojob.com/idle?question=31900452-fb2e-45cd-93b0-fb4d6afbfac0
function printMatrixColumnwise(mat, n, m) {
    // Write code here and print output
  
    // rows = n, cols = m;
    for (let c = 0; c < m; c++) {
      for (let r = 0; r < n; r++) {
        process.stdout.write(mat[r][c] + " ");
      }
      console.log()
    }
  }

  const m = 3,
  n = 3;
const mat = [
  [7, 2, 3],
  [2, 3, 4],
  [5, 6, 1],
];

// o/p :
// 7 2 5 
// 2 3 6 
// 3 4 1 
printMatrixColumnwise(mat, n, m) 