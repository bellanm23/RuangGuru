function printNumber(totalNumber) {
    let result = '';
    let counter = 1;
    for (let i = 1; i <= totalNumber; i++){
        result += counter;
        counter++;
        if (counter > 3){
            counter = 1;
        }
    }
    return result;
}

// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber

