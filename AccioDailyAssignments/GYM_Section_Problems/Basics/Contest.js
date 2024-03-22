/**
 *  Contest is held and a total of N participants took part in the contest. You are already given the scores of the participants in the form of an array (of size N).

The contestant who has a score greater than or equal to the score of the K-th Participant (where K<=N) will advance to the next round, as long as the contestant has a positive score.

Calculate the total number of participants who will advance to the next round.

Input
The first line of the input contains two integers N and K separated by a single space.

The second line contains N space-separated integers representing the array.

Output
Print the number of participants who advance to the next round.

Example 1
Input
8 5
10 9 8 7 7 7 5 5
Output
6
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (a) => {
  rl.on("line", (b) => {
    const [n, k] = a.split(" ").map(Number);
    const arr = b.split(" ").map(Number);
    printFindParticipants(arr, n, k);
    rl.close();
  });
});

function printFindParticipants(arr, n, k) {
  // Write your code here
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] >= arr[k-1]) {
        count += 1;
      }
    }
  }
  console.log(count);
}
