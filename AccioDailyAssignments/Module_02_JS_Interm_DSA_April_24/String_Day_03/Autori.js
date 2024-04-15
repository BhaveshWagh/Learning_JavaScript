// Autori
// https://course.acciojob.com/idle?question=5f129c6b-4ef9-461a-b716-60316168e12f
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function autori(str) {
    // Your code here
       str = str.split("-");
    // console.log(str)
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
      newstr += str[i][0];
    }
    return newstr;
  }
  
  readline.question('', str => {
    let result = autori(str);
    console.log(result);
    readline.close();
  });