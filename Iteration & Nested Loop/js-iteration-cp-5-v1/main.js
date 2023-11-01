function generateParenthesesPair(numberOfPairs) {
  let result = "";
  if (numberOfPairs == 0) return result
  for (let i = 0; i < numberOfPairs; i++) result += "(";
  for (let i = numberOfPairs; i > 0; i--) result += ")";
  return result // TODO: replace this
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
