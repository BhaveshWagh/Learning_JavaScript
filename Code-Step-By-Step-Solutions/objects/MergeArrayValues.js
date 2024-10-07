// Write a function named mergeArrayValues that takes a JavaScript object with keys mapping to arrays of strings as a parameter and returns a single array containing all strings in the array values. The contents of the returned array should be in the same order as their respective array contents. For example, if the following variable were defined:

// let pets = {
//     "cats" : ["Miji", "Spot", "Tiger"],
//     "dogs" : ["Abby", "Barney", "Clyde", "Mowgli"],
//     "rocks" : ["Mr. Pebbles"]
// };
// the call mergeArrayValues(pets) should return the following:

// ["Miji", "Spot", "Tiger", "Abby", "Barney", "Clyde", "Mowgli", "Mr. Pebbles"]
// You may assume the object passed is non-null.

function mergeArrayValues(obj) {
  let mergedArray = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key].lenght; i++) {
      mergedArray[mergedArray.length] = obj[key][i];
    }
  }
  return mergedArray;
}
let pets = {
    "cats" : ["Miji", "Spot", "Tiger"],
    "dogs" : ["Abby", "Barney", "Clyde", "Mowgli"],
    "rocks" : ["Mr. Pebbles"]
};
console.log(mergeArrayValues(pets))