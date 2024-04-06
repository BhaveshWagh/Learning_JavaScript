// Module 01 JS -> DSA (Basic) =>  04/04/2024 Points : 30 MEDIUM

function sumOddLengthSubArrays(arr) {
  let sumOddArr = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    let sum = 0;
    for (let j = i, length = 1; j < arr.length; j++, length++) {
      str += arr[j] + " ";
      sum += arr[j];
      if (length % 2 !== 0) {
        sumOddArr += sum;
        console.log(i, j, str, length, sum, sumOddArr);
      }
    }
  }
  console.log(sumOddArr);
}

// arr = [10, 20, 30, 40, 50];
arr = [1, 2, 4, 3, 5]; // Expected output : 58
sumOddLengthSubArrays(arr);
