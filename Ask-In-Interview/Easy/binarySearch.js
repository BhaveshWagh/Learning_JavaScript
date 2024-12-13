function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Find the middle index
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Target found, return the index
    } else if (arr[mid] < target) {
      low = mid + 1; // If target is greater, search the right half
    } else {
      high = mid - 1; // If target is smaller, search the left half
    }
  }

  return -1; // Target not found
}

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortedArray = Array.sort((a, b) => a - b);
const targetElement = 7;

const result = binarySearch(sortedArray, targetElement);
result !== -1
  ? console.log(`Element ${targetElement} found at index ${result}.`)
  : console.log(`Element ${targetElement} not found in the array.`);
console.log(result);
