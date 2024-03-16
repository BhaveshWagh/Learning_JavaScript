// Triplet Sum
/**
 * You are given two integers N and K, the task is to count the number of triplets (a, b, c) of positive integers not greater than ‘N’,
 *  such that 'a + b', 'b + c', and 'c + a' are all completely divisible by 'K'. Note that 'a', 'b' and 'c' may or may not be the same in a triplet.
Note (1, 2, 1) and (1, 1, 2) are treated as different triplets

Input Format
The first line of input contains two integers representing N and K.

Output Format
Return the total number of triplet pairs such that they are all divisible by K.

Example 1
Input => 3 4
Output: => 1
Explanation: We have just one pair of a,b and c i.e ( 2,2,2 respectively). So the ans is 1.

Example 2
Input => 4 5
Output: 0
Explanation: We dont have any pair of a,b and c. So the ans is 0.

Constraints
1 <= N,K <= 100
 */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const [N, K] = input.split(" ").map(Number);
  const ans = tripletPair(N, K);
  console.log(ans);
  readline.close();
});

function tripletPair(n, k) {
  //Write your code here
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        if ((a + b) % k === 0 && (b + c) % k === 0 && (c + a) % k === 0) {
          count += 1;
        }
      }
    }
  }
  return count;
}
