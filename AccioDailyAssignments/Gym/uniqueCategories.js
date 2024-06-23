// Unique categories
// https://course.acciojob.com/idle?question=15a56f78-05c0-406d-9ad5-91cd574670fe
function uniqueCategories(arr) {
    // Initialize an object to store unique categories as keys
 const getuniqueCategories = {};

 // Iterate through each exhibit
 for (let i = 0; i < arr.length; i++) {
     // Use the category as a key in the object
     getuniqueCategories[arr[i][1]] = true;
 }

 // Extract the keys of the object to get the unique categories
 return Object.keys(getuniqueCategories);
}
var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
inputArr.push(line);
lineNumber++;

if (lineNumber ==  0) {
 logic("s");
 readline.close();
}
}



function logic(input) {
 let arr=JSON.parse(inputArr[0]);
 let word=inputArr[1];
 console.log(uniqueCategories(arr).join(" "));
 
}
