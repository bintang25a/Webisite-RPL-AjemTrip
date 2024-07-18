document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment submitted successfully!');
});

document.getElementById('keluar').addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm('Apakah Anda yakin ingin membatalkan pembayaran?')) {
        window.location.href = '../akun.html';
    }
});