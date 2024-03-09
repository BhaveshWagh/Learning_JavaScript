// Write a program to convert inches to meters. one inch is 0.0254 meters. Answer should have 3 decimal places.

function inchesToMeter(inch) {

  const inchToMeter = inch * 0.0254;

  const factor = Math.pow(10, 3);

  return Math.round(inchToMeter * factor) / factor;
}

console.log(inchesToMeter(4.0));
console.log(inchesToMeter(20.34));
console.log(inchesToMeter(700.20));

// function roundToDecimalPlaces(num) {
//   const factor = Math.pow(10, 3);
//   return Math.round(num * factor) / factor;
// }

// const num1 = 0.1016;
// const roundedNum1 = roundToDecimalPlaces(num1, 3);
// console.log(roundedNum1); // Output: 5.68
