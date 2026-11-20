Nama    : Chelsea S Pakpahan
NIM     : 41426018
Prodi   : TRPL


1. Cara Menjalankan Program
Berikut langkah-langkah untuk menjalankan program:
- Ekstrak file ZIP praktikum terlebih dahulu.
- Buka folder week 10 sesi 3 menggunakan Visual Studio Code.
- Pastikan file index.html, folder css, dan folder js berada pada lokasi yang benar.
- Klik kanan pada file index.html, kemudian pilih Open with Live Server.
- Halaman daftar peserta akan terbuka melalui browser.
- Untuk melihat pesan error jika terjadi masalah, tekan tombol F12, kemudian buka tab Console.

2. Penjelasan Perubahan
Pada praktikum ini, saya melakukan beberapa penambahan dan perubahan pada program sebelumnya.
- Menambahkan Form Input
   Saya menambahkan form yang berisi input nama dan tombol Tambah. Form ini digunakan untuk memasukkan nama peserta baru ke dalam daftar. Saya juga menggunakan atribut required agar input nama wajib diisi.
- Menambahkan Data Peserta
   Saya menggunakan array peserta untuk menyimpan data peserta yang terdiri dari ID dan nama. Kemudian, saya menggunakan event submit untuk menangani proses penambahan data. Sebelum data dimasukkan, program menggunakan trim() untuk menghilangkan spasi di awal dan akhir nama serta memeriksa apakah input kosong.
- Menggunakan Fungsi render()
   Saya menggunakan fungsi render() untuk menampilkan seluruh data peserta ke halaman web. Di dalam fungsi ini, replaceChildren() digunakan untuk mengosongkan daftar sebelumnya sebelum menampilkan data terbaru. Dengan demikian, data tidak muncul berulang ketika fungsi dipanggil kembali.
- Menambahkan Tombol Hapus
   Saya menambahkan tombol Hapus pada setiap peserta. Tombol tersebut memiliki data-id yang digunakan untuk mengetahui ID peserta yang akan dihapus.
- Menerapkan Event Delegation
   Saya menggunakan addEventListener("click") pada elemen daftar peserta, bukan memasang event satu per satu pada setiap tombol. Dengan menggunakan closest() dan dataset.id, program dapat mengetahui tombol yang diklik dan menghapus peserta berdasarkan ID-nya. Setelah data dihapus, fungsi render() dipanggil kembali agar tampilan sesuai dengan data terbaru.

3. Hasil Uji
Berikut adalah pengujian yang dilakukan berdasarkan fitur pada program:

| Pengujian                 | Tindakan                                                                              | Hasil yang Diharapkan |
| Menampilkan peserta       | Menjalankan program dengan data awal Rina dan Budi.                                   | Kedua nama berhasil ditampilkan. |
| Form input                | Memasukkan nama peserta kemudian menekan tombol Tambah.                               | Nama baru berhasil ditambahkan ke daftar. |
| Submit menggunakan Enter  | Mengisi nama kemudian menekan Enter. | Data peserta berhasil ditambahkan. |
| Validasi input kosong     | Menekan tombol Tambah tanpa mengisi nama. | Pesan "Nama harus diisi" ditampilkan. |
| Validasi spasi            | Memasukkan nama yang hanya berisi spasi. | Data ditolak karena dianggap kosong. |
| Tombol hapus              | Menekan tombol Hapus pada salah satu peserta. | Peserta yang dipilih berhasil dihapus. |
| Event delegation          | Menambahkan peserta baru kemudian menekan tombol Hapus miliknya.                       | Tombol Hapus pada peserta yang baru ditambahkan tetap dapat digunakan. |
| Render ulang              | Menambahkan atau menghapus peserta. | Daftar diperbarui sesuai perubahan data. |

Bukti pengerjaan dan pengujian disimpan dalam folder bukti, yang berisi screenshot form input, penambahan peserta, tombol hapus, serta event delegation dan pengujian.

4. Penjelasan Perubahan dari Praktikum Sebelumnya
Pada pengerjaan sebelumnya, program masih berfokus pada pemilihan elemen HTML, pembuatan elemen baru, dan menampilkan data peserta menggunakan JavaScript. Pada sesi ini, program dikembangkan dengan menambahkan form input, validasi nama, tombol hapus, dan event delegation. Dengan perubahan tersebut, program tidak hanya menampilkan data yang sudah tersedia, tetapi juga dapat menerima data baru dan menghapus data peserta melalui interaksi pengguna.

5. Batasan Program
Program ini masih memiliki beberapa batasan, yaitu:
- Data peserta hanya disimpan sementara di dalam array JavaScript.
- Data yang sudah ditambahkan atau dihapus akan kembali ke kondisi awal ketika halaman browser di-refresh.
- Program belum menggunakan database atau localStorage untuk menyimpan data secara permanen.
- Validasi yang digunakan masih sederhana dan hanya memeriksa apakah nama kosong atau berisi spasi.
- Program belum memiliki fitur untuk mengubah atau mengedit nama peserta.
- Tampilan program masih sederhana dan belum menggunakan framework tambahan.

6. AI Use Statement
Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami beberapa bagian kode JavaScript, seperti penggunaan DOM, form input, validasi, fungsi render(), dan event delegation. AI juga membantu saya memahami cara kerja penambahan dan penghapusan data peserta serta menyusun penjelasan pada README. Saran yang diberikan tetap saya periksa kembali dengan melihat kode program dan menjalankannya melalui browser agar saya dapat memahami hasilnya.