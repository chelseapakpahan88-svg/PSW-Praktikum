Nama : Chelsea S Pakpahan
NIM : 41426018
Prodi : TRPL

4. Penjelasan bagian penting
Bagian kode	Kegunaan
display: flex	Menyusun logo dan navigasi serta mengatur posisinya.
display: grid	Menyusun kartu produk dalam bentuk kolom.
grid-template-columns: 1fr	Menampilkan satu produk per baris pada layar mobile.
@media (min-width: 600px)	Mengubah layout saat lebar layar mencapai 600 piksel.
@media (min-width: 900px)	Menampilkan tiga kolom produk pada layar desktop lebar.
object-fit: contain	Menampilkan gambar secara utuh tanpa memotongnya.
&copy;	Menampilkan simbol hak cipta © pada footer.

Mengapa menggunakan mobile first?

Mobile first berarti desain dibuat terlebih dahulu untuk layar kecil, kemudian disesuaikan untuk layar yang lebih besar menggunakan media query. Dengan demikian, website tetap mudah digunakan pada HP, tablet, maupun komputer.

6. Cara menjalankan dan menguji
1. Simpan kedua kode pada file index.html dan style.css.
2. Masukkan tiga gambar produk ke folder images.
3. Buka index.html menggunakan browser.
4. Periksa apakah logo, navigasi, tiga produk, harga, dan footer muncul.
5. Uji responsivitas dengan membuka Developer Tools di browser, lalu aktifkan mode perangkat mobile.
6. Ubah ukuran layar dan pastikan produk ditampilkan satu kolom di layar kecil, dua kolom mulai 600 piksel, dan tiga kolom mulai 900 piksel.
Catatan: Nama produk dan harga di atas merupakan contoh untuk tugas, bukan data toko online sungguhan.

# README - PinkStore

## 1. Tujuan

Website PinkStore dibuat untuk menampilkan halaman utama toko online sederhana yang dapat diakses melalui perangkat mobile maupun desktop. Website ini menggunakan HTML untuk membuat struktur halaman dan CSS untuk mengatur tampilan.

Halaman website terdiri dari header yang berisi logo dan navigasi, konten utama yang menampilkan tiga produk beserta gambar, nama, dan harga, serta footer yang berisi informasi hak cipta. CSS Flexbox, CSS Grid, dan media query digunakan agar tampilan website dapat menyesuaikan ukuran layar.

## 2. Cara Menjalankan

1. Buat folder proyek bernama `pinkstore`.
2. Simpan file HTML dengan nama `index.html` dan kode CSS dengan nama `style.css`.
3. Buat folder `images` untuk menyimpan gambar produk.
4. Masukkan tiga gambar produk ke dalam folder `images` dengan nama:
   - `produk1.jpg`
   - `produk2.jpg`
   - `produk3.jpg`
5. Pastikan file `index.html`, `style.css`, dan folder `images` berada pada lokasi yang benar.
6. Buka file `index.html` menggunakan browser seperti Google Chrome atau Microsoft Edge.
7. Untuk memeriksa tampilan mobile, gunakan fitur Developer Tools pada browser dan aktifkan mode perangkat mobile.

## 3. Hasil Uji

Pengujian dilakukan dengan memeriksa tampilan dan fungsi dasar website.

- **Header:** Logo PinkStore dan menu Home, Produk, serta Kontak ditampilkan.
- **Konten produk:** Tiga produk ditampilkan dengan gambar, nama, dan harga.
- **Navigasi:** Menu dapat digunakan untuk menuju bagian halaman yang sesuai.
- **Footer:** Informasi hak cipta ditampilkan pada bagian bawah halaman.
- **Tampilan mobile:** Produk ditampilkan dalam satu kolom pada layar kecil.
- **Tampilan tablet:** Produk ditampilkan dalam dua kolom mulai lebar layar 600 piksel.
- **Tampilan desktop:** Produk ditampilkan dalam tiga kolom mulai lebar layar 900 piksel.

Hasil pengujian tersebut merupakan hasil yang diharapkan berdasarkan kode. Pengujian langsung tetap perlu dilakukan di browser untuk memastikan seluruh bagian berjalan dengan baik.

## 4. Batasan

- Website masih berupa halaman toko online sederhana dan belum memiliki fitur transaksi.
- Harga dan nama produk masih berupa contoh.
- Belum tersedia fitur keranjang belanja, pembayaran, login, dan pencarian produk.
- Menu navigasi hanya mengarah ke bagian halaman yang tersedia.
- Gambar produk harus disediakan sendiri dan disimpan sesuai nama serta lokasi yang ditentukan.
- Website belum terhubung dengan database atau sistem pengelolaan produk.
- Tampilan responsif diatur berdasarkan ukuran layar menggunakan media query, tetapi masih perlu diuji pada berbagai perangkat dan browser.
