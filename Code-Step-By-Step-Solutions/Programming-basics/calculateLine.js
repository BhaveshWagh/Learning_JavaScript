// Question : Write a function named calculateLine which calculates and returns the y value of the line represented with a given x value, m slope, and an intercept b (as seen in the line equation of the form y = m x + b).

// For example, a call of calculateLine(5, 2, 4) would return 14 because 14 = 2 * 5 + 4, a call to calculateLine(1, 2, 0) would return 2 because 2 = 2 * 1 + 0, and a call to calculateLine(1, 0.5, 2) would return 2.5 because 2.5 = 0.5 * 1 + 2.

function calculateLine(m, x, b) {
  let y = x * m + b;
  return y;
}

console.log(calculateLine(5, 2, 4));
