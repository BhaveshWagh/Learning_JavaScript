// Hey!
// https://course.acciojob.com/idle?question=fa562213-5799-4908-b7c2-e3eaccc837a9

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function hey(str) {
    // Your code here
      let e = str.length - 2
        let out = "h"
         out += "e".repeat(e * 2)
         out += "y"
        return out
  }
  
  readline.question('', str => {
    let result = hey(str);
    console.log(result);
    readline.close();
  });