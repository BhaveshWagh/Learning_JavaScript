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

### 11 Explain Higher Order Functions in Javascript

    Ans: A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

There are several different types of higher order functions like map and reduce. We will discuss these later in this tutorial. But before that let's first dive deep into what higher order functions are.

## Example

```javascript
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am callback function");
}

// higher order function
function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);

output:
// I am higher order function
// I am callback function
```

    In the above code higherOrderFunction() is an HOF because we are passing a callback function as a parameter to it.

    The above example is quite simple isn't it? So let's expand it further and see how you can use HOFs to write more concise and modular code.

### How Higher Order Functions Work

    So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

```Javascript
const radius = [1, 2, 3];

// function to calculate area of circle;
const areaOfCircle = function (radius) {
const result = [];
for (let i = 0; i < radius.length; i++) {
result.push(Math.PI _ radius[i] _ radius[i]);
}
return result;
};

// function to calculate diameter of the circle;
const diameterOfCircle = function (radius) {
const result = [];
for (let i = 0; i < radius.length; i++) {
result.push(2 \* radius[i]);
}
return result;
};

console.log(areaOfCircle(radius)); // [ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
console.log(diameterOfCircle(radius)); // [ 2, 4, 6 ]

// But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?

// So, let's see how we can write the same code using HOFs:

// logic to clculate area
const area = function (radius) {
return Math.PI _ radius _ radius;
};

// logic to calculate diameter
const diameter = function (radius) {
return 2 \* radius;
};

// a reusable function to calculate area, diameter, etc;
const calculate = function (radius, logic) {
const output = [];
for (let i = 0; i < radius.length; i++) {
output.push(logic(radius[i]));
}
return output;
};

console.log(calculate(radius, area)); // [ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
console.log(calculate(radius, diameter)); // [ 2, 4, 6 ]

```

Now, as you can see in the above code, we have only written a single function calculate() to calculate the area and diameter of the circle. We only need to write the logic and pass it to calculate() and the function will do the job.

The code that we have written using HOFs is concise and modular. Each function is doing its own job and we are not repeating anything here.

Suppose in the future if we want to write a program to calculate the circumference of the circle. We can simply write the logic to calculate the circumference and pass it to the calculate() function.

```javascript
const circumeference = function (radius) {
  return 2 * Math.PI * radius;
};
console.log(calculate(radius, circumeference));
```

### How to Use Higher Order Functions

You can use higher order functions in a variety of ways.

- When working with arrays, you can use the <strong>
  map(), reduce(), filter(), and sort() </strong> functions to manipulate and transform data in an array.

- When working with objects, you can use the Object.entries() function to create a new array from an object.

- When working with functions, you can use the compose() function to create complex functions from simpler ones.

# How to Use Some Important Higher Order Functions

There are various built in HOFs, and some of the most common ones are map(), filter() and reduce(). So let's understand each one of these in detail.

## How to use map() in JavaScript

    The map() function takes an array of values and applies a transformation to each value in the array. It does not mutate the original array. It is often used to transform an array of data into a new array with a different structure.

Let's understand with the help of examples.

### Example 1: Suppose we want to add 10 to every element in a array. We can use the map() method to map over every element in the array to add 10 to it.

```Javascript

const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]

```

In the above example, arr is an array with five elements: 1, 2, 3, 4, and 5. map is a method that we use to apply a function to each element in an array, and it returns a new array with the modified elements.

The callback function that is being passed to map uses the arrow function syntax, and it takes a single argument num. This function adds 10 to num (every element in the array) and returns the result.

### Example 2: Here we have an array of users. Suppose we only want their first and last name. We can simply use the map() method to extract it from the users array.

```Javascript
const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']
```

In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.

- We are mapping over each user using the map() method to extract the properties firstName and lastName.

- The callback function takes a single argument user which represents an element in the users array (an object).

- The function concatenates the firstName and lastName properties of the user object, and returns the result.

## How to Use filter() in JavaScript

    The filter() function takes an array and returns a new array with only the values that meet certain criteria. It also does not mutate the original array. It is often used to select a subset of data from an array based on certain criteria.

### Example 1: You can use filter() to return only the odd numbers from an array of numbers.

```javascript
const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2); // filter out odd numbers
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [1, 3, 5]
```

    In the above code, arr is an array with five elements: 1, 2, 3, 4, and 5. filter is a method that is used to create a new array with elements that pass a test specified in a provided callback function.

- This callback function checks if num is odd by checking if it is not divisible by 2 (num % 2). If num is not divisible by 2, the function returns true, otherwise it returns false.

- When filter is called on arr, it applies this function to each element in the array, creating a new array with only the elements that returned true or passed the specified condition when passed to the function. The original arr remains unchanged and returns the result.

### Example 2: You can use filter() to return only the users having age greater than 30 in an array.

```Javascript
const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

// Find the users with age greater than 30
const output = users.filter(({age}) => age > 30)
console.log(output); // [{firstName: 'Jack', lastName: 'Doe', age: 35}, {firstName: 'Jill', lastName: 'Doe', age: 40}, {firstName: 'Joe', lastName: 'Doe', age: 45}]
```

