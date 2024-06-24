// Basic Calculator
// https://course.acciojob.com/idle?question=68aebc2c-6fd5-4bb6-b5e4-04b9131e6c52
function BasicCalc(A,B,op) {
    let result;
     switch (op) {
         case '+':
             result = A + B;
             break;
         case '-':
             result = A - B;
             break;
         case '*':
             result = A * B;
             break;
         case '/':
             result = Math.floor(A / B); // Integer division
             break;
         default:
             throw new Error('Invalid operator');
     }
     return result;
 }
   
 var readline = require("readline").createInterface(process.stdin);
 
 let inputArr = [];
 var lineNumber = -1;
 
 readline.on("line", readInputs);
 
 function readInputs(line) {
   inputArr.push(line);
   lineNumber++;
   if (lineNumber == 0) {
     op=inputArr[0];
   }
   
   if (lineNumber == 1) {
     logic("s");
     readline.close();
   }
 }
 
 function logic(input) {
  
 
     let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
     let A=Arr[0];
     let B=Arr[1];
     console.log(BasicCalc(A,B,op));
   }
 
 
 
 