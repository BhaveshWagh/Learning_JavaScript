// Alternate Manner Matrix Traversal (print zigzag way)
// Link: https://course.acciojob.com/idle?question=191ba184-3c72-468a-83fe-5100d558f7eb

function printElementsAlternately(mat, m, n) {
    // smallArr
    for (let r = 0; r < m; r++) {
      if (r % 2 == 0) {
        for (let c = 0; c < n; c++) {
          process.stdout.write(mat[r][c] + " ")
        }
      }
      else{
          for(let c = n - 1; c >= 0; c--){
              process.stdout.write(mat[r][c] + " ")
          }
      }
    }
  }
  
  const m = 3,
    n = 3;
  const mat = [
    [7, 2, 3],
    [2, 3, 4],
    [5, 6, 1],
  ];
  
  printElementsAlternately(mat, m, n);
  