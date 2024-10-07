function rowSum(mat) {
  const result = [];

  for (let row = 0; row < mat.length; row++) {
    let sum = BigInt(0); // Initialize sum as BigInt

    for (let col = 0; col < mat[row].length; col++) {
      sum += BigInt(mat[row][col]); // Convert each element to BigInt and add to sum
    }

    result.push(sum); // Push the sum of the current row
  }

  return result;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rowSum(mat);
