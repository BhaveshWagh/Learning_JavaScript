/**
 * Write a function named threeConsecutive that accepts three integers as parameters and returns true if they are three consecutive numbers; that is, if the numbers can be arranged into an order such that their values differ by exactly 1.

For example, the call of threeConsecutive(3, 2, 4) would return true
 */

function threeConsecutive(num1, num2, num3) {
    // return sotedArray
  const sortedNumbers = [num1, num2, num3].sort((a, b) => a - b);

  return (
    Math.abs(sortedNumbers[0] - sortedNumbers[1]) === 1 &&
    Math.abs(sortedNumbers[1] - sortedNumbers[2]) === 1
  );
}
console.log(threeConsecutive(3, 1, 2));
