// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

// function nthPrime(n) {

//   return true;
// }
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  let count = 0; // Counts the number of primes found
  let num = 1; // Start from 1 and check each number

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++; // Increment count if num is prime
    }
  }
  return num;
}

// Test cases
console.log(nthPrime(6)); // Should return 13
console.log(nthPrime(10)); // Should return 29
console.log(nthPrime(100)); // Should return 541
console.log(nthPrime(1000)); // Should return 7919
console.log(nthPrime(10001)); // Should return 104743

// nthPrime(10001);
