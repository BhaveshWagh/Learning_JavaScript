// Maximum Sum Subarray
// https://course.acciojob.com/idle?question=8bff3159-40be-4f88-92f0-5c844894b12e

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
 
  
    let N =parseInt(inputArr[0]);

    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
 
  
    console.log(maxSubArraySum(Arr,N));
  
}

function maxSubArraySum(arr) {
 let maxSum = arr[0]; 
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
   
}

// Its not optimal solution
// function getSubArray(arr, n) {
//     let maxSum = 0;
//     for (let start = 0; start < n; start++) {
//       let sum = 0;
//       let subStr = "";
//       for (let end = start; end < n - 1; end++) {
//         sum += arr[end];
//         subStr += arr[end];
  
//         maxSum = Math.max(sum, maxSum);
//       }
//     }
//     // console.log(maxSum);
//     return maxSum
//   }
//   // n = 5;
//   // arr = [1, 2, -1, 4];
//   let n = 5;
//   let arr = [2, 3, 1, -1, 0];
//   getSubArray(arr, n);
  