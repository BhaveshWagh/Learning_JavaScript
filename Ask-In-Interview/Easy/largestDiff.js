// https://bigfrontend.dev/problem/Find-the-largest-difference

/** 
 * 
 * Given an array of numbers, pick any two numbers a and b, we could get the difference by Math.abs(a - b).

Can you write a function to get the largest difference?

*/

function largestDiff(arr) {
  // your code here
  let n = arr.length;

  if (n < 2) return 0;

  let maxDiff = 0;
  let minVal = arr[0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let diff = arr[i] - arr[j];
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

console.log(largestDiff([1]));
// 0

console.log(largestDiff([-1, 2, 3, 10, 9]));
// 11,  obviously Math.abs(-1 - 10) is the largest

console.log(largestDiff([]));
// 0
