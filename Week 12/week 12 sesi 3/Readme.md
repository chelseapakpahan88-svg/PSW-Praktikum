Nama    : Chelsea S Pakpahan
NIM     : 41426018
Prodi   : TRPL

1. Cara Menjalankan
Project ini dapat dijalankan menggunakan Visual Studio Code dan browser dengan bantuan ekstensi Live Server.
   Langkah-langkah menjalankannya adalah sebagai berikut:
   - Buka folder project melalui Visual Studio Code.
   - Pastikan file index.html, style.css, main.js, dan folder gambar sudah tersedia di dalam folder project.
   - Klik kanan pada file index.html.
   - Pilih menu Open with Live Server.
   - Setelah itu, website akan terbuka secara otomatis melalui browser. Pada halaman website terdapat form untuk menambahkan peserta serta daftar peserta yang telah tersimpan.

2. Penjelasan Perubahan
Beberapa fitur dan perubahan yang terdapat pada project ini adalah sebagai berikut:
- Menampilkan daftar peserta: Program menggunakan fungsi render() untuk menampilkan seluruh data peserta pada halaman website.
- Menambahkan peserta: Pengguna dapat memasukkan nama melalui form, kemudian menekan tombol Tambah. Program menggunakan trim() untuk memastikan nama yang dimasukkan tidak hanya berupa spasi.
- Menghapus peserta: Setiap peserta memiliki tombol Hapus. Data peserta dihapus berdasarkan ID menggunakan fungsi filter().
- Menyimpan data peserta: Fungsi simpan() digunakan untuk menyimpan data ke Local Storage dengan bantuan localStorage.setItem(). Data disimpan dalam format JSON.
- Membaca data peserta: Ketika website dibuka, program mengambil data yang tersimpan menggunakan localStorage.getItem(), kemudian mengubahnya menjadi objek JavaScript dengan JSON.parse().
- Validasi data: Program melakukan pemeriksaan terhadap data yang tersimpan, seperti memastikan data berbentuk array, ID merupakan bilangan bulat positif, dan nama berupa teks. Jika data tidak sesuai atau terjadi kesalahan saat membaca JSON, program akan memberikan pesan bahwa data lokal mengalami masalah.
- Mengubah nama peserta: Di dalam file main.js terdapat fungsi ubahNama() yang digunakan untuk mengganti nama peserta. Fungsi ini juga memeriksa agar nama yang dimasukkan tidak kosong setelah penggunaan trim().
- Tampilan dan kemudahan penggunaan: Website dilengkapi dengan label pada input, pesan menggunakan aria-live, serta tanda fokus pada input dan tombol. Hal ini bertujuan agar website lebih mudah digunakan.

3. Hasil Uji
Pengujian dilakukan dengan menjalankan website melalui browser dan menggunakan DevTools untuk memeriksa proses kerja program. Hasil pengujian juga disesuaikan dengan bukti yang tersedia di dalam folder bukti.

| No. | Pengujian                   | Hasil                                                                                            |
| 1 | Menampilkan daftar peserta    | Data peserta berhasil ditampilkan pada halaman website.                                          |
| 2 | Menambahkan peserta           | Nama yang dimasukkan melalui form berhasil ditambahkan ke daftar dan disimpan di Local Storage.  |
| 3 | Menghapus peserta             | Data peserta dapat dihapus berdasarkan ID dengan menggunakan fungsi filter().                    |
| 4 | Memeriksa dengan Debugger     | Nilai ID dan jumlah data pada array peserta dapat dilihat ketika proses penghapusan dilakukan.   |
| 5 | Memeriksa array kosong        | Bukti pengujian ketika array tidak memiliki data tersedia di dalam folder bukti.                 |
| 6 | Memeriksa tampilan teks       | Nama peserta ditampilkan menggunakan textContent, sehingga data ditampilkan sebagai teks biasa.  |
| 7 | Memeriksa penyimpanan         | Data berhasil disimpan ke Local Storage dan dapat dibaca kembali saat halaman website dibuka.    |

4. Batasan
Dalam project ini masih terdapat beberapa fitur yang belum selesai atau memiliki keterbatasan, yaitu:
- Fungsi ubahNama() sudah dibuat di dalam file main.js, tetapi belum dihubungkan dengan tombol edit pada daftar peserta.
- Tombol Reset data latihan dan Tampilkan salam sudah tersedia pada file HTML, tetapi belum memiliki fungsi JavaScript.
- Data peserta hanya disimpan di Local Storage browser. Oleh karena itu, data tidak otomatis tersedia pada browser atau perangkat lain.
- Proses penyimpanan data belum dilengkapi dengan penanganan khusus apabila localStorage.setItem() mengalami kegagalan.
- Website masih dijalankan menggunakan server lokal dan belum dipublikasikan ke layanan hosting.

5. Kesimpulan
Berdasarkan praktikum yang telah dilakukan, saya mendapatkan pemahaman mengenai cara menyimpan dan membaca data menggunakan Local Storage. Selain itu, saya juga belajar mengelola data peserta melalui fitur tambah dan hapus, melakukan pemeriksaan data JSON, serta menggunakan Debugger untuk melihat perubahan nilai ID dan isi array.
Melalui praktikum ini, saya juga memahami bahwa dalam membuat sebuah website tidak hanya perlu memperhatikan fungsi program, tetapi juga tampilan, kemudahan penggunaan, dan keamanan data.

6. AI Use Statement
Pada praktikum ini, saya menggunakan AI sebagai alat bantu untuk mempelajari dan memahami kode program, khususnya materi JavaScript, Local Storage, CRUD, debugging, keamanan, dan aksesibilitas. AI juga membantu saya dalam memahami kesalahan yang ditemukan pada kode program serta memberikan penjelasan mengenai cara memperbaikinya. Setiap saran yang diberikan oleh AI saya periksa kembali dengan menjalankan website menggunakan Live Server dan melakukan pengujian melalui browser. Dengan bantuan AI, saya menjadi lebih mudah memahami bagian-bagian kode yang sebelumnya masih sulit dimengerti. Meskipun demikian, saya tetap berusaha mempelajari dan memahami setiap kode yang digunakan agar dapat menjelaskan proses pengerjaannya dengan baik. Dalam penggunaan AI, saya tidak memasukkan informasi rahasia seperti password, API key, maupun data pribadi.