// String Sum
// https://course.acciojob.com/idle?question=6f187f0f-b5dc-43b5-982a-2658b6d75297

function StringSum(str){
    //return string Sum
      let digits = str.split('');
      
      // Initialize the sum to 0
      let totalSum = 0;
      
      // Iterate through each character in the array
      for (let i = 0; i < digits.length; i++) {
          // Convert the character to a number and add it to the totalSum
          totalSum += parseInt(digits[i], 10);
      }
      
      // Return the total sum
      return totalSum;
  }
  
  
  
  const rl = require('readline')
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  reader.on('line',(line)=>{
    let str = line;
    str=str.trim();
    console.log(StringSum(str));
  })
  
  