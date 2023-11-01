function vocalCounter(array) {
    const vocal = ['a', 'i', 'u', 'e', 'o']
    let count = 0
    let data = []
    for (let str of array) {
        // Melakukan pengecekan string
        if (typeof str === 'string') {
            // Melakuakn pengecekan data vocal
            if (vocal.includes(str.toLocaleLowerCase())) {
                data.push(str)
                count++
            }
        }
    }
    if (data < 1) 
    return "Tidak ada huruf vokal yang ditemukan";

    return  `Jumlah vokal yang ditemukan sebanyak ${count} berupa ${data.join("")}`;
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
