const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius) {
const F = (celsius * 9/5) + 32;
    return F
}

rl.question('', (celsiusInput) => {
  const celsius = parseFloat(celsiusInput);

  if (isNaN(celsius)) {
    console.log('Please enter a valid number for the temperature.');
    rl.close();
    return;
  }

  const fahrenheit = celsiusToFahrenheit(celsius);

  console.log(`${fahrenheit.toFixed(6)}`);

  rl.close();
});

