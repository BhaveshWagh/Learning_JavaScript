// Problem 1: Find Unique Elements
// Write a function to return all unique elements in an array.

function findUnique(arr) {
  return [...new Set(arr)];
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]