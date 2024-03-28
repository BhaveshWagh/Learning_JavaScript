const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function zeroSubarray(arr) {
    //Write your code here
      const n = arr.length;
    let isFound = false; // I did not find any subarr with 0 sum
  
    for (let start = 0; start < n; start++) {
      let sum = 0;
      for (let end = start; end < n; end++) {
        sum += arr[end];
        // at every point sum => sum of arr[start....end]
        if (sum == 0) {
          console.log(`Subarray found from Index ${start} to ${end}`);
          isFound = true;
        }
      }
    }
  
    if (isFound == false) {
      console.log(-1);
    }
  }
  
  readline.question('', n => {
    readline.question('', arr => {
      zeroSubarray(arr.split(' ').map(Number));
      readline.close();
    });
  });