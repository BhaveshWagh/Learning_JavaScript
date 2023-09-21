// iife : Immediately Invoked Function Expression (IIFE)
// Syntax :
(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })()

  
// Named IIFE
(function chai(){
    console.log("DB-Connected!")
}) ();

// Note :Make sure that when you use two IIFE in one file, the function calls terminate with a semicolon (;).

// Simple IIFE
( () => {
    console.log("DB2-Connected!");
})();

// single line
( () => console.log("hi") ) ();

( (name) => {
    console.log(`Hey, ${name}`);
})("Bhavesh");

