// Sort JSON Object - Ascending
// https://course.acciojob.com/idle?question=e5d988ce-34ef-45cd-8773-a759463be754

function AscendingSort(initial) {
  //write your code here
  return function (a, b) {
    return a.libraryID - b.libraryID;
  };
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = obj.sort(AscendingSort(parseInt));
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(
      sortedObj[i].title +
        "-" +
        sortedObj[i].author +
        "-" +
        sortedObj[i].libraryID
    );
  }
  readline.close();
}
