async function readBooksPromise(time, book) {
  console.log("saya mulai membaca " + book.name);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sisaWaktu = time - book.timeSpent;
      if (sisaWaktu >= 0) {
        console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu);
        resolve(sisaWaktu);
      } else {
        console.log("saya sudah tidak punya waktu untuk baca " + book.name);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
}

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

readBooksPromise(10000, books[0])
  .then((x) => {
    return readBooksPromise(x, books[1]);
  })
  .then((y) => {
    return readBooksPromise(y, books[2]);
  })
  .then((z) => {
    return readBooksPromise(z, books[1]);
  })
  .catch(() => {});