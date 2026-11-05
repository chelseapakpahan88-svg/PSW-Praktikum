
// Menjalankan kode setelah halaman selesai dimuat
$(document).ready(function () {

    // Memeriksa data ketika form dikirim
    $("#formRegistrasi").on("submit", function (event) {

        // Mencegah halaman dimuat ulang saat tombol diklik
        event.preventDefault();

        // Menghapus pesan error dari pemeriksaan sebelumnya
        $("#errorNama, #errorEmail, #errorPassword, #errorKonfirmasi")
            .empty();

        // Mengambil nilai input dari form
        const nama = $("#nama").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const konfirmasi = $("#konfirmasiPassword").val();

        // Penanda untuk mengetahui apakah data valid
        let valid = true;

        // Memeriksa apakah nama lengkap sudah diisi
        if (nama === "") {
            $("#errorNama").html(
                '<div class="alert alert-danger">Nama lengkap tidak boleh kosong.</div>'
            );
            valid = false;
        }

        // Memeriksa apakah email mengandung karakter @
        if (!email.includes("@")) {
            $("#errorEmail").html(
                '<div class="alert alert-danger">Email harus mengandung karakter @.</div>'
            );
            valid = false;
        }

        // Memeriksa panjang password minimal 6 karakter
        if (password.length < 6) {
            $("#errorPassword").html(
                '<div class="alert alert-danger">Password minimal 6 karakter.</div>'
            );
            valid = false;
        }

        // Memeriksa apakah konfirmasi password sama
        if (password !== konfirmasi) {
            $("#errorKonfirmasi").html(
                '<div class="alert alert-danger">Konfirmasi password harus sama dengan password.</div>'
            );
            valid = false;
        }

        // Jika seluruh data valid, tampilkan modal sukses
        if (valid) {
            const modal = new bootstrap.Modal(
                document.getElementById("modalSukses")
            );

            modal.show();
        }
    });

});
