// Vroom Vroom: Inheriting Objects
// https://course.acciojob.com/open-web-editor?question=41b19d4b-dcb6-487b-a85e-68809fe0ecb9
function Car(make, model) {
    this.make = make;
    this.model = model;
  }

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Inherit properties from Car
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
//   window.Car = Car;
//   window.SportsCar = SportsCar;
