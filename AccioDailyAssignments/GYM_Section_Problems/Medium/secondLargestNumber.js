// Function to find the second largest element in an array
function findSecondLargest(arr) {
    arr.sort((a,b) => b - a)
    return arr[1]
   
   }
   
   // Take input from the user
   const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
   });
   
   readline.question('', input => {
     const arr = input.split(' ').map(Number);
     const secondLargest = findSecondLargest(arr);
     console.log(secondLargest);
     readline.close();
   });
   