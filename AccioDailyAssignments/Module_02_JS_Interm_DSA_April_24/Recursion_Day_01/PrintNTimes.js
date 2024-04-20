// Print n times
// https://course.acciojob.com/idle?question=85ea37ff-4aa2-4b45-ad88-ce8c425f040a
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printWord(N) {
  // Write your code here
    if (N === 0) {
    return;
  }
  console.log("AccioSchool");
  printWord(N - 1);
}

rl.on('line', (N) => {
  printWord(parseInt(N));
  rl.close();
});