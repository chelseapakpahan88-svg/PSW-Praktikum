Nama    : Chelsea S Pakpahan
NIM     : 41426018
Prodi   : TRPL

1. Cara Menjalankan AplikasiBuka 
   - folder proyek (sesi-02) menggunakan VS Code
   - Jalankan server lokal menggunakan ekstensi Live Server (klik kanan pada index.html lalu pilih Open with Live Server).
   - Buka browser dan tekan F12 untuk membuka DevTools guna memantau tab Console dan Application lalu Local Storage.

2. Ringkasan Perubahan Kode
   - Menyiapkan State & Penyimpanan (simpan):
      a. Mendefinisikan konstanta KEY = "pswi.peserta.v1" agar data latihan terisolasi dari data aplikasi lain.
      b. Membuat fungsi simpan() yang membungkus localStorage.setItem(KEY, JSON.stringify(peserta)) di dalam try/catch untuk mengantisipasi kegagalan penyimpanan (misalnya kuota penuh).
      c. Memanggil simpan() setiap kali proses tambah data, ubah data, maupun hapus data berhasil dijalankan.
   - Membaca dan Memvalidasi Data (try/catch):
      a. Sebelum render() awal dijalankan, aplikasi membaca data mentah dari localStorage.getItem(KEY).
      b. Melakukan parsing JSON dan memvalidasi struktur data (memastikan bentuknya adalah Array, setiap item memiliki id berupa bilangan bulat positif, dan nama bertipe string).
      c. Jika data korup atau tidak sesuai, blok catch akan mengosongkan array peserta = [] dan menampilkan pesan peringatan yang jelas di layar tanpa membuat aplikasi berhenti berjalan (crash).
   - Penyesuaian ID dan Fungsi Pembaruan (ubahNama):
      a. Menghitung nilai berikutnya secara dinamis berdasarkan ID terbesar yang ada di array peserta (Math.max(0, ...peserta.map(p => p.id)) + 1) agar urutan ID tetap konsisten setelah data dipulihkan dari storage.
      b. Menambahkan fungsi ubahNama(id, nama) untuk memperbarui nama peserta berdasarkan ID tertentu dan langsung menyimpannya ke localStorage.

3. Catatan Pengamatan & Hasil Pengujian
   |Kasus Uji              |Tindakan yang Dilakukan                                                                                             |Prediksi & Harapan
   |Tambah & Reload        |Menambahkan nama peserta fiktif baru ("Andi") melalui form, lalu menekan tombol Reload (F5).                        |Data "Andi" tersimpan di key pswi.peserta.v1 dan tetap tampil di layar setelah halaman di-reload. Berhasil 
   |Update & Reload        |Menjalankan perintah ubahNama(1, "Rina Wijaya") melalui tab Console DevTools, lalu melakukan Reload (F5).           |Console mengembalikan true, nama peserta ber-ID 1 berubah menjadi "Rina Wijaya", dan perubahan bertahan setelah reload. Berhasil
   |Hapus & Reload         |Menekan tombol "Hapus" pada salah satu peserta, lalu melakukan Reload (F5).                                         |Peserta terhapus dari layar dan datanya ikut hilang dari pswi.peserta.v1 setelah reload. Berhasil
   |Storage Rusak          |Mengubah isi pswi.peserta.v1 menjadi "bukan-json" lewat Console (localStorage.setItem), lalu melakukan Reload (F5). |Aplikasi tidak error fatal; daftar dikosongkan dan muncul pesan "Data lokal bermasalah. Periksa/reset key latihan." Berhasil
   |Reset Terarah          |Menghapus khusus key latihan menggunakan localStorage.removeItem("pswi.peserta.v1") di Console, lalu Reload (F5).   |Key latihan terhapus tanpa mengganggu key lain, dan aplikasi kembali ke data awal yang normal. Berhasil

4. Batasan
   Batas Single-Tab: Aplikasi ini belum menggunakan event listener window.addEventListener("storage", ...). Artinya, jika aplikasi dibuka pada dua tab browser secara bersamaan dan data diubah di Tab A, tampilan pada Tab B tidak akan ikut berubah secara otomatis sampai Tab B di-reload secara manual. 
   Penyimpanan Lokal Browser: Data hanya tersimpan pada satu browser dan perangkat yang sama, sehingga tidak tersinkronisasi ke perangkat lain.

5. AI Use Statement
   - Alat yang digunakan: Gemini (Google AI).
   - Tujuan penggunaan: Memahami konsep alur kerja penyimpanan dan pemulihan state pada localStorage, penempatan blok kode pada struktur JavaScript yang sudah ada, serta penyusunan kerangka laporan pengujian.
   - Bagian bantuan: Penjelasan letak integrasi kode dari modul praktikum (langkah 3 hingga 6), langkah simulasi pengujian melalui DevTools, dan struktur dokumentasi README.md.
   - Verifikasi: Seluruh saran kode dan skenario pengujian telah diuji coba secara langsung oleh praktikan pada browser menggunakan Live Server dan DevTools, serta dipastikan berjalan sesuai harapan sebelum didokumentasikan.