function deretanAngkaHinggaN(n) {
  let result = ''
  if (n < 2) return "Incorrect param"

  for (let i = n - 1; i > 0; i--) {
    for (let deret = i; deret > 0; deret--) {
      result += deret
    }

  }
  return result; // TODO: replace this
}
console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
