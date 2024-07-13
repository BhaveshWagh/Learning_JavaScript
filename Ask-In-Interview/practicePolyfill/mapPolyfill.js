// you know the map method in js // yes then explain
// so basically the map is built in js method it is used to iterate through the array.
// give me an example ok

// Question : Make an array of your choice and multipy by 2 each element in the array and return new array. using .map method
const data = [1, 2, 3, 4, 5, 6];

// const resultArr = data.map((ele) => ele * 2);
// console.log(resultArr)

// Demonstrate a polyfill of .map method
// yes why not i will try just give me a minute to think
Array.prototype.myMap = function (callback) {
  // intialize an empty array bcz .map method returns a new array right
  const resultantArr = [];
  // this = data
  // this.length = data.length
  for (let i = 0; i < this.length; i++) {
    resultantArr.push(callback(this[i], i))
  }
  return resultantArr
};

const resultArr = data.myMap((ele) => ele * 2);
console.log(resultArr);
