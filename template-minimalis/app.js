/* =================================================================
   KONFIGURASI ACARA - Ganti semua data di sini
================================================================= */
const EVENT_DETAILS = {
  title: "Pernikahan Nama Pasangan",
  date: "2025-10-12",
  startTime: "10:00",
  endTime: "14:00",
  location: "Nama Gedung, Alamat Lengkap, Kota",
  description: "Kami mengundang Anda untuk hadir di hari bahagia kami.",
  mapUrl: "https://maps.app.goo.gl/LOKASI_ANDA",
  description: "Kami mengundang Anda untuk hadir di hari bahagia kami.",
};

/* =================================================================
   LOGIKA UTAMA WEBSITE
================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // --- Seleksi Elemen DOM ---
  const openButton = document.getElementById("open-invitation");
  const coverSection = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const saveDateButton = document.getElementById("save-the-date");

  // --- Fungsi untuk Membuka Undangan ---
  openButton.addEventListener("click", () => {
    coverSection.classList.add("hidden");
    mainContent.classList.remove("hidden");
    document.body.style.overflow = "auto";

    setTimeout(() => {
      coverSection.style.display = "none";
    }, 1000);
  });

  // --- Fungsi untuk Save The Date ---
  saveDateButton.addEventListener("click", () => {
    function formatGoogleDate(date, time) {
      return new Date(`${date}T${time}:00`)
        .toISOString()
        .replace(/-|:|\.\d{3}/g, "");
    }
    const startDate = formatGoogleDate(
      EVENT_DETAILS.date,
      EVENT_DETAILS.startTime
    );
    const endDate = formatGoogleDate(EVENT_DETAILS.date, EVENT_DETAILS.endTime);
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      EVENT_DETAILS.title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      EVENT_DETAILS.description
    )}&location=${encodeURIComponent(EVENT_DETAILS.location)}`;
    window.open(googleCalendarUrl, "_blank");
  });

  // --- Fungsi untuk Animasi Konten ---
  const contentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    contentObserver.observe(el);
  });
  // --- Fungsi untuk Countdown Timer & Tombol Peta ---
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const mapButton = document.getElementById("map-button");

  // Atur link tombol peta dari konfigurasi
  if (mapButton) {
    mapButton.href = EVENT_DETAILS.mapUrl;
  }

  const countdown = () => {
    const eventDate = new Date(EVENT_DETAILS.date).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(interval);
      document.querySelector(".countdown").innerHTML =
        "<h4>Acara Telah Berlangsung</h4>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tambahkan '0' di depan jika angka < 10
    if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  };

  // Jalankan countdown setiap detik
  const interval = setInterval(countdown, 1000);
});
