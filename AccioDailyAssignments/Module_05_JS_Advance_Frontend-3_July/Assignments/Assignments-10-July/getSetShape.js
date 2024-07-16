//complete this code
class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    getArea() {
      return this._width * this._height;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side); // Pass side to both width and height of Rectangle
    }
    getPerimeter() {
      return 4 * this.width;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.width); // Output: 5
  console.log(rectangle.height); // Output: 10
  console.log(rectangle.getArea()); // Output: 50
  
  const square = new Square(7);
  console.log(square.width); // Output: 7
  console.log(square.height); // Output: 7
  console.log(square.getArea()); // Output: 49
  console.log(square.getPerimeter()); // Output: 28
  