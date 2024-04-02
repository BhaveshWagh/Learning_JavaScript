// Maxima Minima
// Link: https://course.acciojob.com/idle?question=834a5e9e-9b0c-45db-b0e1-375bafb999ea

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMinRow(mat, r) {
  const cols = mat[0].length;
  let minEle = Infinity;
  for (let c = 0; c < cols; c++) {
    minEle = Math.min(minEle, mat[r][c]);
  }
  return minEle;
}

function findMaxCol(mat, c) {
    const rows = mat.length;
    let maxEle = -Infinity;
    for (let r = 0; r < rows; r++) {
      maxEle = Math.max(maxEle, mat[r][c]);
    }
    return maxEle;
  }

function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const minR = findMinRow(mat, r);
      const maxC = findMaxCol(mat, c);
      if (mat[r][c] == minR && mat[r][c] == maxC) {
        return mat[r][c];
      }
    }
  }
  return -1;
}

readline.question("", (n) => {
  let matrix = [];
  let count = 0;
  readline.on("line", (line) => {
    matrix.push(line.trim().split(" ").map(Number));
    count++;
    if (count == n) {
      let result = maximaMinima(matrix);
      console.log(result);
      readline.close();
    }
  });
});


// Optimal way
function maximaMinima(matrix) {
    //Write code here
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // 1. precomputation
    const minRow = [];
    for (let r = 0; r < rows; r++) {
      const val = findMinRow(matrix, r);
      minRow.push(val);
    }
  
    const maxCol = [];
    for (let c = 0; c < cols; c++) {
      const val = findMaxCol(matrix, c);
      maxCol.push(val);
    }
  
    // 2. problem solution, utilize the precomputed results
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const minR = minRow[r];
        const maxC = maxCol[c];
        if (matrix[r][c] == minR && matrix[r][c] == maxC) {
          return matrix[r][c];
        }
      }
    }
  
    return -1;
  }