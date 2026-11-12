const greetingButton =
  document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
  alert('Selamat belajar Pengembangan Situs Web I!');
  console.log('main.js berhasil dijalankan');
});


//Praktikum Week 9 sesi 2:
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

const jumlah = Number("6");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = ["HTML", "CSS", "Audit", "Java"];
for (const item of judul) console.log(item);

//week 9 sesi 3:
console.log(hitungTotal(9, 10000));

const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "JavaScript", kuota: 25 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);

{
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);
}

import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));