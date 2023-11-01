function trasureHunter(dailyLog) {
  var score = 0;
  for (const c of dailyLog){
    if (c === "$") {
      score += 100;
    } 
    else if (c === "x") {
      if (score < 10) {
        score = 0;
      } else {
        score -= 10;
      }
    }
    else if (c === "#"){
      score *= 1/2;
    }
  }
  return score;
}

console.log(trasureHunter('$x$#x$')); // 185
console.log(trasureHunter('$$#x$$')); // 290
console.log(trasureHunter('x$#x$#x$')); // 157.5
console.log(trasureHunter('xx$#$#$#$###xx')); // 3.125


module.exports = trasureHunter;
