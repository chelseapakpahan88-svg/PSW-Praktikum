Nam : Chelsea S Pakpahan
NIM : 41426018
Prodi : TRPL

5. Penjelasan sesuai ketentuan soal
Ketentuan	Penerapan dalam kode
Header dan navigasi	Elemen <header>, <nav>, dan <ul>
Tiga artikel berita	Tiga elemen <article> yang berisi gambar, judul, dan ringkasan
Sidebar opsional	Elemen <aside> berisi tautan berita populer
Footer	Elemen <footer> berisi hak cipta
Flexbox atau Grid	display: flex pada header dan navigasi, serta display: grid pada artikel
Mobile di bawah 768px	grid-template-columns: 1fr, sehingga artikel tersusun vertikal
Tablet mulai 768px	Dua kolom artikel
Desktop mulai 1100px	Tiga kolom artikel
Efek hover judul	.news-info h3 a:hover mengubah warna menjadi oranye
Desain konsisten	Variabel warna, font Arial, jarak, dan sudut kartu yang seragam

6. Cara menjalankan dan menguji
1. Buat folder berita-kampus-itdel.
2. Simpan kode pertama sebagai index.html dan kode kedua sebagai style.css dalam folder yang sama.
3. Buka file index.html melalui browser atau gunakan ekstensi Live Server di VS Code.
4. Uji tampilan ponsel dengan membuka DevTools menggunakan F12, lalu pilih ikon perangkat seluler.
5. Ubah lebar tampilan menjadi 375 px, 768 px, dan 1200 px. Pastikan artikel berubah dari satu kolom menjadi dua kolom, kemudian tiga kolom.
6. Arahkan kursor ke judul berita dan pastikan warnanya berubah.
Catatan: Gambar menggunakan URL eksternal sehingga membutuhkan koneksi internet. Judul dan tautan berita masih berupa contoh untuk tugas, bukan berita resmi IT Del


Berita Kampus IT Del

1. Tujuan

Proyek ini dibuat untuk memenuhi tugas Pengembangan Situs Web I, yaitu membuat halaman utama portal berita kampus menggunakan HTML5 dan CSS. Halaman ini dirancang agar dapat diakses dengan nyaman melalui laptop maupun ponsel.

Halaman terdiri dari header, menu navigasi, tiga artikel berita yang berisi gambar, judul, dan ringkasan, sidebar berita populer, serta footer.

2. Cara Menjalankan

Siapkan file index.html dan style.css dalam satu folder.

Buka folder proyek menggunakan Visual Studio Code.

Pastikan file style.css sudah terhubung dengan index.html.

Klik kanan pada file index.html, kemudian pilih Open with Live Server jika ekstensi Live Server sudah tersedia.

Jika tidak menggunakan Live Server, buka file index.html langsung melalui browser.

Pastikan koneksi internet tersedia agar gambar dari URL eksternal dapat ditampilkan.

3. Hasil Uji

Pengujian dilakukan untuk memastikan halaman berfungsi sesuai dengan ketentuan tugas.

Struktur halaman: Header, navigasi, tiga artikel berita, sidebar, dan footer berhasil disusun menggunakan HTML5.

Tampilan mobile: Pada lebar layar di bawah 768px, artikel ditampilkan dalam satu kolom secara vertikal.

Tampilan tablet: Pada lebar layar mulai dari 768px, artikel ditampilkan dalam dua kolom.

Tampilan desktop: Pada lebar layar mulai dari 1100px, artikel ditampilkan dalam tiga kolom.

Efek hover: Judul berita berubah warna ketika kursor diarahkan ke judul.

Tampilan desain: Warna, ukuran gambar, jarak, dan jenis huruf dibuat konsisten agar halaman mudah dibaca.

4. Batasan

Isi berita yang digunakan masih berupa contoh dan belum berasal dari berita resmi IT Del.

Gambar menggunakan URL eksternal sehingga membutuhkan koneksi internet.

Tautan berita populer dan menu navigasi masih berupa tautan menuju bagian tertentu pada halaman, belum terhubung ke halaman berita yang terpisah.

Halaman ini hanya menampilkan informasi dan belum memiliki fitur pengelolaan berita atau database.

Pengujian responsivitas perlu dilakukan pada beberapa ukuran layar untuk memastikan tampilan sesuai dengan perangkat pengguna.