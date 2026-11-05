5. Cara menjalankan program
1. Buat folder form-registrasi di komputer atau buka Visual Studio Code.
2. Buat tiga file: index.html, style.css, dan script.js, lalu masukkan kode sesuai bagian di atas.
3. Pastikan komputer terhubung ke internet karena Bootstrap dan jQuery dimuat melalui CDN.
4. Buka file index.html menggunakan browser, atau gunakan ekstensi Live Server di VS Code.
5. Isi form dan klik Daftar Sekarang untuk menguji validasi.
6. Hasil pengujian
Berikut skenario pengujian untuk memastikan semua ketentuan soal sudah terpenuhi.
No.	Data yang diuji	Hasil yang diharapkan
1	Nama kosong	Error nama muncul
2	Email tanpa @	Error email muncul
3	Password kurang dari 6 karakter	Error password muncul
4	Password dan konfirmasi berbeda	Error konfirmasi muncul
5	Semua data valid	Modal sukses muncul
6	Dibuka melalui layar ponsel	Form menyesuaikan lebar layar

7. Penjelasan singkat kode
- Bootstrap: digunakan untuk membuat form, tombol, tata letak responsif, pesan error, dan modal.
- jQuery: digunakan untuk mengambil nilai input dan memeriksa data ketika tombol diklik.
- event.preventDefault(): mencegah halaman dimuat ulang saat form dikirim.
- trim(): menghapus spasi di awal dan akhir nama serta email.
- valid: menjadi penanda apakah seluruh data sudah memenuhi ketentuan.
- Modal Bootstrap: menampilkan pesan sukses jika seluruh validasi berhasil.
Catatan: Validasi email pada contoh ini hanya memeriksa keberadaan karakter @, sesuai soal. Form ini merupakan simulasi tampilan dan validasi di sisi browser; data belum disimpan ke database atau dikirim ke server.