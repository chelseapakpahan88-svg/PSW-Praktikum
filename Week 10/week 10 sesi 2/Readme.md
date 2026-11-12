Nama    : Chelsea S Pakpahan
NIM     : 41426018
Prodi   : TRPL

1. Tujuan Praktikum
Pada praktikum ini, saya belajar bagaimana cara memilih elemen HTML menggunakan JavaScript, membuat elemen baru, dan menampilkan data ke halaman web. Saya juga belajar menggunakan array untuk menyimpan data peserta serta fungsi `render()` untuk menampilkan data tersebut ke halaman.

2. Struktur File
Berikut adalah file yang digunakan dalam praktikum ini:
- index.html digunakan untuk membuat struktur halaman web.
- style.css digunakan untuk mengatur tampilan halaman web.
- main.js berisi kode JavaScript untuk mengatur dan menampilkan daftar peserta.
- Folder bukti digunakan untuk menyimpan screenshot hasil praktikum.

3. Cara Menjalankan Program
Berikut langkah-langkah untuk menjalankan program:

    1. Ekstrak file proyek terlebih dahulu.
    2. Buka folder proyek menggunakan Visual Studio Code.
    3. Pastikan file index.html, style.css, dan main.js berada di dalam folder proyek.
    4. Klik kanan pada file index.html, kemudian pilih Open with Live Server.
    5. Setelah itu, halaman praktikum akan terbuka di browser.
    6. Untuk melihat apakah terdapat error, tekan tombol F12, kemudian pilih tab Console.

4. Penjelasan Pengerjaan
Pada awal praktikum, saya menggunakan document.querySelector() untuk memilih elemen HTML yang memiliki ID daftar. Setelah itu, saya mencoba membuat elemen baru menggunakan document.createElement("li"). Selanjutnya, saya menggunakan textContent untuk menampilkan tulisan <b>Rina</b>. Hasilnya, tulisan tersebut muncul seperti teks biasa dan tidak menjadi tebal. Hal ini karena textContent hanya menampilkan teks dan tidak membaca tag HTML. Kemudian, saya membuat array bernama peserta yang berisi dua nama, yaitu Rina dan Budi. Untuk menampilkan data tersebut ke halaman web, saya menggunakan fungsi render(). Di dalam fungsi tersebut, saya menggunakan replaceChildren() untuk mengosongkan daftar sebelum menampilkan data kembali. Dengan cara ini, ketika fungsi render() dijalankan lebih dari satu kali, data peserta tidak akan muncul berulang. Saya juga menambahkan pesan "Belum ada peserta" ketika array tidak memiliki data. Namun, pada kode yang saya kerjakan, bagian untuk menampilkan pesan tersebut masih berada di luar fungsi render().

5. Hasil Pengujian

Berikut hasil pengujian yang dilakukan selama praktikum:
| Pengujian               | Tindakan                                            | Hasil |
| Menampilkan peserta     | Menjalankan program dengan data Rina dan Budi.      | Kedua nama berhasil ditampilkan di halaman. |
| Menggunakan textContent | Memasukkan tulisan <b>Rina</b>.                     | Tulisan tampil sebagai teks biasa dan tidak menjadi tebal. |
| Menjalankan render()    | Memanggil fungsi render() untuk menampilkan daftar. | Data ditampilkan kembali tanpa muncul berulang. |
| Array kosong            | Mengosongkan isi array peserta.                     | Pesan "Belum ada peserta" berhasil ditampilkan. |
| Selector salah          | Mencoba memilih elemen dengan ID yang tidak sesuai. | Hasilnya null dan terjadi error ketik hasil tersebut digunakan. |

Bukti pengujian berupa screenshot hasil praktikum, pengujian selector, dan kondisi array kosong disimpan di dalam folder bukti.

6. Catatan Error
Selama praktikum, saya mempelajari bahwa kesalahan dalam menuliskan selector dapat menyebabkan querySelector() menghasilkan nilai null. Jika hasil tersebut digunakan untuk mengakses atau menambahkan elemen, program dapat mengalami error. Untuk mengatasinya, saya perlu memeriksa kembali penulisan selector dan memastikan ID yang digunakan di JavaScript sesuai dengan ID pada HTML. Selain itu, jika perubahan kode belum terlihat di browser, saya perlu memastikan file sudah disimpan dan halaman sudah di-refresh. Jika tampilan CSS tidak berubah, saya perlu memeriksa kembali apakah file CSS sudah terhubung dengan benar.

7. Batasan Program

Program yang saya buat masih sederhana karena data peserta masih ditulis langsung di dalam array JavaScript. Program ini juga belum memiliki form untuk menambahkan peserta maupun tombol untuk menghapus peserta.Selain itu, pesan ketika daftar kosong masih ditulis di luar fungsi render(). Oleh karena itu, bagian tersebut masih perlu diperbaiki agar pesan dapat menyesuaikan secara otomatis ketika data peserta berubah.

8. AI Use Statement

Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami beberapa kode JavaScript, seperti querySelector(), createElement(), textContent, append(), dan render(). AI juga membantu saya memahami hasil praktikum dan menyusun penjelasan untuk README. Saran yang diberikan kemudian saya periksa kembali dengan melihat kode dan menjalankan program di browser. Dengan bantuan tersebut, saya menjadi lebih mudah memahami fungsi dari setiap kode yang digunakan. Namun, saya tetap perlu mempelajari dan memahami kode tersebut agar dapat menjelaskannya sendiri.