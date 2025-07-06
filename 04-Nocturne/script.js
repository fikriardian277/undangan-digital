// Menunggu semua elemen halaman dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
  // === PENGATURAN ELEMEN ===
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const body = document.body;

  // === FUNGSI-FUNGSI ===

  // Fungsi untuk Countdown Timer
  function startCountdown() {
    // PENTING: Ganti tanggal ini dengan tanggal acaramu
    const weddingDate = new Date("Jul 8, 2025 08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-timer").innerHTML =
          "<p>Acara Telah Berlangsung</p>";
        return;
      }

      const pad = (num) => (num < 10 ? "0" + num : num);

      document.getElementById("days").innerText = pad(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      );
      document.getElementById("hours").innerText = pad(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      document.getElementById("minutes").innerText = pad(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      document.getElementById("seconds").innerText = pad(
        Math.floor((distance % (1000 * 60)) / 1000)
      );
    }, 1000);
  }

  // Fungsi untuk Animasi Scroll
  function activateScrollAnimations() {
    // FIX #2: Pastikan #event-details ada di sini
    const sectionsToAnimate = document.querySelectorAll(
      "#the-vow, .profile-entry, #event-details"
    );

    if (sectionsToAnimate.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sectionsToAnimate.forEach((section) => {
      observer.observe(section);
    });
  }

  // === EVENT LISTENER UTAMA ===
  if (openButton) {
    openButton.addEventListener("click", (event) => {
      event.preventDefault();

      heroCover.classList.add("fading-out");
      mainContent.classList.remove("hidden");
      body.style.overflow = "auto";

      setTimeout(() => {
        heroCover.remove();
      }, 1200);

      // FIX #1: Panggil kedua fungsi di sini setelah undangan dibuka
      startCountdown();
      activateScrollAnimations();
    });
  }
});
