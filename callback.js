function readBooks(time, book, callback) {
  setTimeout(function () {
    console.log("saya membaca " + book.name);
    let sisaWaktu = 0;
    if (time >= book.timeSpent) {
      sisaWaktu = time - book.timeSpent;
      console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu);
      callback(sisaWaktu); //menjalankan function callback
    } else {
      console.log("waktu saya habis");
      callback(time);
    }
  }, book.timeSpent);
}

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

readBooks(10000, books[0], function (x) {
  return readBooks(x, books[1], function (y) {
    return readBooks(y, books[2], function (z) {
      return readBooks(z, books[3], (function (a){
        return readBooks(a, books[3], ()=>{})
      }));
    });
  });
});