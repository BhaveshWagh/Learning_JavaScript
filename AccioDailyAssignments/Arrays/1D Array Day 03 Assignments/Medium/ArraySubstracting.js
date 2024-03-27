// Array Subtracting
// https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", function(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 3) {
    performSubtraction();
    readline.close();
  }
});

function performSubtraction() {
    let N = parseInt(inputArr[0]);
    let Arr1 = inputArr[1].split(" ").map(Number);
    let M = parseInt(inputArr[2]);
    let Arr2 = inputArr[3].split(" ").map(Number);
    let result = findSubtraction(Arr1, N, Arr2, M);
    result.forEach(element => console.log(element));
}

function findSubtraction(arr1, n1, arr2, n2) {
    // Check which array is larger
    console.log("line 29",n1,arr1,n2,arr2)

    let isNegative = false;
    if (n1 < n2 || (n1 === n2 && arr1.join('') < arr2.join(''))) {
        isNegative = true;
        [arr1, arr2] = [arr2, arr1]; // Swap arrays
        [n1, n2] = [n2, n1]; // Swap sizes
        console.log("line 36",n1,arr1,n2,arr2)


    }

    // Initialize variables
    let diffArray = [];
    let borrow = 0;
    let i = n1 - 1;
    let j = n2 - 1;

    // Subtract arrays digit by digit
    while (i >= 0) {
        console.log("line 49 borrow",borrow)

        let digit1 = arr1[i] || 0;
        let digit2 = j >= 0 ? arr2[j] : 0;
        console.log("line 51 dig1 & dig2", digit1,digit2)
        // Apply borrow if necessary
        digit1 -= borrow;
        console.log("line 54 digit1",digit1)
        borrow = 0;
        console.log("line 56 borrow",borrow)


        // Perform subtraction
        let diff = digit1 - digit2;
        console.log("line 63 diff", diff)
        // Handle borrowing
        if (diff < 0) {
            diff += 10;
            console.log("line67 diff+10",diff)
            borrow = 1;
        console.log("line 69 borrow",borrow)

        }

        // Add difference to result array
        diffArray.unshift(diff);
        console.log("line 75 unshift diff",diff)

        // Move to the next digit
        i--;
        j--;
        console.log("line 80 i--; j--", i, j)
    }

    // Remove leading zeros, if any
    while (diffArray.length > 1 && diffArray[0] === 0) {
        diffArray.shift();
        console.log("line 86 remove zeors",diffArray)
    }

    // Add negative sign if needed
    if (isNegative) {
        diffArray[0] = -diffArray[0];
        console.log("line 92 isNeg",  diffArray[0])
    }

    console.log(diffArray)
    return diffArray;
}

