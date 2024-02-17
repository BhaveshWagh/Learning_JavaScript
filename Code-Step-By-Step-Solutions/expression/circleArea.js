// Write a function named circleArea that accepts the radius of a circle as a parameter (as a real number) and returns the area of a circle with that radius. For example, the call of area(2.0) should return 12.566370614359172. You may assume that the radius passed is a non-negative number.Write a function named circleArea that accepts the radius of a circle as a parameter (as a real number) and returns the area of a circle with that radius. For example, the call of area(2.0) should return 12.566370614359172. You may assume that the radius passed is a non-negative number.

function circleArea(radius){
    let radiusSquare = radius * radius 
    let aoc = Math.PI * radiusSquare
    return aoc
  }
  
  console.log(circleArea(2.0))
  