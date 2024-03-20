/**
Write a function named sumOfDigits that accepts an integer parameter and computes and returns the sum of all the digits of that number. For example, sumOfDigits(38015) returns 3+8+1+0+5 or 17. For negative numbers, return the same value as if the number were positive. For example, sumOfDigits(-72) returns 7+2 or 9.

Note: Because JavaScript integers are number types, dividing two integers which do not divide evenly returns the decimal value of the result instead of an integer (for example, 1 / 2 results in 0.5, not 0). Use parseInt(a / b) to parse the result into an integer if needed to solve this problem. */

function sumOfDigits(nums) {
  let num = Math.abs(nums);
  let count = 0;
  while (num >= 1) {
    count += num % 10;
    num = parseInt(num / 10);
  }
  return count;
}
console.log(sumOfDigits(1234));
