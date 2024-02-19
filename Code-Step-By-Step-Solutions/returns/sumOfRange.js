/* Write a function named sumOfRange function that accepts two integer parameters min and max and returns the sum of the integers from min through max inclusive.

For example, the call of sumOfRange(3, 7) returns 3 + 4 + 5 + 6 + 7 or 25. If min is greater than max, return 0. */
function sumOfRange(min, max) {
    let count = 0;
    if (min > max) {
      return count;
    }
    for (let i = min; i <= max; i++) {
      count += i;
    }
    return count;
  }
  
  console.log(sumOfRange(8, 7));
  