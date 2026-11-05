const greetingButton =
  document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
  alert('Selamat belajar Pengembangan Situs Web I!');
  console.log('main.js berhasil dijalankan');
});


//Praktikum Week 9:
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

const jumlah = Number("6");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = [" "];
for (const item of judul) console.log(item);