In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.

- filter is called on the users array and it applies a callback function to each element in the array.

- The function takes a single argument, an object destructured to a single property age. This function checks if age is greater than 30. If it is, the function returns true, otherwise it returns false.

- When filter is called on users, it applies this function to each element in the array, creating a new array with only the elements that returned true when passed to the function and returns the result. The original users array remains unchanged.

## How to use reduce() in JavaScript

    The reduce() method is kind of overwhelming. If you have came across reduce() method before and haven't understood it at first, it's totally fine.

But don't worry – here, we will learn it through quite a few examples and I will try my best to make you understand this method.

Now, one doubt that might comes to your mind is why we use the reduce() method. As there are already lots of methods, how can we decide which one to use and when?

In the case of the reduce() method, you should is used it when you want to perform some operation on the elements of an array and return a single value as a result. The "single value" refers to the accumulated result of repeatedly applying a function to the elements of a sequence.

For example, you might use reduce() to sum up all the elements in an array, to find the maximum or minimum value, to merge multiple objects into a single object, or to group different elements in an array.

Now let's understand all these with the help of examples.

### Example 1: Using reduce() to sum up all the elements in an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sum); // 15
```

In this example, the reduce() method is called on the numbers array and is passed a callback function that takes two arguments: total and currentValue.

- The total argument is the accumulation of the values that have been returned from the function so far, and the currentValue is the current element being processed in the array.

- The reduce() method also takes an initial value as the second argument, in this case 0, which is used as the initial value of total for the first iteration.

- In each iteration, the function adds the current value to the total and returns the new value of the total.

- The reduce() method then uses the returned value as the total for the next iteration, until it has processed all the elements in the array.

Finally, it returns the final value of the total, which is the sum of all the elements in the array.

### Example 2: Using reduce() to find the maximum value in an array:

```javascript
let numbers = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
});
console.log(maxValue); // 100
```

In this example, again we have two arguments max and curr in the callback function. Notice we haven't passed the second parameter in the reduce() method this time. So, the default value will be the first element in the array.

- The callback function first checks if the current element curr is greater than the current maximum value max. If it is, it updates the value of max to be the current element. If it is not, max is not updated. Finally, the function returns the value of max.

- In this case, the reduce() method will start by setting max to 5 and curr to 20. It will then check if 20 is greater than 5, which it is, so it updates max to 20.

- It will then set curr to 100 and check if 100 is greater than 20, which it is, so it updates max to 100.

- It will continue this process until it has processed all the elements in the array. The final value of max will be the maximum value in the array, which is 100 in this case.

### Example 3: Using reduce() to merge different objects in a single object:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
```

In this example, we have two arguments acc and curr in the callback function. The acc represents the current merged object that has been created so far, while the curr represents the current object being processed in the array.

- The function uses the spread operator (...) to create a new object that combines the properties of the current merged object acc and the current object curr. It then returns this new object.

- In this case, the reduce() method will start by setting acc to an empty object (which is the value passed as the second argument to reduce()). It will then set curr to obj1, and create a new object that combines the properties of the empty object and obj1. It will then set curr to obj2 and create a new object that combines the properties of the previous merged object and obj2. It will continue this process until it has processed all the objects in the array.

- The final value of acc will be the merged object, which will contain all the properties of the original objects.

### Example 4: Using reduce() to group objects in an array. For example, grouping products in a shopping cart according to their brand name.

```javascript
const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});

console.log(products);
// OUTPUT
{
  Apple: [
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Apple', price: 1.99, quantity: 3 }
  ],
  Xiomi: [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
  Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
  Tesla: [
    { name: 'Tesla', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 4.99, quantity: 4 }
  ],
  Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
}
```

In this example, we have shoppingCart array representing different products and two arguments productGroup and product in the callback function.

- The productGroup argument represents the current group of products that have been found so far, while the product argument represents the current product being processed in the array.

- The function first gets the name of the current product using product.name. It then checks if there is already a group for this product name in the productGroup object using the if statement. If there is not, it creates a new group by initializing the productGroup[name] property to an empty array.

- Finally, the function pushes the current product into the group using the push() method, and returns the updated productGroup object.

- After the reduce() method has processed all the elements in the shoppingCart array, the resulting productGroup object will contain keys for each product name, and values that are arrays of products with that name.

# Benefits of Higher Order Functions

Using higher order functions has some important benefits for web developers.

    - First, higher order functions can help improve the legibility of your code by making it more concise and easy to understand. This can help speed up the development process and make it easier to debug code.

    - Second, higher order functions can help organize your code into smaller chunks, making it easier to maintain and extend.

# Conclusion

This article explored what a higher order function is, the benefits of using them, and how to use them in practical applications.

By using higher order functions, web developers can work smarter by organizing their code into smaller chunks and making it more legible and easier to debug.

Now, whenever you try to use map(), filter() and reduce() methods and get confused, just remember the following:

- Use map when you want to transform an array
- Use filter to select a subset of data from an array, and
- Use reduce when you want to return a single value as a result.
