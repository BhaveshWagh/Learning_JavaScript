const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (n) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      printRatios(arr);
      readline.close();
    });
  });
  
  function printRatios(arr) {
    // write code here
    let zeroCnt = 0;
    let posNumCnt = 0;
    let negNumCnt = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) posNumCnt++;
        else if (arr[i] < 0) negNumCnt++;
        else if (arr[i] == 0) zeroCnt++;
      }
  
      console.log("length", arr.length)
      console.log(zeroCnt,posNumCnt,negNumCnt)
  
    let posRatio = posNumCnt / arr.length;
    let negRatio = negNumCnt / arr.length;
    let zeroRatio = zeroCnt / arr.length;
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
  }
  