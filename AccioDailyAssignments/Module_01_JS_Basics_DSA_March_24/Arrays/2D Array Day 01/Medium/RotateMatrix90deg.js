
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let mat =[];
var lineNumber = -1;

readline.on("line", readInputs);

let n, m;

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 0) {
    n=inputArr[0].split(' ')[0];
	  m=inputArr[0].split(' ')[1];
  
     
  }
   
  else{
      let Arr = inputArr[lineNumber].split(' ').map((x) => x.trim()).filter((x) => x !== '');

       mat.push(Arr);
      
  }
  
  
  if (lineNumber ==  n) {
    logic("s");
    readline.close();
  }
}

function logic(input) {

  let rotated=rotateImage(mat);
  for(let i=0;i<mat.length;i++){
	  console.log(rotated[i].join(' '));
  }
}

function matrixTranspose(mat, n) {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c <= r; c++) {
        let temp = mat[r][c];
        mat[r][c] = mat[c][r];
        mat[c][r] = temp;
      }
    }
  
    return mat;
  }
  


function rotateImage(matrix) {
 
	// Write your code here

    const n = matrix.length
    matrixTranspose(mat,n)
    for(let r = 0; r < n; r++){
        matrix[r].reverse()
    }
    console.log(matrix)
    return matrix;

}