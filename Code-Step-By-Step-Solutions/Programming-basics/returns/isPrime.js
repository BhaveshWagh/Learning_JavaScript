// Write a function named isPrimeNumber that accepts an integer as a parameter and returns true if that integer is a prime number. A prime number is an integer that has no factors other than 1 and itself. The number 2 is defined as the smallest prime number.

function isPrimeNumber(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrimeNumber(14));
  