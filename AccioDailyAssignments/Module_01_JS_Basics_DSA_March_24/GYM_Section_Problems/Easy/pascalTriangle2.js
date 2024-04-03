// Pascal's Triangle II
// https://course.acciojob.com/idle?question=b6e58bfc-b800-41d2-b19e-0529ebf126c5
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (n) => {
    let triangle = pascalTriangleRow(parseInt(n));
    console.log(triangle.join(" "));
    readline.close();
  });
  
  function pascalTriangleRow(numRows) {
    // write code here
    let result = [];
  
    for (let i = 0; i < numRows; i++) {
      result[i] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          result[i][j] = 1;
        } else {
          result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
      }
    }
    return result[numRows - 1];
  }
  