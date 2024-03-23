var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 0) {
   
   letter=inputArr[0];
   
  }
  
  if(lineNumber==0)
  {logic("s");
  readline.close();}
}

function logic(input) {
 

    let w = inputArr[0];

 (conditionalProblem(w));
  }


function conditionalProblem(letter) {
    switch(letter){
        case 'A':
            console.log("I am the first letter");
            break;
        case 'B':
            console.log("I am the second letter");
            break;
        case 'C':
            console.log("I am the third letter");
            break;
        case 'D':
            console.log("I am the fourth letter");
            break;
        case 'E':
            console.log("I am the fifth letter");
            break;
        default:
            console.log("I don't belong here")
    }

}
