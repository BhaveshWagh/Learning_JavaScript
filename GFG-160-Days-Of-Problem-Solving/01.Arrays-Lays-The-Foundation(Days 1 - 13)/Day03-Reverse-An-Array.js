/* 
* Question : 
Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = {1, 4, 3, 2, 6, 5}
Output: {5, 6, 2, 3, 4, 1}
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

Input: arr[] = {4, 5, 1, 2}
Output: {2, 1, 5, 4}
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.
 */

// [Expected Approach - 1] Using Two Pointers - O(n) Time and O(1) Space
/*
* The idea is to maintain two pointers: left and right, such that left points at the beginning of the array and right points to the end of the array.

While left pointer is less than the right pointer, swap the elements at these two positions. After each swap, increment the left pointer and decrement the right pointer to move towards the center of array. This will swap all the elements in the first half with their corresponding element in the second half.

*/

// Function to reverse the array.
function reverseArray(arr) {
  // your code here
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap the elements at left and right position

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Another way of SWAP

    // [arr[start],arr[end]] = [arr[end], arr[start]]

    start++;
    end--;
  }
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);
console.log(arr.join(" "));
