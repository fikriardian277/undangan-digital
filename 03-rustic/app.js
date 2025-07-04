/* =================================================================
    LOGIKA INTERAKTIF UNTUK TEMA RUSTIC (FINAL DENGAN SEMUA FITUR)
================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // === Seleksi Elemen Utama ===
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  const btnSaveDate = document.getElementById("btnSaveDate");

  let countdownStarted = false;

  // === Logika untuk Tombol "Save the Date" ===
  if (btnSaveDate) {
    const namaPria = "Reyhan";
    const namaWanita = "Risna";
    const tanggalMulai = new Date("2025-07-04T10:00:00+07:00");
    const tanggalSelesai = new Date("2025-07-04T18:00:00+07:00");
    const lokasi = "Jl. Kenangan Indah No. 4, Bandung, Jawa Barat";
    const deskripsi = "Undangan Pernikahan Reyhan & Risna";
    const start = tanggalMulai.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const end = tanggalSelesai.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(
      namaPria
    )}+dan+${encodeURIComponent(
      namaWanita
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      deskripsi
    )}&location=${encodeURIComponent(lokasi)}&sf=true&output=xml`;
    btnSaveDate.href = calendarUrl;
  }

  // === Buat Observer untuk animasi on-scroll ===
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
    { threshold: 0.2 } // Trigger saat 20% elemen terlihat
  );

  // === Fungsi untuk Memulai Countdown ===
  function startCountdown() {
    const weddingDate = new Date("Jul 4, 2025 10:00:00").getTime();

    const countdownInterval = setInterval(function () {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerText = days < 10 ? "0" + days : days;
        hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
      }

      if (distance < 0) {
        clearInterval(countdownInterval);
        const timerEl = document.getElementById("countdown-timer");
        if (timerEl) timerEl.innerHTML = "<h4>The Day is Here!</h4>";
      }
    }, 1000);
  }

  // === Fungsi untuk Mengaktifkan Semua Sensor Animasi ===
  function activateObservers() {
    // Seleksi semua elemen yang butuh animasi di sini
    const sectionsToObserve = document.querySelectorAll(
      "#hero-main, #kutipan, #mempelai, #save-the-date, .story-milestone"
    );
    sectionsToObserve.forEach((section) => {
      if (section) observer.observe(section);
    });
  }

  // === Logika Animasi Pembuka Undangan ===
  if (openButton && heroCover && mainContent) {
    const invitationOpener = document.getElementById("invitation-opener");
    setTimeout(() => {
      invitationOpener.classList.add("is-visible");
    }, 800);
    setTimeout(() => {
      invitationOpener.classList.add("is-opening");
    }, 2000);

    openButton.addEventListener("click", () => {
      invitationOpener.classList.add("drop-down");
      setTimeout(() => {
        mainContent.classList.remove("hidden");
        mainContent.classList.add("fade-in");

        // Panggil SATU FUNGSI untuk mengaktifkan semua sensor
        activateObservers();

        if (!countdownStarted) {
          startCountdown();
          countdownStarted = true;
        }
      }, 500);
      setTimeout(() => {
        heroCover.classList.add("hidden");
        body.style.overflow = "auto";
      }, 1200);
    });
  }

  // === Logika Nama Tamu ===
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  const guestNameElement = document.querySelector(".guest-name");
  if (guest && guestNameElement) {
    guestNameElement.innerText = guest.replace(/\+/g, " ");
  }
});
