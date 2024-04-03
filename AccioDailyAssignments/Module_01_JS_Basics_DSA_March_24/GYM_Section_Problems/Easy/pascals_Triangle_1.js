// Pascal's Triangle
// https://course.acciojob.com/idle?question=a48120ce-3cf5-4ea3-bbf1-f8f1deeeaf96

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    let triangle = pascalTriangle(parseInt(n));
    for (let i = 0; i < triangle.length; i++) {
      console.log(triangle[i].join(' '));
    }
    readline.close();
  });
  
  function pascalTriangle(numRows) {
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
    
      return result;
  }