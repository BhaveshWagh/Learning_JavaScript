// generate binary number
// https://course.acciojob.com/idle?question=629643c9-674c-49b5-8228-bd3153c086ba
function generateBinaryNumbers(N) {
    // return an array of binary numbers
       let queue = [];
      let result = [];
  
      // Enqueue the first binary number
      queue.push("1");
  
      // Loop to generate binary numbers
      while (N-- > 0) {
          // Get the front of the queue
          let current = queue.shift();
  
          // Add it to the result
          result.push(current);
  
          // Generate the next numbers by appending "0" and "1"
          queue.push(current + "0");
          queue.push(current + "1");
      }
  
      return result;
  }
  
  // Test the function
  
  
  
  var readline = require("readline").createInterface(process.stdin);
  let inputArr = [];
  var lineNumber = -1;
  
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
   
    if (lineNumber ==  0) {
      logic("s");
      readline.close();
    }
  }
  
  
  
  function logic(input) {
      
      let word1=parseInt(inputArr[0]);
    
    
      console.log(generateBinaryNumbers(word1).join("\n"));
  }
  
  