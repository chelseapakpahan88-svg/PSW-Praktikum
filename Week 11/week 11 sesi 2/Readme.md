Nama : Chelsea S Pakpahan  
NIM : 41426018 
Prodi : D IV TRPL

1. Cara Menjalankan
- Ekstrak file ZIP praktikum ke folder yang diinginkan.
- Buka folder proyek sesi-02 menggunakan Visual Studio Code.
- Pastikan semua file sudah tersedia, terutama index.html, style.css, main.js, dan folder data yang berisi file kegiatan.json.
- Pastikan ekstensi Live Server sudah terpasang di VS Code.
- Klik kanan pada file index.html, lalu pilih Open with Live Server.
- Setelah halaman terbuka di browser, klik tombol Muat kegiatan untuk mengambil data dari file JSON.
- Jika berhasil, daftar kegiatan HTML dan CSS akan muncul pada halaman web.
- Untuk memeriksa apakah program berjalan dengan baik, tekan F12 untuk membuka Developer Tools, lalu periksa bagian Console dan Network.

2. Penjelasan Praktikum
Pada praktikum ini, saya belajar cara menggunakan file JSON sebagai tempat menyimpan data yang akan ditampilkan pada halaman web. Data tersebut disimpan dalam file kegiatan.json yang berisi dua kegiatan, yaitu HTML dan CSS. Setiap kegiatan memiliki informasi berupa id, judul, dan kuota. Sebelum digunakan, saya memastikan bahwa penulisan JSON sudah benar agar datanya dapat dibaca oleh program.

Selanjutnya, saya membuat tampilan halaman web menggunakan HTML. Di dalam halaman tersebut terdapat tombol Muat kegiatan, tempat untuk menampilkan pesan, dan daftar kegiatan. Tombol digunakan untuk memulai proses pengambilan data, sedangkan daftar digunakan untuk menampilkan hasilnya. Setelah itu, saya menggunakan JavaScript untuk memilih elemen HTML berdasarkan ID agar elemen tersebut dapat dihubungkan dengan kode JavaScript.

Pada bagian JavaScript, saya menggunakan fetch() untuk mengambil data dari file JSON. Saya juga menggunakan async/await untuk mengatur proses pengambilan data. Selain itu, saya mempelajari Promise, yaitu fitur JavaScript yang digunakan untuk menangani proses yang membutuhkan waktu dan bisa berhasil atau gagal. Setelah data diterima, program memeriksa r.ok untuk mengetahui apakah permintaan berhasil. Jika terjadi kesalahan, misalnya file tidak ditemukan atau menghasilkan HTTP 404, program akan menangani kesalahan tersebut menggunakan catch dan menampilkan pesan gagal memuat data.

Setelah data berhasil diambil, program memeriksa bentuk datanya menggunakan Array.isArray(). Pemeriksaan ini bertujuan untuk memastikan bahwa data yang diterima berbentuk array. Kemudian, program membaca setiap data menggunakan perulangan for...of dan memeriksa apakah bagian judul memiliki tipe data string. Jika sesuai, program membuat elemen daftar menggunakan document.createElement() dan menampilkan judul menggunakan textContent. Dengan menggunakan textContent, tulisan yang mengandung tag HTML akan ditampilkan sebagai teks biasa dan tidak dianggap sebagai elemen HTML oleh browser.

Terakhir, saya menghubungkan tombol Muat kegiatan dengan fungsi pengambilan data menggunakan addEventListener("click", muat). Dengan begitu, data akan diambil dan ditampilkan ketika tombol tersebut diklik. Dari praktikum ini, saya memahami bahwa mengambil data dari JSON tidak hanya membutuhkan fetch(), tetapi juga perlu memeriksa apakah permintaan berhasil, memastikan bentuk data sudah sesuai, dan menampilkan data pada halaman web dengan benar.

3. Batasan
Pada praktikum ini, data yang digunakan masih berasal dari file JSON lokal sehingga jika ingin menambahkan kegiatan baru, data harus diubah secara manual. Penanganan kesalahan pada program juga masih sederhana. Program belum memiliki tampilan khusus saat data sedang dimuat, pesan ketika data kosong, dan fitur timeout untuk membatasi waktu pengambilan data. Selain itu, pemeriksaan data baru dilakukan pada bentuk array dan tipe data judul, sedangkan bagian id dan kuota belum diperiksa secara lengkap. Walaupun masih memiliki beberapa kekurangan, program ini sudah dapat digunakan untuk mempelajari dasar pengambilan data JSON menggunakan Fetch, Promise, dan async/await, serta cara menangani kesalahan yang mungkin terjadi.

4. Hasil Pengujian
| Pengujian       | Hasil    | Keterangan |
| JSON lokal      | Berhasil | Dua data kegiatan berhasil dibaca. |
| Fetch           | Berhasil | Data berhasil diambil dari file JSON. |
| HTTP 404        | Berhasil | Kesalahan 404 berhasil dikenali oleh program. |
| Array kosong    | Berhasil | Kondisi array kosong dapat diperiksa melalui Console. |
| Judul markup    | Berhasil | Tag HTML ditampilkan sebagai teks biasa. |
| Validasi JSON   | Berhasil | Format dan struktur JSON sudah benar. |

Penjelasan Hasil Pengujian
a. JSON valid dan Fetch berhasil
File JSON dapat dibuka melalui server lokal. Ketika tombol Muat kegiatan diklik, program berhasil mengambil data yang berisi dua object. Data tersebut juga dapat dilihat melalui Console. Pada bagian Network, permintaan ke file JSON menunjukkan status berhasil.
b. Array kosong
Ketika program diuji menggunakan array kosong, Console menunjukkan bahwa jumlah data adalah 0. Karena tidak ada data yang dapat dibaca oleh perulangan for...of, tidak ada kegiatan yang ditampilkan pada daftar. Program sudah dapat membaca kondisi tersebut, tetapi belum menampilkan pesan khusus seperti "Belum ada kegiatan".
c. HTTP 404
Untuk menguji kesalahan saat mengambil data, alamat file pada fetch() diubah sementara menjadi hilang.json. Karena file tersebut tidak ditemukan, server memberikan respons HTTP 404. Pemeriksaan r.ok kemudian membuat program mengenali adanya kesalahan dan menanganinya melalui catch. Setelah pengujian selesai, alamat file dikembalikan ke ./data/kegiatan.json.
d. Judul mengandung markup HTML
Pada pengujian ini, judul pertama di dalam file JSON berisi tulisan <p> HTML </p>. Hasilnya, tulisan tersebut ditampilkan sesuai bentuk aslinya pada halaman web. Hal ini terjadi karena program menggunakan textContent, sehingga browser menampilkan tag HTML sebagai teks biasa dan tidak memprosesnya sebagai elemen HTML.

5. AI USE STATEMENT
Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami materi JSON, Promise, async/await, dan Fetch. AI juga membantu saya menyusun penjelasan mengenai fungsi kode ke dalam README. Setelah mendapatkan penjelasan, saya memeriksa kembali dengan membaca kode program, menjalankannya melalui browser, serta melihat hasil pengujian pada bagian Console dan Network. AI hanya digunakan untuk membantu proses belajar, bukan untuk menggantikan pemahaman dan pengerjaan praktikum saya sendiri. Saya juga tidak memasukkan password, API key rahasia, atau data pribadi ke dalam AI.