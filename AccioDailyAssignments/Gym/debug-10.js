// debugging 10
// https://course.acciojob.com/idle?question=63190ee8-3528-4c31-bbb8-5ccde087023a
function Factors(n) {
    // debug the code
      let ans = 0;
    
    for (let i = 1; i * i <= n; i++) {
      if (n % i == 0) {
        if (i * i == n) {
          ans += 1; // Count the factor only once if it's a perfect square
        } else {
          ans += 2; // Count both i and n/i as factors
        }
      }
    }
    
    return ans;
    
    //   let ans = 0
    // for (let i = 1; i <= n; i++) {
    //   if (n % i == 0) {
    
    //     if (parseInt(n / i, 10) == i) ans+=2;
     
    //     else ans += 1;
    //   }
    // }
    // return ans+1;
  }
  
  var readline = require("readline").createInterface(process.stdin);
  
  let inputArr = [];
  var lineNumber = -1;
  var inputSize;
  
  //multipleline input from User
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    // if (lineNumber == 0) {
    //   size = parseInt(inputArr[0]);
    // } else if (lineNumber < size) {
    // }
  
    //Exit Condition
    if (lineNumber == 0) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    const N = parseInt(inputArr[0]);
    console.log(Factors(N));
  }
  