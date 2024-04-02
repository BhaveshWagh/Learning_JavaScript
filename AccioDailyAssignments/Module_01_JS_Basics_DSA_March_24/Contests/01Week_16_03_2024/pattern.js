// input n = 5
// output
/**
 * 1
 * 2 3
 * 3 4 5
 * 4 5 6 7
 * 5 6 7 8 9
 */

function pattern(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        process.stdout.write(i + j + " ");
      }
      console.log();
    }
  }
  
  pattern(5);