// ****Unsolved problem
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let input = line.split(' ').map(Number);
  if(input.length === 2) {
    let r = input[0];
    let c = input[1];
    let matrix = [];
    let count = 0;
    rl.on('line', (line) => {
      matrix.push(line.split(' ').map(Number));
      count++;
      if(count === r) {
        let ans = spirallyTraverse(matrix, r, c);
        console.log(ans.join(' '));
        rl.close();
      }
    });
  }
});

function spirallyTraverse(mat, n, m) {
  // your code here 
   // Write your code here
  const rows = n;
  const cols = m;

  let minR = 0;
  let maxR = rows - 1;
  let minC = 0;
  let maxC = cols - 1;
  let totalEle = rows * cols;

  while (totalEle > 0) {
    //   1. Left wall (r = minR to maxR, c = minC)
    for (let r = minR; r <= maxR; r++) {
      process.stdout.write(mat[r][minC] + " ");
    }
    minC++;

    //   2. Bottom wall (r = maxR, c = minC to maxC)
    for (let c = minC; c <= maxC; c++) {
      process.stdout.write(mat[maxR][c] + " ");
    }
    maxR--;

    //   3. Right wall (r = maxR to minR, c = maxC)
    for (let r = maxR; r >= minR; r--) {
      process.stdout.write(mat[r][maxC] + " ");
    }
    maxC--;

    //   4. Top wall (r = minR, c = maxC to minC )
    for (let c = maxC; c >= minC; c--) {
      process.stdout.write(mat[minR][c] + " ");
    }
  }
}