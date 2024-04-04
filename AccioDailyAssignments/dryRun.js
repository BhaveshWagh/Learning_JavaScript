function diagonalTraversal(mat, n) {
  // your code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r + 1; c++) {
        let temp = mat[r][c]
        mat[r][c] = mat[c][r]
        mat[c][r] = temp
    }
  }
  console.log(mat)
}

diagonalTraversal(
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  3
);
