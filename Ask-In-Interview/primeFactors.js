// Prime Factors
// https://course.acciojob.com/idle?question=69d213e1-ed7c-4b06-8497-d48b83a72e07
function primeFactors(n) {
    // write your code here
      const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  /* Do not change the code below  */
  
  const rl = require("readline");
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", function (line1) {
    const primeFactorsArray = primeFactors(parseInt(line1));
    let output = "";
    for (let i = 0; i < primeFactorsArray.length; i++) {
      output = output + primeFactorsArray[i] + " ";
    }
    console.log(output);
    reader.close();
  });
  