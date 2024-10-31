// Largest Prime FreecodeCamp Project eular question
function largestPrimeFactor(number) {
  let factor = 2;
  while (factor * factor <= number) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }
  return number;
}

largestPrimeFactor(13195);
