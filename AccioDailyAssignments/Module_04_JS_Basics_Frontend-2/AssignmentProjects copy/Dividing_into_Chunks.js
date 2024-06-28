// !! first you have to give it a try, then try to understand this code and once you understand then try to write logic without looking to the solution. !!

// Dividing into Chunks of Maximum Sum N
// https://course.acciojob.com/open-web-editor?question=c2fe534a-e405-494a-afd4-56c98851e090
// https://chatgpt.com/c/06e15662-3eea-4d30-9d9e-1ac9b67b8534
// const arr = [1, 2, 3, 4, 1, 0, 2, 2];

// const divide = (arr, n) => {
//   // Write your code here let result = [];

// };

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));

const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Don't forget to add the last subarray if it's not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
