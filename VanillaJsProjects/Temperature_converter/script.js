const temperature = document.getElementById("temperature");
const toFahrenheit = document.getElementById("fahrenheit");
const toCelcius = document.getElementById("celcius");
const result = document.getElementById("result");

let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = Number(temperature.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelcius.checked) {
    temp = Number(temperature.value);
    temp = (5 / 9) * temp - 32;
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select a Unit";
  }
}
