function countAndSum(number) {
  let result = 0;
  let a = 1;
  for (let i = 1; i <= number; i++){
    result += a;
    a++;
    if (a > 3) {
      a = 1;
    }
  }
  return result // TODO: replace this
}
console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
