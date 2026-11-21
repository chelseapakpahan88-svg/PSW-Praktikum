Nama : Chelsea S Pakpahan
NIM : 41426018
Prodi : D4 Teknologi Rekayasa Perangkat Lunak

1. Cara Menjalankan
Program dijalankan menggunakan Live Server pada Visual Studio Code. Setelah halaman web terbuka di browser, tekan tombol Muat kegiatan untuk mengambil data dari file JSON yang tersedia. Data yang berhasil diambil akan ditampilkan pada halaman web.

2. Penjelasan Perubahan
Pada praktikum ini, dibuat sebuah file JSON yang berisi data kegiatan. Kemudian, ditambahkan tombol Muat kegiatan, tempat untuk menampilkan pesan, dan daftar untuk menampilkan data kegiatan.

Selanjutnya, dibuat fungsi JavaScript menggunakan fetch untuk mengambil data dari file JSON. Data yang diambil akan diperiksa terlebih dahulu untuk memastikan formatnya sudah benar. Jika data sesuai, program akan menampilkannya pada halaman web.

Selain itu, ditambahkan beberapa fitur seperti pesan ketika data sedang dimuat, pesan jika data kosong, serta batas waktu untuk menghentikan proses pengambilan data jika terlalu lama. Fitur-fitur ini membantu pengguna mengetahui kondisi program saat dijalankan.

3. Hasil Uji
Pengujian Data Valid

Pengujian dilakukan dengan menggunakan data yang benar. Program berhasil mengambil dan menampilkan data kegiatan pada halaman web.

Hasil: Berhasil.

Pengujian HTTP 404
Pengujian dilakukan dengan mengubah alamat file ke file yang tidak tersedia. Program berhasil menampilkan pesan gagal memuat karena file tidak ditemukan.

Hasil: Berhasil.

Pengujian Object Bukan Array
Pengujian dilakukan dengan mengubah isi JSON menjadi object. Program berhasil menolak data karena formatnya tidak sesuai dengan yang dibutuhkan, yaitu array.

Hasil: Berhasil.

Pengujian Judul dengan Markup
Pengujian dilakukan dengan memasukkan judul yang berisi tag HTML. Hasilnya, tag tersebut hanya ditampilkan sebagai teks biasa dan tidak dijalankan oleh browser.

Hasil: Berhasil.

Pengujian Data Kosong
Pengujian dilakukan dengan mengubah isi JSON menjadi array kosong. Program berhasil menampilkan pesan "Belum ada kegiatan" karena tidak terdapat data yang bisa ditampilkan.

Hasil: Berhasil.

Pengujian JSON Rusak
Pengujian dilakukan dengan membuat format JSON menjadi tidak lengkap atau salah. Program berhasil menampilkan pesan gagal memuat dan error dapat dilihat melalui Console.

Hasil: Berhasil.

Pengujian Jaringan Lambat
Pengujian dilakukan menggunakan fitur throttling pada DevTools untuk mengatur kecepatan jaringan. Program berhasil menampilkan proses pemuatan data sesuai dengan kondisi jaringan yang digunakan.

Hasil: Berhasil.

Pengujian Timeout
Pengujian dilakukan dengan memberikan batas waktu pada proses pengambilan data. Jika waktu yang ditentukan sudah habis, program akan menghentikan proses tersebut secara otomatis.

Hasil: Berhasil.

Pengujian Offline
Pengujian dilakukan dengan mengaktifkan mode Offline pada DevTools. Program tidak dapat mengambil data dan berhasil menampilkan pesan gagal memuat karena tidak ada koneksi jaringan.

Hasil: Berhasil.

4. Batasan
Program ini masih sederhana karena hanya menggunakan data dari file JSON lokal. Program juga belum terhubung dengan database atau sumber data dari internet. Selain itu, program harus dijalankan menggunakan Live Server. Jika file HTML dibuka secara langsung melalui browser, proses pengambilan data menggunakan fetch dapat mengalami kendala karena aturan keamanan CORS.