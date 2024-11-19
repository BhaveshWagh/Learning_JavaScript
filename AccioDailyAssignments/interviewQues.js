// 1. Asynchronous JS question
// console.log("Cool!");

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

//2. Hoisting: is a phenomina by which you can access variables and functions even before intialized.

// ex 1:

// hoistedbVariable = 1;
// console.log(hoistedbVariable); // outputs 1 even when the variable is declared after it is initialized
// var hoistedbVariable;

// ex 2:

// hoistedFunction(); // outputs "Hello word!" even when the function is declared after calling

function hoistedFunction() {
  console.log("Hello word!");
}
// ! Note - Variable initializations are not hoisted, only variable declarations are hoisted:
// ex 3:
// console.log(a); // output undefined we can access the variable even before the declaration and it default value is undefined inside variable.
// var a = 10;

// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;

// ! Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

("use strict");
x = 22; // Gives an error since "x" is not declared
var x;

// ex 4:
// Hoisting takes place in the local scope as well
function doSomething() {
  x = 33;
  console.log(x);
  var x;
}
// doSomething()

// 3. Difference between “ == “ and “ === “ operators
// Ans : Both are comparison operators. The Difference B/W both operators is that "=="(double equals) is used to compare "values" whereas, "===" (triple equals) is used to compare both values and types.

// Ex
// var x = 2;
// var y = "2";

// (x == y)  // Returns true since the value of both x and y is the same
// (x === y) // Returns false since the typeof x is "number" and typeof y is "string"
// console.log(x == y) // True
// console.log(x === y) // False

// 6. Explain Implicit Type Coercion in javascript.

// Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

// 6.1 String coercion

// String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

// Example 1:

// var c = 4;
// var d = "4"
// console.log(c + d) // "44"

// var f = "Hel"
// var e = 42;
// console.log(f + e) // Hel42

// ! Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

// var c = 4, d = 6;
// console.log(c + d) // 10

// var str1 = "Namaste";
// var str2 = " Javascript";
// console.log(str1 + str2) // "Namaste Javascript"

// ! Let’s understand both the examples where we have added a number to a string,

// When JavaScript sees that the operands of the expression x + y are of different types ( one being a number type and the other being a string type ), it converts the number type to the string type and then performs the operation. Since after conversion, both the variables are of string type, the ‘ + ‘ operator outputs the concatenated string “44” in the first example and Hel42 in the second example.

// ! Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.

// var a = 3;
// var b = "3";
// console.log(a - b) // Returns 0 since the variable y (string type) is converted to a number type

// 6.2 Boolean Coercion:

// Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

// Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false.

// ! Note All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

// If statements:

// Example:

// var x = 0;
// var y = 23;

// if (x) {
//   console.log(x);
// } // The code inside this block will not run since the value of x is 0(Falsy)

// if (y) {
//   console.log(y);
// } // The code inside this block will run since the value of y is 23 (Truthy)

// 6.2.1 Logical Operators :

// Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

// OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned && If both the values are falsy always the first value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

// var x = 10;
// var y = "Namaskar";
// var z = undefined;

// console.log(x || y) // 10
// console.log(x || z) // 10
// console.log(z || y) // Namaskar

// console.log(x && y) // Namaskar
// console.log(false && true) // false
// console.log(true && false) // false
// console.log("dsd" && x) // 10

// todo *** : Falsy Values : false, 0, 0n, -0, "", null, undefined, and NaN
// console.log(false && 10); // false
// console.log(0 && 1); // 0
// console.log(1 && 0n); // 0n
// console.log(-0 && 1); // -0
// console.log("" && 1); // Returns empty string ''
// console.log(null && 1); // null
// console.log(undefined && 1); // undefined
// console.log(NaN && 1); // NaN
// console.log("" && undefined); // undefined

//6.2.2 Equality Coercion :

// Equality coercion takes place when using ‘ == ‘ operator. As we have stated before

// The ‘ == ‘ operator compares values and not types.

// While the above statement is a simple way to explain == operator, it’s not completely true

// The reality is that while using the ‘==’ operator, coercion takes place.

// The ‘==’ operator, converts both the operands to the same type and then compares them.

// Ex :
var a = 22;
var b = "22";
// console.log(typeof a, typeof b) // number string
// console.log(a == b) // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

// ! Note : Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.

// console.log(a === b) //  Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.

// 7. What is NaN property in JavaScript?
// NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

// typeof of NaN will return a Number.

// To check if a value is NaN, we use the isNaN() function,

// ! Note - isNaN() function converts the given value to a Number type, and then equates to NaN.

console.log(isNaN("Hello")); // Returns true
console.log(isNaN(345)); // Returns false
console.log(isNaN("1")); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
console.log(isNaN(true)); // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)); // Returns false
console.log(isNaN(undefined)); // Returns true
