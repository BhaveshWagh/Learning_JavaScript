var a;
// console.log(typeof a); // undefined

a = undefined;
// console.log(typeof a); // undefined

a = null;
// console.log(typeof a); // object

var obj = [
  {
    a: "hi",
  },
];

// console.log(typeof obj); // object
// console.log(typeof obj[0].a); // string
// console.log(typeof obj[0]); // object

let xc = {
  a: 5,
  b: 3,
};

// let y = Object.keys(xc)
// console.log(y) // ['a', 'b']
// console.log(y.length) // 2

   
// let x = '{ "b": 1, "c": 2 }'; 
// let y = JSON.parse(x); // { "b": 1, "c": 2 }
// console.log(y)
// console.log(typeof y); // object


// let x = 0.1 + 0.2;
// console.log(x) // 0.30000000000000004 floating point arithmatic : In js numbers are represeneted using the IEEE 754 standards for floating-point arithmatic, This means that not all decimal numbers are not exactly represented as binary Floating-Point numberd. 

// let y = 0.3;
// console.log(y)

// console.log(x == y); // false

// let x = 1 > 2 > 3; implicitly convert 1 > 2 ==> false ==> 0 > 3 // false
// console.log(x);  // false

   
// let x = false; 
// let y = "0"; 
// let z = 0; 

// console.log(x == y); // true
// console.log(x) // false
// console.log(typeof y) // string
// console.log(x == z); // true

const a = 5
const b = "2"
let sum =  a + Number(b)
// console.log(sum) // 52


// console.log(Number("0x11")) // 17

let x = []; 
// console.log(x) // []
// console.log(Boolean(x)); // true 


let xa = Infinity; 
// console.log(typeof xa);  // number

let xb = "5"; 
let y = 2; 

// console.log(x + y); // 52 
// console.log(x - y); // 3
