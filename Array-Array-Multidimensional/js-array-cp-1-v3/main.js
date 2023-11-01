function splitToArr(str) {
    if (str === undefined)
    return "Invalid input"
    if (str == "")
    return "Data not available"

    let data = str.split(/[;-]+/)
    
    data = data.map(function (v, i){
        return data[i] = v.charAt(0).toUpperCase() + data[i].substr(1);
    })
    return data; 
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr