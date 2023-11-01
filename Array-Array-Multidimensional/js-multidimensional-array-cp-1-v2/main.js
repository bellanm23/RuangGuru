function travelSeat(passengers, seatColumn) {
    let result = []; // buat nampung names
    let names =[]; // buat menampung nama
    let kolom ;
    // console.log (passengers);
    passengers.sort();
    // console.log(passengers);

//     setelah kita masukin datanya kedalam names, kita cek panjang namanya sudah sesuai seatCoullumn atau belum?
//      jika panjang namanya sudah sesuai seatCollumn => namanya perlu dimasukin ke result lalu namanya di ksongin lagi
    if (seatColumn <= 0 ) {
        return "Invalid number"
    } else if (passengers.length <= 0) {
        return "Oops! tickets not sold!"
    }

    for (let i = 0; i < passengers.length; i++) {
        names.push (passengers [i]);

        if (names.length == seatColumn) {
            result.push (names);
            names = [];
        } 
    }
    
    // irfan dan waluyo panjangnya 2
    // seatColumn 3, kurang 1
    kolom = seatColumn - names.length;
    if (names.length < seatColumn && names.length > 0) {
        for (let a = 0; a < kolom; a++){
            names.push ("Seat available");
        }
        result.push (names);
    }
    // console.log(names);
    // console.log(result);

    
    return result
}


console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat