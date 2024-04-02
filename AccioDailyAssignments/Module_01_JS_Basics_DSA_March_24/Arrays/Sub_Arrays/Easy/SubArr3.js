// Subarray Problem 3
// https://course.acciojob.com/idle?question=0298655b-b264-421a-906d-32443ebe3e55
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function largestAltitude(gain) {
  //Write your code here
  let altitude = 0;
  let largestAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    // process.stdout.write(altitude + " ")
    largestAltitude = Math.max(altitude, largestAltitude);
  }
  return largestAltitude;
}

readline.question("", (n) => {
  readline.question("", (gain) => {
    gain = gain.split(" ").map(Number);
    let maxaltitude = largestAltitude(gain);
    console.log(maxaltitude);
    readline.close();
  });
});
