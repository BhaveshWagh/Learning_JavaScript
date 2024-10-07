// Average Temperature
// https://course.acciojob.com/idle?question=7f376860-d38b-4ff5-925b-c71f8f107d8a

function averageTemperatures(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let cityData = arr[i];
    let cityName = cityData[0];
    let temperatures = cityData.slice(1);
    let sum = 0;
    for (let j = 0; j < temperatures.length; j++) {
      sum += temperatures[j];
    }
    let average = sum / temperatures.length;
    result.push(average);
  }
  return result;
  // const result = [];

  //   for (const cityData of arr) {
  //       const [city, ...temperatures] = cityData;
  //       const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
  //       result.push(averageTemperature);
  //   }
  //   return result;
}

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let arr = JSON.parse(inputArr[0]);
  console.log(averageTemperatures(arr).join(" "));
}
