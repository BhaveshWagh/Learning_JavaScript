/**
 * Question : 
 * Move all zeros to end of array
Last Updated : 15 Nov, 2024
Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.


Input: arr[] = [10, 20, 30]
Output: arr[] = [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: arr[] = [0, 0]
Explanation: No change in array as there are all 0s.
 */

/**[
 * Naive Approach] Using Temporary Array – O(n) Time and O(n) Space
 * The idea is to create a temporary array of same size as the input array arr[].
 * First, copy all non-zero elements from arr[] to the temporary array.
 * Then, fill all the remaining positions in temporary array with 0.
 * Finally, copy all the elements from temporary array to arr[]. */

// Time complexity: O(n), as we are traversing the array three times.
// Auxiliary Space : O(n), as we are using a temp[] array to move all the zeros.

// function pushZerosToEnd(arr) {
//   //code
//   const n = arr.length;
//   const temp = new Array(n);

//   let j = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== 0) {
//       temp[j++] = arr[i];
//       // console.log(temp)
//     }
//   }
//   // console.log(j)
//   while (j < n) {
//     temp[j++] = 0;
//     // console.log(temp)
//   }
//   // copy from temp[] to arr[]
//   for (let i = 0; i < n; i++) {
//     arr[i] = temp[i];
//   }
//   console.log(arr);
// }

// arr = [1, 2, 0, 4, 3, 0, 5, 0];
// arr = [10, 20, 30]
// arr = [0,0]

// ! EXPECTED APPROACH :   One Traversal – O(n) Time and O(1) Space

// Time Complexity: O(n), as we are traversing the array only once.
// Auxiliary Space: O(1)

/**
 * *The idea is similar to the previous approach where we took a pointer, say count to track where the next non-zero element should be placed. However, on encountering a non-zero element, instead of directly placing the non-zero element at arr[count], we will swap the non-zero element with arr[count]. This will ensure that if there is any zero present at arr[count], it is pushed towards the end of array and is not overwritten.
 */

function pushZerosToEnd(arr) {
  // Pointer to track the position for next non-zero element
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
}

arr = [3, 5, 0, 0, 4];
pushZerosToEnd(arr);
console.log(arr.join(" "));
