// Shuffle String
// https://course.acciojob.com/idle?question=1ec280bc-3a7f-41ec-b16b-a4a6dda28c4e

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function shuffleString(indices,str) {
    // Write your code here and print output in this function
    const arr = new Array(indices.length).fill("");
    for (let i = 0; i < str.length; i++) {
      const pos = indices[i];
      arr[pos] = str[i];
    }
  
        console.log(arr.join(""));
  }
  
  readline.question('', n => {
    readline.question('', str => {
      readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        shuffleString(arr, str);
        readline.close();
      });
    });
  });