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
   KONFIGURASI BACKEND - Ganti untuk setiap klien
================================================================= */
const BACKEND_CONFIG = {
  // Ganti dengan URL Apps Script-mu
  appsScriptUrl:
    "https://script.google.com/macros/s/AKfycbyurMNoASVFb2Xykk9TgxaGfix_V5YqGs4SejCIAbFmCBx1v66kpGC24mzUHrXBS5qu/exec",
  // Ganti dengan nama tab di Google Sheet untuk klien ini
  sheetName: "minimalis",
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
  // --- Fungsi untuk Lightbox Galeri ---
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah link terbuka secara normal

      const imageUrl = this.href;

      // Buat elemen untuk lightbox
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox-overlay";

      const image = document.createElement("img");
      image.src = imageUrl;

      lightbox.appendChild(image);
      document.body.appendChild(lightbox);

      // Hapus lightbox saat diklik di mana saja
      lightbox.addEventListener("click", () => {
        document.body.removeChild(lightbox);
      });
    });
  });
  // --- Fungsi untuk Tombol Salin Rekening ---
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const accountNumber = document.querySelector(targetId).innerText;

      navigator.clipboard
        .writeText(accountNumber)
        .then(() => {
          // Beri feedback ke pengguna
          const buttonText = this.querySelector("span");
          buttonText.innerText = "Tersalin!";

          // Kembalikan teks tombol setelah 2 detik
          setTimeout(() => {
            buttonText.innerText = "Salin";
          }, 2000);
        })
        .catch((err) => {
          console.error("Gagal menyalin: ", err);
          alert("Gagal menyalin nomor rekening.");
        });
    });
  });
  // --- Fungsi untuk Buku Tamu (Guestbook) ---
  const commentForm = document.getElementById("comment-form");
  const commentsList = document.getElementById("comments-list");

  // Fungsi untuk memuat komentar dari Google Sheet
  function loadComments() {
    if (!commentsList) return; // Hentikan jika elemen tidak ada
    // Tambahkan nama sheet sebagai parameter di URL
    fetch(`${BACKEND_CONFIG.appsScriptUrl}?sheet=${BACKEND_CONFIG.sheetName}`)
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = ""; // Kosongkan daftar sebelum diisi ulang
        if (data && data.length > 0) {
          data.forEach((comment) => {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment-item";
            commentDiv.innerHTML = `
                            <p class="name">${comment.Nama} <span class="status">${comment.Kehadiran}</span></p>
                            <p class="message">${comment.Ucapan}</p>
                        `;
            commentsList.appendChild(commentDiv);
          });
        }
      })
      .catch((error) => console.error("Error loading comments:", error));
  }

  // Fungsi untuk mengirim komentar
  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerText = "Mengirim...";

      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      data.sheetName = BACKEND_CONFIG.sheetName; // Tambahkan nama sheet ke data yang dikirim

      fetch(BACKEND_CONFIG.appsScriptUrl, {
        method: "POST",
        mode: "no-cors", // Diperlukan untuk beberapa konfigurasi Apps Script
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Ucapan berhasil terkirim! Terima kasih.");
          commentForm.reset();
          // Tunggu sebentar agar data di sheet terupdate sebelum dimuat ulang
          setTimeout(loadComments, 2000);
        })
        .catch((error) => {
          console.error("Error submitting comment:", error);
          alert("Gagal mengirim ucapan. Silakan coba lagi.");
        })
        .finally(() => {
          submitButton.disabled = false;
          submitButton.innerText = "Kirim Ucapan";
        });
    });
  }

  // Muat komentar saat halaman pertama kali dibuka
  loadComments();
});
