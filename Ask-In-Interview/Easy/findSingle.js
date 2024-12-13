function findSingle(arr) {
  // your code here
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return arr[i];
    }
  }
  return -1;
}

function findSingleOptimized(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num; // XOR all numbers
  }

  return result; // The remaining number is the unique one
}
const arr = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingleOptimized(arr)); // Output: 1
