// intersect
function intersect(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
     
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }

  }

  return result;
}

// Example 
const a1 = [1, 4, 8, 9, 11, 15, 17, 28, 41, 59];
const a2 = [4, 7, 11, 17, 19, 20, 23, 28, 37, 59, 81];

const intersectionResult = intersect(a1, a2);

console.log(intersectionResult); // Output: [4, 11, 17, 28, 59]
