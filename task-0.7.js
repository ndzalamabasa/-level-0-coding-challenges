function convertCelciusToFahrenheit(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32; // Celcius to Fahrenheit formula

  return fahrenheit;
}

function convertFahrenheitToCelcius(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9; // Fahrenheit to Celcius formula

  return celcius;
}

// Functions test calls
console.log(convertCelciusToFahrenheit(45));
console.log(convertFahrenheitToCelcius(45));
