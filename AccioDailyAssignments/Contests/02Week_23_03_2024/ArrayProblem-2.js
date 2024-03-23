/**
 * Array Problem 2
Write a program to count the elements in an array which are greater than 35.

Input Format:
First line contains n, the size of an array.

Next line contains n-spaced integers representing array arr.

Output Format:
Print the number of the elements present in the array which are greater than 35.

Example 1
Input

5
12 67 89 16 23
Output

2
Explanation

67 and 89 are greater than 35. Hence, the output is 2.

Example 2
Input

4
22 39 45 72
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      const arrNum = arr.split(' ').map(Number);
      const ans = ArrayProblem2(n, arrNum);
      console.log(ans);
      readline.close();
    });
  });
  
  function ArrayProblem2(n, arr) {
    // Write code here
     let count = 0;
      for(let i = 0; i < n; i++){
          if(arr[i] > 35){
              count += 1;
          }
      }
      return count
      
  }