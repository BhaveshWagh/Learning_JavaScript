// JS callbacks
// https://course.acciojob.com/idle?question=e026f288-e6c7-4d28-8948-da8cba3667c5
function callThisFnBack(number, fn) {
    // return the output using return keyword
    // do not console.log it
      return fn(number)
  }
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  
  rl.on("line", function (line) {
    const args = line.split(" ");
    const num = parseInt(args[0], 10);
    const op = args[1];
  
    switch (op) {
      case "+":
        console.log(
          callThisFnBack(num, (mun) => {
            return mun + mun;
          })
        );
        break;
      case "-":
        console.log(callThisFnBack(num, (mun) => mun - mun));
        break;
      case "*":
        console.log(callThisFnBack(num, (mun) => mun * mun));
        break;
  
      case "/":
        console.log(callThisFnBack(num, (mun) => mun / mun));
        break;
  
      default:
        break;
    }
  });
  
  
  