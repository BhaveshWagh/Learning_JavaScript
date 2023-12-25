// What is a Callback Function in Javascript

// Functions are firstclass cetizens in javascript 

// when you pass one function into another function called as callback function
// A callback is a function passed as an argument to another function.

// Synchronus & Single threaded language:  It can only do one thing at a time in a specific order

 setTimeout(function () {
    console.log("timer")
}, 5000)

function x(y) {
    console.log("x")
    y()
}

x(function y() {
    console.log("y")
}) 


// Javascript is a synchronus and single-threaded(it can only do one thing at a time in a specific order) language 



// Blocking the main thread

// Power of Callbacks?

// Deep about With Event Listeners

// Closures Demo with Event Listeners

// Garbage Collection & removeEventListeners
