// Primitive
// 7 types : String, Number, Boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn  = false
const outsideTemp = null

let userEmail;

/* Symbol : Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.*/

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(typeof anotherId)  // symbol
// console.log(id === anotherId) // false



const bigNumber = 231214133343245n
// console.log(typeof bigNumber) // bigint

// Reference (Non primitive)

// Array, Objects, Functions

const immortals = ["Hanuman","Ashwatthama","Mahabali","Ved Vyasa", "Vibhishana", "Kripacharya","Parshurama"];

// console.log(typeof immortals) // object

let myObj = {
    name:"Dhanesh",
    age: 23,
}
// console.log(typeof myObj) // object


const myFunction = function(){
    console.log("Namskar Maharashtra!")
}
// console.log(typeof myFunction) // function


// Stack & Heap memory in javascript

// stack ( primitive ) : You'll get copy for the variable.
// heap ( Non-primitive ) : You'll get the reference for the variable.

// only change in copy not in the original value

let number = 10

let newNumber = number

newNumber = 20

console.log(newNumber)  // 20

// Original value also changed because in heap memory you'll get refernce of the original values.
let userOne = {
    userEmail:"user0123@gmail.com",
    useUpi : "user123@paypl"
}
let userTwo = userOne

userTwo.userEmail = "user2@gmail.com"

console.log(userOne)
console.log(userTwo)