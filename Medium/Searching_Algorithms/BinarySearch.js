// Binary Search is a searching technique which works on the Divide and Conquer approach.
// It is used to search for any element in a sorted array.

// BASE CONDITION:
// Make sure the array is sorted if not then sort first then use Divide and Conquer approach.
// If starting index is greater than ending index return false.
// Compute the middle index.
// Compare the middle element with number x. If equal return true.
// If greater, call the same function with ending index = middle-1 and repeat step 1.
// If smaller, call the same function with starting index = middle+1 and repeat step 1.

function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
 
  while (end >= start) {
    // mid = start + Math.floor((end - start) / 2);
    mid = Math.floor(start + end)/2 
    console.log("mid",arr[mid],mid)
    // If the element is present at the middle
    // itself
    if (arr[mid] == x) 
    return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) {
    end = mid - 1;
    console.log("end",end)}
    // Else the element can only be present
    // in right subarray
    else {

      start = mid + 1;
      console.log("start",start)
    }
  }

  // We reach here when element is not
  // present in array
  return -1;
}
var arr = [1, 42, 22, 3, 43, 123];
console.log(arr.sort((a,b)=> a - b))
console.log(binarySearch(arr, 123))
// console.log("**",arr)
// console.log(binarySearch(arr, 2))
// console.log("*",arr)

// arr.sort()
// console.log("*",arr)

// sorted = arr.toSorted((a, b) => a - b)
// var arr = [10, 12, 4,54, 3, -19];

// arr.sort()


// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]


