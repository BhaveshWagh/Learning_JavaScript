// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

// hoistedVar = 2;
// console.log("hoisted Variable", hoistedVar);
// console.log(typeof(hoistedVar)) // nummber
// var host;
// console.log(typeof(host))

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;