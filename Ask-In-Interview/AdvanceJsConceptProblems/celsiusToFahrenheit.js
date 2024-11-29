const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

rl.question('Enter temperature in Celsius: ', (celsiusInput) => {
  const celsius = parseFloat(celsiusInput);

  if (isNaN(celsius)) {
    console.log('Please enter a valid number for the temperature.');
    rl.close();
    return;
  }

  const fahrenheit = celsiusToFahrenheit(celsius);

  console.log(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);

  rl.close();
});


// function celsiusToFahrenheit(tempInCelsius) {
//     let tempInFahrenheit = (tempInCelsius *(9/5) + 32)
//     return tempInFahrenheit;
// }
// let tempInCelsius = prompt("Enter celsius : ")
// console.log(celsiusToFahrenheit(tempInCelsius))

// var readline = require("readline").createInterface(process.stdin);
// let inputArr = [];
// var lineNumber = -1;

// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;

//   if (lineNumber ==  0) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {

//     let tempInCelsius=parseInt(inputArr[0]);

//     console.log(celsiusToFahrenheit(tempInCelsius));

// }
