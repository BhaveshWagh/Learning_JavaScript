const score = 400
// console.log(score) // 400

const newScore = new Number(100)
// console.log(newScore) 
// In vs o/p is [Number: 100] 
// In web browser : Number {200}

// console.log(newScore.toString().length) // converted into string and length is 3

// console.log(newScore.toFixed(2)) // 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6));  // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// Math.random() generate number between 0 to 1
console.log(Math.random()) // 0.03284424018735588

console.log(Math.random() * 10) // 7.210911492044367 

/*The above example will also generate a 0 value, so if you want to generate from 1, then add 1. Consider the below example.*/ 

console.log((Math.random()*10) + 1) // 9.902454702078423

console.log(Math.floor((Math.random()*10) + 1)) // 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min) //15