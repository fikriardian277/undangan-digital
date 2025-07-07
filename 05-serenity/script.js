document.addEventListener("DOMContentLoaded", () => {
  // Fungsi untuk menganimasikan elemen saat di-scroll
  function activateScrollAnimations() {
    // Pilih semua section yang ingin dianimasikan
    // KODE BARU
    const sectionsToAnimate = document.querySelectorAll("#quote, #couple");

    if (sectionsToAnimate.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika section masuk ke layar, tambahkan kelas 'is-visible'
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Jika section keluar dari layar, hapus kelasnya agar animasi bisa berulang
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2, // Animasi terpicu saat 20% bagian section terlihat
      }
    );

    sectionsToAnimate.forEach((section) => observer.observe(section));
  }

  // Panggil fungsi animasi
  activateScrollAnimations();
});
