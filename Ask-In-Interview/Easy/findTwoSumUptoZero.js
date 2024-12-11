// src : https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0
/**
 * Given an array of integers, find two number that sums up to 0, return their indices.

There might be multiple pairs, any of them would do. If not found, return null

*/

function findTwo(arr) {
    // This is a brute-force approach with a time complexity of 𝑂(𝑛2).
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(findTwo([1, 2, 3, -1]));
console.log(findTwo([1, 2, 3, -1, -2, 0]));
console.log(findTwo([1, 2, 3, 4]));
