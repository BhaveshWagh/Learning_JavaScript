const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', nums => {
      const arr = nums.split(' ').map(Number);
      const result = maxElement(arr);
      console.log(result);
      readline.close();
    });
  });
  
  function maxElement(arr,currIdx = 0, maxNum = -Infinity) {
    // Write your code here
      // not submitted
      if(currIdx >= arr.length){
          return maxNum
      }
      if(maxNum < arr[currIdx]){
          maxNum = arr[currIdx]
      }
      return maxElement(arr,currIdx + 1, maxNum)
  }