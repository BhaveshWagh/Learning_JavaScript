// Frequency of digit
// https://course.acciojob.com/idle?question=3eeffa45-0717-4677-8aaf-daa2ef879794
function countDigitFrequency(n, d) {
    const strN = n.toString();
    const strD = d.toString();
    
    let frequency = 0;

    // Iterate through each character in the string representation of n
    for (let char of strN) {
        if (char === strD) {
            frequency++;
        }
    }

    return frequency;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber ==  1) {
    logic("s");
    readline.close();
  }
}



function logic(input) {
    
    let num=(inputArr[0]);
	let dig=parseInt(inputArr[1]);
  
    console.log(countDigitFrequency(num, dig));
    
}
