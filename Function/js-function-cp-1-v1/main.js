function checkDatatype(string){
    let result;

    if (string === null){
        return "null";
    } else if (string instanceof Array){
        return "array";
    } else {
        return typeof (string);
    }
    return result;
}

console.log(checkDatatype("hello"))
console.log(checkDatatype('123'))
console.log(checkDatatype(''))
console.log(checkDatatype(123))
console.log(checkDatatype(0))
console.log(checkDatatype(-123))
console.log(checkDatatype(1.23))
console.log(checkDatatype(0.0))
console.log(checkDatatype(true))
console.log(checkDatatype(false))
console.log(checkDatatype(!true))
console.log(checkDatatype(!false))
console.log(checkDatatype(!!true))
console.log(checkDatatype(!!false))
console.log(checkDatatype(null))
console.log(checkDatatype([]))
console.log(checkDatatype([1, 2, 3]))
console.log(checkDatatype(['a', 'b', 'c']))
console.log(checkDatatype([true, false, true]))
console.log(checkDatatype([null, null, null]))
console.log(checkDatatype([undefined, undefined, undefined]))
console.log(checkDatatype([1, 'a', true, null, undefined]))
console.log(checkDatatype({}))
console.log(checkDatatype({ a: 1 }))
console.log(checkDatatype({ a: 'a' }))
console.log(checkDatatype({ a: true }))
console.log(checkDatatype({ a: null }))
console.log(checkDatatype({ a: undefined }))
console.log(checkDatatype({ a: 1, b: 'a', c: true, d: null, e: undefined }))
console.log(checkDatatype(function () {}))
console.log(checkDatatype(() => {}))

module.exports.checkDatatype = checkDatatype;