// Find Number of Digits
// https://course.acciojob.com/idle?question=2b98dab6-8c91-4f4d-8bb7-829fc1155a26
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numOfDigi(n, count = 0) {
  //Write code here

  if (n === 0) {
    return count;
  }
  return numOfDigi(Math.floor(n / 10), count + 1);
}

readline.question("", (n) => {
  const result = numOfDigi(parseInt(n));
  console.log(result);
  readline.close();
});
