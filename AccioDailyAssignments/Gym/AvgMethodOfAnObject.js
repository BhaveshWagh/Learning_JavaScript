var readline = require("readline").createInterface(process.stdin);
var dp = new Array(200000);
let inputArr = [];
var lineNumber = -1;
 
readline.on("line", function(line) {
  inputArr.push(line);
  lineNumber++;
 
  if (lineNumber == 0) {
    calculateAverage();
    readline.close();
  }
});
 
// Add an Average Method to the Array Object in JavaScript
// https://course.acciojob.com/idle?question=39f00037-a2dc-48bf-92f0-dbd0184befa0
function calculateAverage() {
  const arr = JSON.parse(inputArr[0])
  console.log(arr.average())
}
 
Array.prototype.average = function() {
  //complete the code here
     if (this.length === 0) {
        return 0; // Return 0 for an empty array
    }
    const sum = this.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / this.length;
}