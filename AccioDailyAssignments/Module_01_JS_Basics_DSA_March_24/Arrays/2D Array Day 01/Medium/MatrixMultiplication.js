// Matrix Multiplication
// Link: https://course.acciojob.com/idle?question=da3dfaa3-541f-4b9b-a202-30b4fb01a835

function printMultiplication(matrix1, matrix2, n) {
    // Write your code here
    const A = matrix1;
    const B = matrix2;
    const rowsA = n;
    const colsA = n;
    const rowsB = n;
    const colsB = n;
  
    // 1. check whether you can multiply
    if (colsA != rowsB) {
      return;
    }
  
    // 2. now you can multiply hence initialize a result matrix
    const C = [];
    const rowsC = rowsA;
    const colsC = colsB;
    for (let r = 0; r < rowsC; r++) {
      const smallArr = [];
      for (let c = 0; c < colsC; c++) {
        smallArr.push(0);
      }
      C.push(smallArr);
    }
  
    // 3. multiplication phase (fill each empty box)
    for (let r = 0; r < rowsC; r++) {
      for (let c = 0; c < colsC; c++) {
        // C[r][c] = sum(A[r][k] * B[k][c]);
        // k < rowsB (because colsA == rowsB)
        for (let k = 0; k < colsA; k++) {
          C[r][c] += A[r][k] * B[k][c];
        }
      }
    }
  
    // 4. print the result
    for (let r = 0; r < rowsC; r++) {
      for (let c = 0; c < colsC; c++) {
        process.stdout.write(C[r][c] + " ");
      }
      console.log();
    }
  }

  