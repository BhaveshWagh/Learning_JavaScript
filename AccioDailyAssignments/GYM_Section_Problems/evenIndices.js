function evenIndices(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        process.stdout.write(arr[i] + " ")
      }
    }
  }
  
  var readline = require("readline").createInterface(process.stdin);
  
  let inputArr = [];
  var lineNumber = -1;
  
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
  
    if (lineNumber == 1) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  
    evenIndices(Arr);
  }
  