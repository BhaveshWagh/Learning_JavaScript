// Power calculation
// https://course.acciojob.com/idle?question=80e462de-7fd5-4923-ad70-0a388d47c94d
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function xPowerN(x, n) {
    // Write your code here
      // Not submitted yet
       if(n === 0){
      return 1
    }console.log("called")
    return x * xPowerN(x,n-1)
  }
  
  
  readline.question('', (line) => {
    const [x, n] = line.split(' ').map(Number);
    console.log(xPowerN(x, n));
    readline.close();
  });