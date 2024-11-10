function primeSummation(n) {
  // Create an array of booleans to represent prime numbers
  let isPrime = new Array(n).fill(true);
  console.log(isPrime)
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

  // Implement the Sieve of Eratosthenes
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false; // Mark multiples of i as non-prime
      }
    }
  }

  // Sum all prime numbers
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += i;
    }
  }

  return sum;
}

// console.log(primeSummation(2000000));
console.log(primeSummation(10));
