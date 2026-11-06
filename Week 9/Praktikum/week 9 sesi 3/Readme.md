Nama    : Chelsea S Pakpahan
NIM     : 41426018
Prodi   : TRPL

1. Uji Normal dan Tidak Valid
Setelah melakukan pengujian dengan beberapa nilai, yaitu nilai normal dan nilai yang tidak sesuai (0, 1, 5, 6, dan 1.5), saya dapat melihat bahwa fungsi validasi sudah berjalan dengan baik. Nilai yang sesuai dengan ketentuan dapat diproses, sedangkan nilai yang tidak memenuhi aturan seperti 0, 6, dan 1.5 akan ditolak dan menghasilkan nilai null. Dengan begitu, program dapat menghindari kesalahan saat melakukan perhitungan.

2. Penjelasan return null
return null digunakan untuk menghentikan fungsi apabila data yang dimasukkan tidak sesuai dengan ketentuan. Perintah ini akan mengembalikan nilai kosong sehingga proses perhitungan tidak dilanjutkan. Hal ini membantu mencegah terjadinya kesalahan pada program.

3. Perbedaan console.log dan return
console.log: Digunakan untuk menampilkan informasi atau hasil ke layar konsol. Perintah ini hanya menampilkan hasil agar kita bisa melihatnya dan tidak mengembalikan nilai dari fungsi.

return: Digunakan untuk mengembalikan hasil dari sebuah fungsi. Hasil tersebut nantinya bisa disimpan atau digunakan kembali dalam proses lain di program.

4. Koleksi Kegiatan
Tindakan:
Saya menambahkan satu data kegiatan baru ke dalam array kegiatan, misalnya kegiatan JavaScript dengan jumlah kuota tertentu. Setelah itu, saya menggunakan .filter() untuk memilih kegiatan yang memiliki kuota lebih dari 0. Kemudian, saya menggunakan .map() untuk mengambil bagian judul dari kegiatan yang sudah disaring.

Hasil Nyata:
Ketika semua kuota diubah menjadi 0, hasil dari console.log(tersedia) menampilkan array kosong []. Hal ini terjadi karena tidak ada kegiatan yang memenuhi syarat penyaringan. Hasil dari console.log(judulTersedia) juga menampilkan [] karena tidak ada judul kegiatan yang dapat diambil.

5. Destructuring dan Scope
Tindakan:
Saya menggunakan kode const { judul, kuota } = kegiatan[0]; untuk mengambil dua bagian data, yaitu judul dan kuota dari objek pertama pada array kegiatan. Selanjutnya, saya menjalankan console.log(judul, kuota); untuk melihat hasilnya di konsol.

Hasil Nyata:
Hasil yang muncul di konsol sesuai dengan data pada objek pertama, yaitu menampilkan judul HTML dan jumlah kuotanya sebesar 20. Dengan cara ini, saya dapat mengambil beberapa data dari objek dengan penulisan kode yang lebih singkat.

6. Cara Menjalankan
Membuat File: Saya memisahkan kode menjadi dua file, yaitu utils.js untuk menyimpan fungsi bantuan dan main.js untuk menjalankan proses utama program.

Menghubungkan ke HTML: Saya menghubungkan file main.js ke HTML menggunakan kode <script type="module" src="main.js"></script>.

Menjalankan Program: Saya menggunakan Live Server di VS Code agar program dapat berjalan melalui browser dan fitur import serta export bisa digunakan.

7. Penjelasan Perubahan
ES Modules: Kode dibagi menjadi beberapa file agar lebih mudah dibaca dan dikelola. Saya menggunakan export untuk membagikan fungsi dari utils.js dan import untuk menggunakannya di main.js.

Filter dan Map: Saya menggunakan .filter() untuk memilih kegiatan berdasarkan jumlah kuotanya, kemudian .map() untuk mengambil judul dari kegiatan yang memenuhi syarat.

Object Destructuring: Saya menggunakan destructuring untuk mengambil data dari objek dengan lebih mudah tanpa harus menuliskan setiap properti secara terpisah.

8. Hasil Uji
Modul Berhasil Terhubung: Fungsi hitungTotal yang disimpan di utils.js berhasil dipanggil dan dijalankan melalui main.js.

Destructuring dan Filter Berhasil: Program berhasil mengambil data dari objek pertama dan menampilkan hasil penyaringan kegiatan melalui konsol browser.

Kode Lebih Teratur: Dengan memisahkan kode ke dalam dua file, program menjadi lebih rapi dan setiap file memiliki tugas masing-masing.

9. Batasan
Harus Menggunakan Server Lokal: Program yang menggunakan import dan export perlu dijalankan melalui server lokal seperti Live Server. Jika file HTML dibuka secara langsung dari folder komputer, fitur modul JavaScript bisa tidak berjalan.

Pemeriksaan File: Nu Html Checker digunakan untuk memeriksa kode HTML. Sementara itu, file JavaScript tidak dapat diperiksa menggunakan validator tersebut karena memiliki aturan penulisan yang berbeda.

AI statement : Saya menggunakan ai untuk membantu saya mencari penjelasan mengenai isi isi dari Readme saya.