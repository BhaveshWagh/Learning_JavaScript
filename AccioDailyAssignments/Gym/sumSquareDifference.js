function sumSquareDifference(n) {
  let sumOfSquareOfEach = 0;
  let sumOfSquareOfWhole = 0;
  let square;

  // The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385
  for (let i = 1; i <= n; i++) {
    square = i * i;
    sumOfSquareOfEach += square;
  }

  // The square of the sum of the first ten natural numbers is,(1 + 2 + ... + 10)2 = 552 = 3025
  for (let i = 1; i <= n; i++) {
    sumOfSquareOfWhole += i;
  }
  sumOfSquareOfWhole *= sumOfSquareOfWhole;

  // Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  let difference = sumOfSquareOfWhole - sumOfSquareOfEach;
  return difference;
}

console.log(sumSquareDifference(10));


// Another approach
//  // Sum of the squares of the first n natural numbers
 let sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    
 // Square of the sum of the first n natural numbers
 let squareOfSum = Math.pow((n * (n + 1)) / 2, 2);
 
 // Calculate the difference
 let difference = squareOfSum - sumOfSquares;
 
 return difference;