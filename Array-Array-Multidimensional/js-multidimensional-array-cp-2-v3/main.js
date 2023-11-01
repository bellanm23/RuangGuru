function discountChecker(costumers, date) {
    let result = []
    // split date
    date = date.split('-')
    // check odd / even
    let even = (parseInt(date[0]) % 2 == 0) ? true : false;
    
    // formatted data
    costumers.map(function (item) {
        if (even) {
            if (parseInt(item[0].slice(2)) % 2 == 0) {
                result.push(item)
            } else if (item[1] == "member") {
                result.push(item)
            }
        } else {
            if (Math.abs(parseInt(item[0].slice(2)) % 2) == 1) {
                result.push(item)
            } else if (item[1] == "member") {
                result.push(item)
            }
        }
    })
    return result; // TODO: replace this
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
