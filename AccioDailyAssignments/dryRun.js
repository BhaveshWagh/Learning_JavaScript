// Make a class of vehical add the following properties
/**
 * - noOfAirbag - 6
 * - noOfSeats - 4
 * - isAutomatic - True/False
 * - carsType - Sedan
 */

// Make a blueprint child car add the following properties
/**
 * - brand
 * - fuelType
 * - milage
 * - price
 *
 */

// Make a custom function to print all the details of the vehical and car class

class Vehical {
  // Make a constructor to initialize an object
  constructor(carsType, noOfAirbags, noOfSeats, isAutomatic) {
    this.carsType = carsType;
    this.noOfAirbags = noOfAirbags;
    this.noOfSeats = noOfSeats;
    this.isAutomatic = isAutomatic;
  }

  // make a custome function to print all the details of vehical clss
  printVehicalDetails = () => {
    console.log(
      `${this.carsType},${this.noOfAirbags},${this.noOfSeats},${this.isAutomatic}`
    );
  };
}

// child class
class Car extends Vehical {
  constructor(
    carsType,
    noOfAirbags,
    noOfSeats,
    isAutomatic,
    brand,
    fuelType,
    milage,
    price
  ) {
    super(carsType, noOfAirbags, noOfSeats, isAutomatic);
    this.brand = brand;
    this.fuelType = fuelType;
    this.milage = milage;
    this.price = price;
  }
  printCarDetails = () => {
    this.printVehicalDetails();
    console.log(
      `${this.brand}, ${this.fuelType}, ${this.milage} Km/l, ${this.price} Million`
    );
  };
}
const bmw = new Car("Sedan", 6, 5, true, "BMW", "Petrol", 8, 6);
bmw.printCarDetails()

// const vehical = new  Vehical('Sedan', 6, 5, true)

// vehical.printVehicalDetails()
