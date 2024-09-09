// Books to Read
// https://course.acciojob.com/idle?question=0ce4be45-3c96-48a2-b732-98f181381487
function getInfo(obj) {
  //Write your code here
  const filterData = obj.filter((value) => value.readingStatus === false);
  return filterData.map((value) => {
    console.log(`${value.title}-${value.author}`);
  });
}

// Dont change the driver code given below
var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  getInfo(obj);
  readline.close();
}
