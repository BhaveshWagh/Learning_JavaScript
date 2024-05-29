function totalPrice(arr) {
    //Write your solution here
      let totalSum = 0;
        arr.map((item) => {
      totalSum += item.price;
    })
    return totalSum;
  }
  
  // Do not change the code below
  const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
  });
  let inputArr = [];
  let lineNumber = -1;
  readline.on("line", readInputs);
  function readInputs(line) {
      inputArr.push(line);
      lineNumber++;
  
      // Exit Condition
      if (lineNumber == 0) {
          logic();
          readline.close();
      }
  }
  function logic() {
      let str = JSON.parse(inputArr[0].trim().replace(/\\/g, ""));
      console.log(totalPrice(str));
  }