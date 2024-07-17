// Space seperated words
// https://course.acciojob.com/idle?question=57d0aea8-358e-4b71-84f2-4ade253d2fe8
function numOfWords(line) {
    // write code here
    // return the output , do not use console.log here
      const word = line.trim().split(' ')
      return word.length
  }
  
  
  const rl = require("readline");
  
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  reader.on("line", (line) => {
    console.log(numOfWords(line));
  });
  