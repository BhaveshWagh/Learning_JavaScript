function inchesToCentimeters(feet, inches) {
    if (feet > 0 && inches > 0) {
      let centimeter = (feet * 12 + inches) * 2.54;
      return centimeter;
    } else {
      throw new Error("values for feet and inches must be non-negative");
    }
  }
  
  let feet = 5;
  let inches = -11;
  try {
    let result = inchesToCentimeters(feet, inches);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
  