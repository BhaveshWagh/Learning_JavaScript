// Even-Odd seperate sorting
// https://course.acciojob.com/idle?question=bd86372e-98fd-4c2d-b0ea-25a8e88c5a16

function sortEvenOdd(arr, arrSize) {
    // Separate odd and even numbers
    let odds = [];
    let evens = [];
    
    for (let i = 0; i < arrSize; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }

    // Sort odds in descending order and evens in ascending order
    odds.sort((a, b) => b - a); // Descending order
    evens.sort((a, b) => a - b); // Ascending order

    // Concatenate sorted odds and evens
    return odds.concat(evens);
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    // Exit Condition
    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let n = parseInt(inputArr[0].trim());
    let Arr = inputArr[1]
        .trim()
        .split(" ")
        .map((x) => parseInt(x));
    console.log(sortEvenOdd(Arr, n).join(" ").trim());
}
