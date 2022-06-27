function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "doraemon", totalPage: 40, isColorful: true },
      { name: "algoritma", totalPage: 250, isColorful: false },
    ];

    if (amountOfPage >= 40) {
      resolve(books.filter((x) => x.totalPage >= amountOfPage && x.isColorful == colorful));
    } else {
      var reason = new Error("Maaf buku di bawah 40 halaman tidak tersedia");
      reject(reason);
    }
  });
}

async function outputAsync() {
  const x = await filterBooksPromise();
  console.log(x);
}

outputAsync();

// Lanjutkan code untuk menjalankan function filterBookPromise ( menggunakan async/await )
// Syarat, masukan parameter dengan kondisi seperti di bawah ini:
// bukunya berwarna dan jumlah halamannya 40 (gunakan async/await untuk kondisi ini)
//books[0].isColorful == true && books[0].totalPage == 40;
// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
//books[0].isColorful == false && books[0].totalPage == 250;
// bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini)
//books[0].isColorful == true && books[0].totalPage == 30;
