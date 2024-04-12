// Toggle Characters
// https://course.acciojob.com/idle?question=4ed3641c-3947-40e1-a296-114067186afe
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', str => {
      toggleCase(n, str);
      readline.close();
    });
  });
  
  function toggleCase(n, str) {
    // your code here
      let newStr = ""
      for (let ch of str) {
          if(ch === ch.toUpperCase()){
              newStr += ch.toLowerCase()
          }
          else{
              newStr += ch.toUpperCase()
          }
      }
      console.log(newStr)
  }