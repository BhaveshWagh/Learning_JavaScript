// Array
// Note : Array indexing starts from 0 (zero). 

const array = [1,2,3,4,5]
// console.log(array);

const string = ["one","two","three","four"] 
// console.log(string);

const mixArr = [1,2,"three","four"]
// console.log(mixArr);

// Access the element of array : 
// console.log(array[0]); // 1

// push & pop
// console.log(array.push(6)); // [1,2,3,4,5,6] push : Placed the element at the end of the array.
// console.log(array); // 
// console.log(array.pop()); // 6 pop :removes the last element in the array
// console.log(array); //  [1,2,3,4,5]

// includes:
// console.log(array.includes(3)); // includes returning the boolean values. It checks whether an element is present or not in the array.
// console.log(array); //

// indexOf : The value to locate in the array.
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(array.indexOf(2)); // 1


// slice & splice

// The difference is slice & splice is 

// slice : it does not includes the last one ex: array = [1,2,3,4,5] array.slice(1,3) --> [2,3]  
// splice : includes the last one also ex: array = [1,2,3,4,5] array.slice(1,3) --> [2,3,4] 

// console.log(array.slice(1,3)); // [2,3]
// console.log(array); // [1,2,3,4,5]

// console.log(array.splice(1,3)); // [2,3,4]

// The major difference is that the slice does not manipulate the original array; splice manipulates the original array.

// console.log(array); // [1, 5]

console.log(array.shift()); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(array);
console.log(array.unshift(1)); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(array);








