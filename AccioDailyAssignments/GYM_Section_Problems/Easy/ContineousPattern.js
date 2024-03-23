// Print Continuous Character Pattern
// Given an integer n that denotes the number of rows to be printed, print the pattern in which each row starts with its corresponding alphabet and has a length equal to the row number. (See the examples for a better understanding).

// Note: You can take the alphabet to be cyclic. On reaching Z, you will cycle back to A, then B, and so on.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (n) => {
  const numberOfRows = parseInt(n);

  // Function to get the cyclic character based on index
  function getCyclicChar(index) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[index % alphabet.length];
  }

  // Print the continuous character pattern
  for (let row = 0; row < numberOfRows; row++) {
    let pattern = '';
    for (let col = 0; col <= row; col++) {
      pattern += getCyclicChar(row + col);
    }
    console.log(pattern);
  }

  rl.close();
});
