// Unique Characters
// https://course.acciojob.com/idle?question=eedc80e6-d75c-431b-a481-063d38c38003
function uniqueChars(str) {
    // write your code here
      let seen = new Set();
      let result = [];
  
      for (let char of str) {
          if (!seen.has(char)) {
              seen.add(char);
              result.push(char);
          }
      }
  
      return result.join('');
      
  }
  
  /* Do not change the code below  */
  
  const rl = require("readline");
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", function (line1) {
    console.log(uniqueChars(line1));
    reader.close();
  });
  