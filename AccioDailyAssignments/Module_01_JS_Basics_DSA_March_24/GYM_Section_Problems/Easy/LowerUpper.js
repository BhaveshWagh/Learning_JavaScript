// Lower Upper
// https://course.acciojob.com/idle?question=db0d2d11-15bb-47e7-9315-fd7c67c2bbb4
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function lowerUpper(ch) {
    // Write your code here
    let upperLower = '';
      if(ch > 'A' && ch < 'Z'){
          upperLower = 'U';
      }
      else if(ch > 'a' && ch < 'z'){
        upperLower = 'L'
      }
      return upperLower
  }
  
  readline.question('', (ch) => {
    console.log(lowerUpper(ch));
    readline.close();
  });