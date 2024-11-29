function getSecondLargest(arr) {
  // Code Here
  let n = arr.length;
  arr.sort((a, b) => a - b);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== arr[n - 1]) {
      return arr[i];
    }
  }
  return -1;
}
arr = [12, 35, 1, 10, 34];
arr1 = [12, 34, 1, 10, 34];
console.log(getSecondLargest(arr));
console.log(getSecondLargest(arr1));
