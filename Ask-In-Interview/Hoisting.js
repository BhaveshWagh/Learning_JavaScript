// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

// hoistedVar = 2;
// console.log("hoisted Variable", hoistedVar);
// console.log(typeof(hoistedVar)) // nummber
// var host;
// console.log(typeof(host))

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

// "use strict";
// x = 23; // Gives an error since 'x' is not declared
// var x;

function a() {
  var x = 10;
  function b() {
    // console.log(x);
  }
  return b;
}
var z = a();
// console.log(z);
z();

// Object creation

const obj = new Object();
obj.name = "Bhavesh";
// console.log(obj) // { name: 'Bhavesh' }

let school = {
  name: "Mahajan High School",
  location: "Dhule",
  established: "1980",
  displayInfo: function () {
    console.log(
      `${school.name} was established in ${school.established} at ${school.location}.`
    );
  },
};

school.displayInfo();

