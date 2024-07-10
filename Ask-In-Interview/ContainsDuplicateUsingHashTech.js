// Contains Duplicate Hashing
// https://course.acciojob.com/idle?question=00744049-8dcb-4429-8ae0-f3607545f1a5
const containsDuplicate = (Arr, n) => {
  //return true or false
  let seenElements = {};

  for (let num of Arr) {
    if (seenElements[num]) {
      return true;
    }
    seenElements[num] = true;
  }
  return false;
  // ! second approach using set
  // let seenElements = new Set();

    // Iterate through the array
    // for (let num of arr) {
    //     if (seenElements.has(num)) {
    //         return true;
    //     }
        // seenElements.add(num);
    // }
    // return false;
};



// Driver code
/*Do not change the code below */

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;
//   // if (lineNumber == 0) {
//   //   size = parseInt(inputArr[0]);
//   // }
//   //Exit Condition
//   if (lineNumber == 1) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   let n = parseInt(inputArr[0].trim());
//   let Arr = inputArr[1]
//     .trim()
//     .split(" ")
//     .map((x) => parseInt(x));

//   console.log(containsDuplicate(Arr, n));
// }
