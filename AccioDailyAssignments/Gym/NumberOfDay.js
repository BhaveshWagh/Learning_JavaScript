// Number of days
// https://course.acciojob.com/idle?question=5d72d915-1e0a-48f9-a537-29a99f6e0cb1
function NumberofDays(m) {
  //Your code here
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Since months are 1-indexed in the problem, we return the (M-1)th element from the array
  return daysInMonth[m - 1];
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  //const [a, b,c] = line.split(" ")
  const m = parseInt(line);

  console.log(NumberofDays(m));
});
