// Nama        : Christian Steven Manurung.	
// NIM         : 41425031.	
// Prodi       : D4 Teknologi Rekayasa Perangkat Lunak.	

let pegawai = [];            // Array untuk menyimpan semua data pegawai
let jabatanDipilih = "";     // Variabel untuk menyimpan jabatan yang dipilih

function pilihJabatan(jabatan) { // Tombol Memilih jabatan
    jabatanDipilih = jabatan;                      // Simpan nama jabatan ke variabel
    let buttons = document.querySelectorAll(".jabatan-btn"); // Ambil semua tombol jabatan
    // Hapus status aktif dari semua tombol, beri aktif ke yang dipilih
    buttons.forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === jabatan.toLowerCase()) {
            btn.classList.add("active");               // Tambah kelas aktif
        } 
        else {
            btn.classList.remove("active");            // Hilangkan dari lainnya
        }
    });
}
function tambahPegawai() { // Tambah Data Pegawai
    let nama = document.getElementById("nama").value;       // Ambil input nama
    let gaji = parseFloat(document.getElementById("gaji").value); // Ambil input gaji
    // Validasi input wajib diisi dan jabatan dipilih
    if (nama === "" || isNaN(gaji) || gaji <= 0 || jabatanDipilih === "") {
        alert("Mohon isi data dengan benar dan pilih jabatan!");
        return;                                               // Hentikan fungsi jika salah
    }
    // Hitung tunjangan (Manager dapat 20% dari gaji)
    let tunjangan = (jabatanDipilih === "Manager") ? gaji * 0.2 : 0;
    // Hitung total sebelum pajak
    let total = gaji + tunjangan;
    // Hitung pajak 10% dari total
    let pajak = total * 0.1;
    // Hitung gaji bersih setelah pajak
    let gajiBersih = total - pajak;
    // Simpan semua data pegawai dalam array
    pegawai.push({
        nama: nama,
        jabatan: jabatanDipilih,
        gaji: gaji,
        tunjangan: tunjangan,
        pajak: pajak,
        bersih: gajiBersih
    });
    tampilkanTabel();                                     // Panggil fungsi tampilkan tabel
    // Reset input dan tombol setelah ditambahkan
    document.getElementById("nama").value = "";
    document.getElementById("gaji").value = "";
    jabatanDipilih = "";
    document.querySelectorAll(".jabatan-btn").forEach(btn => btn.classList.remove("active"));
}
function tampilkanTabel() { // Menampilkan data pegawai ke tabel
    let tbody = document.getElementById("tabelPegawai").getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";                                   // Kosongkan tabel sebelum isi ulang
    // Jika belum ada data, kosongkan teks hasil tertinggi
    if (pegawai.length === 0) {
        document.getElementById("tertinggi").innerHTML = "";
        return;
    }
    let pegawaiTerbaik = pegawai[0];                        // Asumsikan pegawai pertama terbaik
    // Loop untuk menampilkan semua data dan mencari yang gaji bersihnya paling tinggi
    for (let p of pegawai) {
        if (p.bersih > pegawaiTerbaik.bersih) {
            pegawaiTerbaik = p;                                 // Ganti jika ketemu lebih tinggi
        }
        // Tambahkan baris baru ke tabel
        let row = `
            <tr>
                <td>${p.nama}</td>
                <td>${p.jabatan}</td>
                <td>Rp${p.gaji.toLocaleString()}</td>
                <td>Rp${p.tunjangan.toLocaleString()}</td>
                <td>Rp${p.pajak.toLocaleString()}</td>
                <td>Rp${p.bersih.toLocaleString()}</td>
            </tr>`;
        tbody.innerHTML += row;                               // Masukkan baris ke tabel
    }

    // Tampilkan teks pegawai bergaji tertinggi
    document.getElementById("tertinggi").innerHTML =
    `Pegawai dengan gaji tertinggi adalah ${pegawaiTerbaik.nama} (${pegawaiTerbaik.jabatan}) 
    dengan gaji bersih Rp${pegawaiTerbaik.bersih.toLocaleString()}`;
}
