// // Sum of Two Medium Level score : 40
// // https://course.acciojob.com/idle?question=dea47a42-973b-44c4-a005-b721f8fe7cbf
// function SumofTwo(N, Target, myArr) {
//     // do not console.log here
//     // complete your code
//     for(let i = 0; i < N; i++ ){
//         let sum = 0;
//         for(let j = 1; j < N; j++){
//             sum = myArr[i] + myArr[j]
//             if(sum == Target){
//                 i = i + 1
//                 j = j + 1
//                 // console.log(i, j)
//                 return `${i} ${j}`
//             }
//         }
//     }
//   }
  
  
//   /*Do not change the code below */
//   var readline = require("readline").createInterface(process.stdin);
  
//   let inputArr = [];
//   var lineNumber = -1;
//   var inputSize;
//   let x = 0;
//   let K;
//   //multipleline input from User
//   readline.on("line", readInputs);
  
//   function readInputs(line) {
//     inputArr.push(line);
  
//     lineNumber++;
  
//     if (lineNumber === 0) {
//       [size, K] = inputArr[0].split(" ").map((x) => +x);
//       ///console.log(size,K);
//       // cool=false;
//     } else if (lineNumber < size) {
//       //lineNumber--;
//     }
  
//     //Exit Condition
//     if (lineNumber == 1) {
//       logic("s");
//       readline.close();
//     }
//   }
  
//   function logic(input) {
//     const myArr = inputArr[1].split(" ").map((x) => +x);
//     console.log(SumofTwo(size, K, myArr));
//   }
  
  

function SumofTwo(N, Target, myArr) {
    let map = new Map(); // Map to store element-index pairs

    for (let i = 0; i < N; i++) {
        let complement = Target - myArr[i]; // Calculate the complement for the current element

        // Check if the complement exists in the map
        if (map.has(complement)) {
            // If yes, return the indices of the two elements
            return `${map.get(complement) + 1} ${i + 1}`; // Adding 1 to indices to make them 1-indexed
        }

        // Add the current element and its index to the map
        if (!map.has(myArr[i])) {
            map.set(myArr[i], i);
        }
    }

    // If no solution is found, return an error message
    return 'No solution found';
}

/*Do not change the code below */
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
let x = 0;
let K;
//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);

    lineNumber++;

    if (lineNumber === 0) {
        [size, K] = inputArr[0].split(" ").map((x) => +x);
    }

    //Exit Condition
    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    const myArr = inputArr[1].split(" ").map((x) => +x);
    console.log(SumofTwo(size, K, myArr));
}
