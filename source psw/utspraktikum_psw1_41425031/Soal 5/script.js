$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); // Menghentikan form submit agar bisa validasi manual

        let isValid = true;

        // Reset error messages
        $('.alert').hide();

        // Validasi Nama Lengkap
        let fullName = $('#fullName').val().trim();
        if (fullName === '') {
            $('#nameError').show();
            isValid = false;
        }

        // Validasi Email
        let email = $('#email').val().trim();
        if (!email.includes('@')) {
            $('#emailError').show();
            isValid = false;
        }

        // Validasi Password
        let password = $('#password').val().trim();
        if (password.length < 6) {
            $('#passwordError').show();
            isValid = false;
        }

        // Validasi Konfirmasi Password
        let confirmPassword = $('#confirmPassword').val().trim();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').show();
            isValid = false;
        }

        // Jika form valid, tampilkan modal
        if (isValid) {
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });
});
