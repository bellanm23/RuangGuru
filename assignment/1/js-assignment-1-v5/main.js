function travelDiscount(id, amount) {
    let status = "";
    let hargaTiket = 0;
    let result = "";
    let hasil="";
    let a = "";

    
    for(i=0; i <= id.length - 1; i++) {
        a += id[i];
        if (a.includes("STD")){
            status =  "STUDENT";
            if (amount > 20){
                hargaTiket = 20000 - (20000 * 0.2);
                hargaTiket = hargaTiket * amount;
                
            } else {
                hargaTiket = 20000
                hargaTiket = hargaTiket * amount
            }
        } else if (a.includes("CORP")){
            status = "CORPORATE";
            if (amount > 30){
                hargaTiket = 50000 - (50000 * 0.25);
                hargaTiket = hargaTiket * amount;
                
            } else{
                hargaTiket = 50000;
                hargaTiket = hargaTiket * amount;
            }
        } if (!id.includes("STD")&&!id.includes("CORP")) {
            return "Maaf, voucher yang anda miliki tidak valid!"
        }
    }
    let simpan = "";
    simpan += a;
    return "Selamat! Voucher untuk " +status+ " dengan id " +simpan+ " berhasil di redeem, total yang harus dibayarkan sebesar Rp. " +hargaTiket+"."
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount

