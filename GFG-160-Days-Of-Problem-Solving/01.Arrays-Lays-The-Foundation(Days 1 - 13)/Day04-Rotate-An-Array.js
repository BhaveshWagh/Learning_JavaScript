// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.
/*
Examples:

Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}

Input: arr[] = {1, 2, 3}, d = 4
Output: {2, 3, 1}
Explanation: The array is rotated as follows:

After first left rotation, arr[] = {2, 3, 1}
After second left rotation, arr[] = {3, 1, 2}
After third left rotation, arr[] = {1, 2, 3}
After fourth left rotation, arr[] = {2, 3, 1}

*/

// [Naive Approach] Rotate one by one - O(n * d) Time and O(1) Space
// In each iteration, shift the elements by one position to the left in a circular fashion (the first element becomes the last). Perform this operation d times to rotate the elements to the left by d positions.

/*
// JavaScript Program to left rotate the array by d positions
// by rotating one element at a time

// Function to left rotate array by d positions
function rotateArr(arr, d) {
    let n = arr.length;
  
    // Repeat the rotation d times
    for (let i = 0; i < d; i++) {
      
        // Left rotate the array by one position
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;

rotateArr(arr, d);

console.log(arr.join(" "));
*/

/*

[Better Approach] Using Temporary Array - O(n) Time and O(n) Space
This problem can be solved using the below idea:

The idea is to use a temporary array of size n, where n is the length of the original array. If we left rotate the array by d positions, the last n - d elements will be at the front and the first d elements will be at the end.

Copy the last (n - d) elements of original array into the first n - d positions of temporary array.
Then copy the first d elements of the original array to the end of temporary array.
Finally, copy all the elements of temporary array back into the original array.

*/

function rotateArr(arr, d) {
  let n = arr.length;

  // handle case when d > n;
  d %= n;

  // Storing rotated version of array
  let temp = new Array(n);

  // Copy last n - d elemenets to the front of temp;
  for (let i = 0; i < n - d; i++) {
    temp[i] = arr[d + i];
  }
  // Copy the first d elements to the back of temp
  for (let i = 0; i < d; i++) {
    temp[n - d + i] = arr[i];
  }

  // copy the elements of temp in arr
  // to get the final rotated array;
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArr(arr, d);

// Print the rotated array
console.log(arr.join(" "));
