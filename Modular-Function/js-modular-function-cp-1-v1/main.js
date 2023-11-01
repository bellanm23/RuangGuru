function kelvinToCelsius(kelvin) {
  let result = kelvin - 273.15
  return result // TODO: replace this
}

function kelvinToFahrenheit(kelvin) {
  let result = ((kelvin - 273.15) * 1.8) + 32
  return result // TODO: replace this
}

function celsiusToFahrenheit(celsius) {
  let result = (celsius * 1.8) + 32
  return result // TODO: replace this
}

function celsiusToKelvin(celsius) {
  let result = celsius + 273.15
  return result // TODO: replace this
}

function fahrenheitToKelvin(fahrenheit) {
  let result = ((fahrenheit - 32) / 1.8) + 273.15
  return result // TODO: replace this
}

function fahrenheitToCelsius(fahrenheit) {
  let result = (fahrenheit - 32) / 1.8
  return result // TODO: replace this
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  let result = 0
  if (initialUnit == "C" && finalUnit == "K") {
    result = celsiusToKelvin(temperature)
  }
  if (initialUnit == "C" && finalUnit == "F") {
    result = celsiusToFahrenheit(temperature)
  }
  if (initialUnit == "F" && finalUnit == "C"){
    result = fahrenheitToCelsius(temperature)
  }
  if (initialUnit == "F" && finalUnit == "K") {
    result = fahrenheitToKelvin(temperature)
  }
  if (initialUnit == "K" && finalUnit == "C") {
    result = kelvinToCelsius(temperature)
  }
  if (initialUnit == "K" && finalUnit == "F") {
    result = kelvinToFahrenheit(temperature)
  }
  return Number (parseFloat(result).toFixed(2))// TODO: replace this
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
