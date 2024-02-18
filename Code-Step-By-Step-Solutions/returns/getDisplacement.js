// In physics, a common useful equation for finding the position s of a body in linear motion at a given time t (in seconds), based on its initial position s0, initial velocity v0, and rate of acceleration a, is the following:

// s = s0 + v0 t + 1/2 * at2
// Using the equation: s = s0 + v0 * t + 0.5 * g * t^2
// Write a function getDisplacement that takes in parameters s0, t, and v0 and returns the resulting position, s, using 9.8 as the acceleration constant for gravity.

function getDisplacement(s0, t, v0) {
    const a = 9.8;
  
    // Using the equation: s = s0 + v0 * t + 0.5 * g * t^2
    const s = s0 + v0 * t + 0.5 * a * t**2;
              // s0 + v0 * t + 0.5 * a * t**2
    console.log(s);
    return s;
  }
  
  getDisplacement(1, 2, 3); // → 26.6  (expected 51.1)
  getDisplacement(0, 100, 12); // → 50200 (expected 1905.6)
  getDisplacement(1, 1.5, 2); // →  15.025 (expected 23.6)
  getDisplacement(0, -100, 12); // 47800 (expected -494.4)
  getDisplacement(-1, 1.5, 2);
  
  