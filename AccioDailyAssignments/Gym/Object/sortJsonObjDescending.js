// Sort JSON Object - Descending
// https://course.acciojob.com/idle?question=f2d11698-95d1-414a-b0b7-b43d79c48efc
function DecendingSort(a, b) {
    // Compare the libraryID of two objects in descending order
    return b.libraryID - a.libraryID;
}

// DO NOT CHANGE THE CODE BELOW
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = obj.sort(DecendingSort);  // Pass the function directly
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(sortedObj[i].title + '-' + sortedObj[i].author + '-' + sortedObj[i].libraryID);
  }
  readline.close();
}
