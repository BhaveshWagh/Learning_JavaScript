// SubArray problem 2
// https://course.acciojob.com/idle?question=03f6d279-0f3c-4f43-b6b3-29e6077d599d
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function solve(arr, n) {
    // Write your code here
       let count = 0;
  
      for (let i = 0; i <= arr.length - 4; i++) {
          if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2] && arr[i + 2] < arr[i + 3]) {
              count++;
          }
      }
  
      console.log(count)
  }
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      solve(arr, parseInt(n));
      readline.close();
    });
  });

// inputs : 
// 12
// 8 6 3 4 5 9 12 7 20 22 31 38
// // Rough Work
// // const readline = require("readline").createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });



// function solve(arr, n) {
//     // Write your code here
//     // for (let i = 0; i <= arr.length - n; i++) {
//     //   for (let j = i; j < i + n; j++) {
//     //     // process.stdout.write(j+" ")
//     //    process.stdout.write(arr[j] + " ")
      
//     //   }
//     //   console.log()
//     // }
//     let count = 0;
//       for (let i = 0; i <= arr.length - 4; i++) {
//           if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2] && arr[i + 2] < arr[i + 3]) {
//               count++;
//           }
//       }
  
//       return count;
//   }
//   const n = 4
//   const arr = [8, 6, 3, 4, 5, 9, 12, 7, 20, 22, 31, 38]
//   console.log(solve(arr,n))
//   // readline.question("", (n) => {
//   //   readline.question("", (arr) => {
//   //     arr = arr.split(" ").map(Number);
//   //     solve(arr, parseInt(n));
//   //     readline.close();
//   //   });
//   // });
  