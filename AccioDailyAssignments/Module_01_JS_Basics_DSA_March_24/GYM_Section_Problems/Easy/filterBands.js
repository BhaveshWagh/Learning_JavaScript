function filterBands(arr, genre) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].genre == genre){
        newArr.push(arr[i])
      }
    }
   return newArr;
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
    let arr = JSON.parse(inputArr[0]);
    let genre = inputArr[1];
    console.log(JSON.stringify(filterBands(arr, genre)));
  }
  