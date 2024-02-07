// Function to print the given pattern
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';

      // Create each line of the pattern
      for (let j = i; j <= i + n - 1; j++) {
        // Ensure the numbers wrap around
        let num = j > 5 ? j - 5 : j;
        line += num;
        console.log("inner loop",line)
      }

      // Print each line
      console.log(line);
    }
  }

  printPattern(5);



  // 12345
// 23451
// 34512
// 45123
// 51234

// let string = "";
// function numberSquare(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//       string += j;
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

// numberSquare(5);

//   // Call the function to print the pattern
//   printPattern(5);