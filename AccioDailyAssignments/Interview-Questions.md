# JavaScript Concepts and Examples

This repository covers key JavaScript concepts with examples to understand their behavior and functionality.

---

## Table of Contents

1. [Asynchronous JavaScript](#1-asynchronous-javascript)
2. [Hoisting in JavaScript](#2-hoisting-in-javascript)
3. [Difference Between `==` and `===`](#3-difference-between--and-operators)
4. [Implicit Type Coercion](#4-implicit-type-coercion)
   - [String Coercion](#41-string-coercion)
   - [Boolean Coercion](#42-boolean-coercion)
   - [Equality Coercion](#43-equality-coercion)
5. [NaN Property in JavaScript](#5-nan-property-in-javascript)

---

## 1. Asynchronous JavaScript

```javascript
console.log("Cool!");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

Output :

Cool!
1
2
4
timerStart
timerEnd
success

```

## 2. Hoisting

**Definition:**  
Hoisting is a phenomenon in JavaScript by which you can access variables and functions even before they are initialized.

### Example 1: Variable Hoisting

```javascript
hoistedVariable = 1;
console.log(hoistedVariable); // Outputs 1 even when the variable is declared after initialization
var hoistedVariable;
```

### Example 2:

```javascript
hoistedFunction(); // Outputs: "Hello World!"

function hoistedFunction() {
  console.log("Hello World!");
}
```

### Note - Variable initializations are not hoisted, only variable declarations are hoisted:

### Example 3:

```Javascript
onsole.log(a); // output undefined we can access the variable even before the declaration and it default value is undefined inside variable.
var a = 10;

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
```

### Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

```javascript
("use strict");
x = 22; // Gives an error since "x" is not declared
var x;

// example 4:

// Hoisting takes place in the local scope as well
function doSomething() {
  x = 33;
  console.log(x);
  var x;
}
doSomething();
```

### 3. Difference between “ == “ and “ === “ operators

Ans: Both are comparison operators. The Difference B/W both operators is that "=="(double equals) is used to compare "values" whereas, "===" (triple equals) is used to compare both values and types.

// Ex

```javascript
var x = 2;
var y = "2";

(x == y)(
  // Returns true since the value of both x and y is the same
  x === y
); // Returns false since the typeof x is "number" and typeof y is "string"
console.log(x == y); // True
console.log(x === y); // False
```

### 6. Explain Implicit Type Coercion in javascript.

Ans : Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

### 6.1 String coercion

Ans : String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

```Javascript
Example 1:

var c = 4;
var d = "4"
console.log(c + d) // "44"

var f = "Hel"
var e = 42;
console.log(f + e) // Hel42

! Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

var c = 4, d = 6;
console.log(c + d) // 10

var str1 = "Namaste";
var str2 = " Javascript";
console.log(str1 + str2) // "Namaste Javascript"
```

### ! Let’s understand both the examples where we have added a number to a string,

When JavaScript sees that the operands of the expression x + y are of different types ( one being a number type and the other being a string type ), it converts the number type to the string type and then performs the operation. Since after conversion, both the variables are of string type, the ‘ + ‘ operator outputs the concatenated string “44” in the first example and Hel42 in the second example.

### ! Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.

```Javascript
var a = 3;
var b = "3";
console.log(a - b) // Returns 0 since the variable y (string type) is converted to a number type
```

### 6.2 Boolean Coercion:

Ans : Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

- Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false.

### Note All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

```Javascript

// If statements:

// Example:

var x = 0;
var y = 23;

if (x) {
  console.log(x);
} // The code inside this block will not run since the value of x is 0(Falsy)

if (y) {
  console.log(y);
} // The code inside this block will run since the value of y is 23 (Truthy)
```

### 6.2.1 Logical Operators :

Ans : Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

1. OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

2. AND ( && ) operator - If both the values are truthy, always the second value is returned && If both the values are falsy always the first value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

```Javascript


var x = 10;
var y = "Namaskar";
var z = undefined;

console.log(x || y) // 10
console.log(x || z) // 10
console.log(z || y) // Namaskar

console.log(x && y) // Namaskar
console.log(false && true) // false
console.log(true && false) // false
console.log("dsd" && x) // 10

// ***Note*** : Falsy Values : false, 0, 0n, -0, "", null, undefined, and NaN

console.log(false && 10); // false
console.log(0 && 1); // 0
console.log(1 && 0n); // 0n
console.log(-0 && 1); // -0
console.log("" && 1); // Returns empty string ''
console.log(null && 1); // null
console.log(undefined && 1); // undefined
console.log(NaN && 1); // NaN
console.log("" && undefined); // undefined
```

### 6.2.2 Equality Coercion :

    Equality coercion takes place when using ‘ == ‘ operator. As we have stated before

    The ‘ == ‘ operator compares values and not types.

    While the above statement is a simple way to explain == operator, it’s not completely true

    The reality is that while using the ‘==’ operator, coercion takes place.

    The ‘==’ operator, converts both the operands to the same type and then compares them.

```Javascript

// Ex :
var a = 22;
var b = "22";
console.log(typeof a, typeof b) // number string
console.log(a == b) // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

// ! Note : Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.

console.log(a === b) //  Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.
```

### 7. What is NaN property in JavaScript?

Ans : NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

- typeof of NaN will return a Number.

- To check if a value is NaN, we use the isNaN() function,

- Note - isNaN() function converts the given value to a Number type, and then equates to NaN.

```Javascript
console.log(isNaN("Hello")); // Returns true
console.log(isNaN(345)); // Returns false
console.log(isNaN("1")); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
console.log(isNaN(true)); // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)); // Returns false
console.log(isNaN(undefined)); // Returns true
```

### 8. Explain passed by value and passed by reference.

Ans: In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

    For understanding passed by value and passed by reference, we need to understand what happens when we create a variable and assign a value to it,

    var x = 2;

     In the above example, we created a variable x and assigned it a value of “2”. In the background, the “=” (assign operator) allocates some space in the memory, stores the value “2” and returns the location of the allocated memory space. Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.

### Assign operator behaves differently when dealing with primitive and non-primitive data types,

### Assign operator dealing with primitive types:

```Javascript

var y = 10;
var z = y;

console.log(y); // 10

x = 4;

console.log(y); // 10
```

    In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (10) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

### From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.

    var y = #8454; // y pointing to address of the value 234

    var z = y;

    var z = #5411; // z pointing to a completely new address of the value 234

    Changing the value of y
    y = 23;
    console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z.

### Assign operator dealing with non-primitive types:

```JavaScript
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
```

    In the above example, the assign operator directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.

```JavaScript
var obj = #8711; // obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj2 = obj;

var obj2 = #8711; // obj2 pointing to the same address

// changing the value of obj1

obj.name = "Akki";
console.log(obj2);
```

    Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.

```JavaScript
const obj1 = {
  name: "Vivian",
};

const obj2 = obj1;


console.log(obj1);

obj1.name = "Karan";

console.log(obj1);
```

    From the above example, we can see that while passing non-primitive data types, the assigned operator directly passes the address (reference).

    Therefore, non-primitive data types are always passed by reference

### 9. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler. Thus programmer's chances of making an error are lowered.

Characteristics of strict mode in javascript

1. Duplicate arguments are not allowed by developers.
2. In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
3. The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
4. Engineers will not be allowed to create global variables in 'Strict Mode.

### 10. What is an Immediately Invoked Function in JavaScript?

`ANS:An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.`

```JavaScript
// Syntaxt

()();

(function () {
  console.log("IIFY Executed!");
})();

(() => {
  console.log("Second IIFY");
})();
```

    The first set of parenthesis:

    (function (){
      //Do something;
    })

    While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

    The second set of parenthesis:

    (function (){
      //Do something;
    })();

    From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned:
