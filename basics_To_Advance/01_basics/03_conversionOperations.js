let score = undefined
// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(typeof(valueInNumber))

// console.log(valueInNumber) // NaN -> Not a Number

// "33" => 33
// "33abc" => NaN <-- o/p & type is number
// undefine => NaN & type is number 
// null => 0 & type is number 
// true => 1; false => 0


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 22

let stringNumber = String(someNumber)
// console.log(stringNumber)  // 22
// console.log(typeof stringNumber) // string

// ******************** Operations ********************

let value = 2
let negValue = -value
// console.log(negValue)

// console.log(2+2)    // 4      
// console.log(2-2)    // 0
// console.log(2*2)    // 4
// console.log(2**2)   // 4 ( ** means exponential )
// console.log(2/2)    // 1
// console.log(2%2)    // 0 ( % --> means mod ) 

// console.log("1" + 2)        // 12
// console.log(1+ "2")         // 12
// console.log("1" + 2 + 2)    // 122
// console.log(1 + 2 + "2")    // 32
// console.log(1+ +"2")        // 3

// console.log( (3 + 4) * 5 % 3);  // 2


// console.log(true)  // true
// console.log(+true)  // 1
// console.log(true+)  // error

// console.log(+"") // 0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// console.log("num1",num1)
// console.log("num2",num2)


let gameCounter = 100
gameCounter++;
// console.log(gameCounter) // 101

// Prefix & Postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

