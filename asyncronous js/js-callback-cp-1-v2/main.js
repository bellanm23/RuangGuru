function calculate(number1, number2, callback) {
  let result = 0
  if (number1 % 2 == 0 && number2 % 2 == 0) {
    result = number1 - number2
  } else if (number1 % 2 == 0) {
    result = number1 + number2
  } else {
    result = number1 * number2
  }

  return callback(result)
}

// console.log(calculate(2, 2)); // 0
// console.log(calculate(10, 2)); // 8
// console.log(calculate(2, 8)); // -6
// console.log(calculate(1, 2)); // 2
// console.log(calculate(3, 6)); // 18
// console.log(calculate(7, 2)); // 14
// console.log(calculate(6, 1)); // 7
// console.log(calculate(10, 5)); // 15
// console.log(calculate(2, 1)); // 3
  
module.exports = calculate;

  