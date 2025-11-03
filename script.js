// Menunggu hingga seluruh konten halaman (DOM) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // --- Fungsionalitas Smooth Scrolling untuk Link Navigasi ---
    // Memilih semua link di <nav> yang href-nya dimulai dengan '#'
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Mencegah perilaku default (lompat)
            e.preventDefault();

            // Mengambil target scroll (misal: "#products")
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll ke elemen target dengan halus
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Fungsionalitas Simulasi "Add to Cart" ---
    // Memilih semua tombol dengan class .add-to-cart-btn
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengambil nama produk dari elemen <h3> terdekat di atasnya
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;

            // Menampilkan alert (untuk pasar US/Eropa, gunakan bahasa Inggris)
            alert(productName + " has been added to your cart! (Simulation)");

            // Di website sungguhan, kode ini akan memanggil fungsi
            // untuk menambahkan item ke data keranjang belanja (cart data).
        });
    });

    // --- (Opsional) Efek 'Glitch' sederhana pada Logo saat di-hover ---
    // Anda bisa menghapus ini jika tidak suka
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.classList.add('glitch-effect');
        });
        logo.addEventListener('animationend', () => {
            logo.classList.remove('glitch-effect');
        });
    }

    // Tambahkan CSS ini ke 'Style.CSS' Anda jika menggunakan efek Glitch
    /*
    @keyframes glitch {
        0% { transform: skewX(0); }
        25% { transform: skewX(-5deg); text-shadow: 2px 0 0 var(--color-neon-cyan), -2px 0 0 var(--color-neon-pink); }
        50% { transform: skewX(5deg); }
        75% { transform: skewX(-3deg); text-shadow: -2px 0 0 var(--color-neon-cyan), 2px 0 0 var(--color-neon-pink); }
        100% { transform: skewX(0); }
    }

    .glitch-effect {
        animation: glitch 0.3s cubic-bezier(.25,.46,.45,.94) 1;
    }
    */

});