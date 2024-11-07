function specialPythagoreanTriplet(n) {
    for (let a = 1; a < n / 3; a++) {
      for (let b = a + 1; b < n / 2; b++) {
        let c = n - a - b;
        if (a * a + b * b === c * c) {
          return a * b * c;
        }
      }
    }
    return null; // Return null if no triplet is found
  }
  
  specialPythagoreanTriplet(1000);