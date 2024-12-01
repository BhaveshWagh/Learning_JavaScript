/**
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

** Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.

Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.

Constraints:
        2 ≤ arr.size() ≤ 105
    1 ≤ arr[i] ≤ 105
    */
/**
 * [Naive Approach] Using Sorting – O(n*logn) Time and O(1) Space
The idea is to sort the array in non-decreasing order. Now, we know that the largest element will be at index n – 1. So, starting from index (n – 2), traverse the remaining array in reverse order. As soon as we encounter an element which is not equal to the largest element, return it as the second largest element in the array. If all the elements are equal to the largest element, return -1.
 */

// Time Complexity: O(n*logn), as sorting the array takes O(n*logn) time and traversing the array can take O(n) time in the worst case, so total time complexity = (n*logn + n) = O(n*logn).
// Auxiliary space: O(1), as no extra space is required.

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
