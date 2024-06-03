// Replace element
// https://course.acciojob.com/idle?question=32bb4f1e-f35f-4600-80b4-efdca44ae1d9
// arr is the array of numbers, n is the number fo elements
function replaceArray(arr, n) {
    // write code here
    // do not console.log
    // return the new array
  const N = arr.length;
  
      // Handle edge case where N == 2 directly
      if (N === 2) {
          const firstLastProduct = arr[0] * arr[1]
          return [firstLastProduct, firstLastProduct]
      } 
  
      // Create a new array to store modified elements
      const result = new Array(N)
  
      // First element
      result[0] = arr[0] * arr[1] 
  
      // Middle elements
      for(let i = 1; i < N - 1; i++){
        result[i] = arr[i - 1] * arr[i + 1]
      }
  
      // Last element
      result[N - 1] = arr[N - 2] * arr[N - 1]
  
      return result;  
  
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
    if (lineNumber == 1) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    let n=parseInt(inputArr[0].trim());
    let Arr=inputArr[1].trim().split(" ").map(x=>parseInt(x));
    console.log(replaceArray(Arr, n).join(" ").trim());
  }
  