// String Sorting
// https://course.acciojob.com/idle?question=fc51ad78-3c34-4b42-9dd0-04c8d25ac0be
function sortString(str){
    // bubble sort techinque is used
    let n = str.length;
    for(let i = 0; i < str.length - 1; i++){
        for(let j = 0; j < str.length - 1; j++){
            if(str[j] > str[j + 1]){
                // if condition true: swap it
                let temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;
            }
        }
    }
    return str
    // return str.sort()
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

  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let str=JSON.parse(inputArr[0].trim());
  console.log(sortString(str).join(" ").trim())
}
