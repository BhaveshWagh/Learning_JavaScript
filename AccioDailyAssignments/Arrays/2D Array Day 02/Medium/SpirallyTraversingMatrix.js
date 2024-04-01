// Spirally traversing a matrix
// https://course.acciojob.com/idle?question=5f714d43-3f91-4c47-b41b-203207e63522

const { toASCII } = require("punycode");

// Spirally traversing a matrix
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let mat = [];
let n;
let m;
let lineNumber = 0;
function constructMatrix(a) {
  mat.push(a.split(" ").map(Number));
  n = mat[0][0];
  m = mat[0][1];
  lineNumber++;
  if (lineNumber === n + 1) {
    spirallyTraverse(mat.splice(1));
    readline.close();
  }
}
readline.on("line", constructMatrix);
function spirallyTraverse(mat) {
    // Write your code here
    const rows = mat.length;
    const cols = mat[0].length;
  
    let minR = 0;
    let maxR = rows - 1;
    let minC = 0;
    let maxC = cols - 1;
    let totalEle = rows * cols;
  
    while (totalEle > 0) {
      // 1. Top wall (minR, c = minC to maxC)
      for (let c = minC; c <= maxC && totalEle > 0; c++) {
        process.stdout.write(mat[minR][c] + " ");
        totalEle--;
      }
      minR++;
  
      // 2. Right wall (r = minR to maxR, maxC)
      for (let r = minR; r <= maxR && totalEle > 0; r++) {
        process.stdout.write(mat[r][maxC] + " ");
        totalEle--;
      }
      maxC--;
  
      // 3. Bottom wall (r = maxR, c = maxC to minC)
      for (let c = maxC; c >= minC && totalEle > 0; c--) {
        process.stdout.write(mat[maxR][c] + " ");
        totalEle--;
      }
      maxR--;
  
      // 4. Left wall (r = maxR to minR, minC)
      for (let r = maxR; r >= minR && totalEle > 0; r--) {
        process.stdout.write(mat[r][minC] + " ");
        totalEle--;
      }
      minC++;
    }
  }