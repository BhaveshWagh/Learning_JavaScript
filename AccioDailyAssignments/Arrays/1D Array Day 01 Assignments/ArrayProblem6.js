const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (n) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      let ans = ArrayProblem6(n, arr);
      console.log(ans);
      readline.close();
    });
  });
  
  function ArrayProblem6(n, arr) {
    let evenIndices = [];
    let shortestDistance = Infinity;
  
    // Find indices of even positive integers and calculate shortest distance
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] % 2 === 0) {
        if (evenIndices.length > 0) {
          let distance = i - evenIndices[evenIndices.length - 1];
          shortestDistance = Math.min(shortestDistance, distance);
        }
        evenIndices.push(i);
      }
    }
  
    // If there are less than 2 even numbers, return -1
    if (evenIndices.length < 2) {
      return -1;
    }
    console.log(evenIndices)
  
    return shortestDistance;
  }
  