function buyThemAll(books, budget) {
  let data = books.split(",");
  let detailBooks = []
  let listBooks = []
  let total = 0
  data.forEach(item => {
    detailBooks.push(item.split(":"))
  });
  detailBooks.forEach(item => {
    // console.log(item[1])
    let harga = parseInt(item[1])
    let judulBuku = item[0]
    if (total+harga < budget){
      total += parseInt(item[1])
      listBooks.push(item[0]);
    }
   
  })
  // console.log(listBooks)
  if (listBooks.length == 0) {
    return 'Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ' + budget+'.'
  }
  let ret = budget - total;
  return 'Afista membeli ' + listBooks.length + ' buku yaitu ' + listBooks.join(", ") + '. Total belanja ' + total + ', sisa uang Afista adalah ' + ret+'.' // TODO: replace this
}

console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(buyThemAll('The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000', 200000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
