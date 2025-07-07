/* =================================================================
   KONFIGURASI UTAMA - SEMUA DATA KLIEN DIUBAH DI SINI
================================================================= */
const CLIENT_DATA = {
  // Nama Mempelai
  namaPanggilanPria: "Ardi",
  namaPanggilanWanita: "Rania",
  namaLengkapPria: "Ardi Pratama, S.Kom.",
  namaLengkapWanita: "Rania Safitri, S.E.",

  // Detail Acara (PASTIKAN FORMAT INI BENAR)
  acara: {
    judul: "Akad & Resepsi",
    // Format: TAHUN-BULAN-HARI T JAM:MENIT:DETIK (24 Jam)
    tanggalISO_UTC: "2025-12-01T08:00:00",
    tanggalTeks: "Senin, 01 Desember 2025",
    waktuTeks: "08.00 WIB - Selesai",
    lokasi:
      "The Vow Premiere Venue, Jalan Kenangan Manis Blok C No. 7, Bandung",
    urlPeta: "https://maps.app.goo.gl/LOKASI_ANDA",
  },

  // ... (Sisa data lain biarkan seperti kodemu yang sekarang) ...
  fotoPria: "assets/images/mempelai-pria.jpg",
  fotoWanita: "assets/images/mempelai-wanita.jpg",
  fotoPenutup: "assets/images/prewedding-penutup.jpg",
  heroImages: {
    cover: "assets/images/cover.jpg",
    slideshow: ["assets/images/galeri-1.jpg", "assets/images/galeri-2.jpg"],
  },
  backgrounds: {
    kutipan: "assets/images/galeri-3.jpg",
    mempelai: "assets/images/galeri-4.jpg",
    saveTheDate: "assets/images/galeri-5.jpg",
    loveStory: "assets/images/galeri-6.jpg",
    weddingGift: "assets/images/galeri-2.jpg",
    penutup: "assets/images/prewedding-penutup.jpg",
  },
  instagramPria:
    "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
  instagramWanita:
    "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
  orangTuaPria: "Putra Kedua dari Bapak H. Subagyo & Ibu Hj. Ibu Hj. Lestari",
  orangTuaWanita:
    "Putri Kedua dari Bapak Drs. Endang Wijaya & Ibu Amalia, S.Pd.",
  kutipan: {
    teks: "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”",
    sumber: "Q.S. Ar-Rum: 21",
  },
  loveStory: [
    {
      judul: "Pertemuan Pertama",
      deskripsi:
        "Cerita singkat tentang bagaimana kami pertama kali bertemu dan kesan pertama yang tak terlupakan.",
    },
    {
      judul: "Momen Spesial",
      deskripsi:
        "Sebuah momen penting yang membuat kami sadar bahwa kami ditakdirkan untuk bersama selamanya.",
    },
    {
      judul: "Lamaran",
      deskripsi:
        "Kisah di balik momen lamaran yang romantis dan penuh haru, langkah awal kami menuju jenjang pernikahan.",
    },
  ],
  galeri: [
    "assets/images/galeri-1.jpg",
    "assets/images/galeri-2.jpg",
    "assets/images/galeri-3.jpg",
    "assets/images/galeri-4.jpg",
    "assets/images/galeri-5.jpg",
    "assets/images/galeri-6.jpg",
  ],
  hadiah: [
    {
      bank: "BCA",
      logo: "assets/images/logo-bca.png",
      noRek: "1234567890",
      atasNama: "a.n. Ardi Pratama",
    },
    {
      bank: "BCA",
      logo: "assets/images/logo-bca.png",
      noRek: "0987654321",
      atasNama: "a.n. Rania Safitri",
    },
  ],
  musik: "assets/audio/laksanasurga.mp3",
  ucapanPenutup:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doa restunya, kami ucapkan terima kasih.",
  backend: {
    url: "https://script.google.com/macros/s/AKfycbx0dx13pseqcEKjH9gs4fy7T1w0bVh0-LA6q4Z57Vo22JNdYWwuty0yDJaOEy7Qqt4/exec",
    namaSheet: "minimalis",
  },
  kredit: {
    nama: "TemuHati",
    instagram: "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
  },
};

/* =================================================================
   JEMBATAN DATA - FUNGSI UNTUK MENGISI DATA KE HTML
================================================================= */
// (Fungsi populateData() tidak perlu diubah, biarkan seperti yang terakhir kali)
function populateData() {
  const setElement = (id, type, value) => {
    const el = document.getElementById(id);
    if (el) {
      if (type === "text") el.innerText = value;
      else if (type === "src") el.src = value;
      else if (type === "href") el.href = value;
      else if (type === "innerHTML") el.innerHTML = value;
    }
  };
  const coupleNames = `${CLIENT_DATA.namaPanggilanPria} & ${CLIENT_DATA.namaPanggilanWanita}`;
  document.title = `Undangan Pernikahan ${coupleNames}`;
  setElement("music-source", "src", CLIENT_DATA.musik);
  document.getElementById("background-music").load();
  const heroCoverEl = document.getElementById("hero-cover");
  if (heroCoverEl)
    heroCoverEl.style.backgroundImage = `url('${CLIENT_DATA.heroImages.cover}')`;
  const heroMainEl = document.getElementById("hero-main");
  if (heroMainEl && CLIENT_DATA.heroImages.slideshow.length >= 2) {
    heroMainEl.style.backgroundImage = `url('${CLIENT_DATA.heroImages.slideshow[0]}')`;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `#hero-main::after { background-image: url('${CLIENT_DATA.heroImages.slideshow[1]}'); }`;
    document.head.appendChild(styleSheet);
  }
  const bgConfig = CLIENT_DATA.backgrounds;
  for (const sectionId in bgConfig) {
    const el =
      document.getElementById(sectionId) ||
      document.getElementById(`${sectionId}-section`);
    if (el)
      el.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgConfig[sectionId]}')`;
  }
  setElement("cover-couple-names", "text", coupleNames);
  setElement("main-couple-names", "text", coupleNames);
  setElement("quote-text", "text", CLIENT_DATA.kutipan.teks);
  setElement("quote-source", "text", CLIENT_DATA.kutipan.sumber);
  setElement("groom-photo", "src", CLIENT_DATA.fotoPria);
  setElement("groom-name", "text", CLIENT_DATA.namaLengkapPria);
  setElement("groom-parents", "text", CLIENT_DATA.orangTuaPria);
  setElement("groom-instagram", "href", CLIENT_DATA.instagramPria);
  setElement("bride-photo", "src", CLIENT_DATA.fotoWanita);
  setElement("bride-name", "text", CLIENT_DATA.namaLengkapWanita);
  setElement("bride-parents", "text", CLIENT_DATA.orangTuaWanita);
  setElement("bride-instagram", "href", CLIENT_DATA.instagramWanita);
  setElement("event-date", "text", CLIENT_DATA.acara.tanggalTeks);
  setElement("event-title", "text", CLIENT_DATA.acara.judul);
  setElement("event-date-detail", "text", CLIENT_DATA.acara.tanggalTeks);
  setElement("event-time-detail", "text", CLIENT_DATA.acara.waktuTeks);
  setElement("event-location-detail", "text", CLIENT_DATA.acara.lokasi);
  setElement("map-button", "href", CLIENT_DATA.acara.urlPeta);
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    timelineContainer.innerHTML = CLIENT_DATA.loveStory
      .map(
        (story) =>
          `<div class="timeline-item animate-on-scroll"><div class="timeline-content glass-panel"><h3>${story.judul}</h3><p>${story.deskripsi}</p></div></div>`
      )
      .join("");
  }
  const galleryContainer = document.getElementById("gallery-grid-container");
  if (galleryContainer) {
    galleryContainer.innerHTML = CLIENT_DATA.galeri
      .map(
        (imgSrc) =>
          `<a href="${imgSrc}" class="gallery-item animate-on-scroll"><img src="${imgSrc}" alt="Galeri foto"></a>`
      )
      .join("");
  }
  const giftContainer = document.getElementById("gift-container");
  if (giftContainer) {
    giftContainer.innerHTML = CLIENT_DATA.hadiah
      .map(
        (gift, index) =>
          `<div class="gift-card glass-panel animate-on-scroll"><img src="${
            gift.logo
          }" alt="Logo Bank ${
            gift.bank
          }" class="bank-logo"><p class="account-number" id="rek${index + 1}">${
            gift.noRek
          }</p><p>a.n. ${
            gift.atasNama
          }</p><button class="copy-button" data-target="#rek${
            index + 1
          }"><i class="fas fa-copy"></i><span>Salin</span></button></div>`
      )
      .join("");
  }
  setElement("closing-photo", "src", CLIENT_DATA.fotoPenutup);
  setElement("closing-text", "text", CLIENT_DATA.ucapanPenutup);
  setElement("closing-couple-names", "text", coupleNames);
  setElement("footer-instagram", "href", CLIENT_DATA.kredit.instagram);
  setElement(
    "footer-credit",
    "innerHTML",
    `Made with <i class="fas fa-heart"></i> by ${CLIENT_DATA.kredit.nama}`
  );
}

/* =================================================================
   LOGIKA INTERAKTIF
================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  populateData();

  // ... (sisa seleksi elemen DOM tetap sama) ...
  const openButton = document.getElementById("open-invitation");
  const coverSection = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const saveDateButton = document.getElementById("save-the-date");
  const musicPlayer = document.getElementById("background-music");
  const musicToggleButton = document.getElementById("music-toggle-btn");

  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  if (guest) {
    document.getElementById("guest-name").innerText = guest.replace(/\+/g, " ");
  }

  openButton.addEventListener("click", () => {
    coverSection.classList.add("hidden");
    mainContent.classList.remove("hidden");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      coverSection.style.display = "none";
      musicToggleButton.classList.remove("hidden");
      if (musicPlayer)
        musicPlayer.play().catch((e) => console.log("Autoplay diblokir"));
      musicToggleButton.classList.add("playing");
    }, 1000);
  });

  if (saveDateButton) {
    saveDateButton.addEventListener("click", () => {
      const eventTitle = `Pernikahan ${CLIENT_DATA.namaPanggilanPria} & ${CLIENT_DATA.namaPanggilanWanita}`;
      const { tanggalISO_UTC, lokasi } = CLIENT_DATA.acara;
      const eventDescription = `Acara pernikahan ${CLIENT_DATA.namaLengkapPria} dan ${CLIENT_DATA.namaLengkapWanita}.`;
      const startDate = new Date(tanggalISO_UTC)
        .toISOString()
        .replace(/-|:|\.\d{3}/g, "");
      const endDate = new Date(
        new Date(tanggalISO_UTC).getTime() + 4 * 60 * 60 * 1000
      )
        .toISOString()
        .replace(/-|:|\.\d{3}/g, "");
      const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventTitle
      )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
        eventDescription
      )}&location=${encodeURIComponent(lokasi)}`;
      window.open(googleCalendarUrl, "_blank");
    });
  }

  // ✅ KODE PERBAIKAN (BENAR)
  const initCountdown = () => {
    const daysEl = document.getElementById("days"),
      hoursEl = document.getElementById("hours"),
      minutesEl = document.getElementById("minutes"),
      secondsEl = document.getElementById("seconds");

    // 1. DEKLARASIKAN VARIABEL DI SINI DENGAN 'let'
    let countdownInterval;

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      console.error("Satu atau lebih elemen countdown tidak ditemukan.");
      return;
    }

    const targetDate = new Date(CLIENT_DATA.acara.tanggalISO_UTC).getTime();

    if (isNaN(targetDate)) {
      // ... (kode error format tanggal)
      return;
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdownInterval); // <-- Baris ini sekarang aman
        document.querySelector(".countdown").innerHTML =
          "<h4>Acara Telah Berlangsung</h4>";
        return;
      }

      const format = (num) => String(num).padStart(2, "0");
      daysEl.innerText = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
      hoursEl.innerText = format(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      minutesEl.innerText = format(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      secondsEl.innerText = format(Math.floor((distance % (1000 * 60)) / 1000));
    };

    updateCountdown(); // Panggil sekali agar tidak ada kedipan
    // 2. HILANGKAN 'const' DAN LANGSUNG ISI VARIABEL YANG SUDAH DIDEKLARASIKAN
    countdownInterval = setInterval(updateCountdown, 1000);
  };
  initCountdown();

  // ... (sisa kode untuk interaksi, komentar, animasi, dll. tetap sama) ...
  document.body.addEventListener("click", function (e) {
    const galleryItem = e.target.closest(".gallery-item");
    if (galleryItem) {
      e.preventDefault();
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox-overlay";
      lightbox.innerHTML = `<img src="${galleryItem.href}">`;
      document.body.appendChild(lightbox);
      lightbox.addEventListener("click", () =>
        document.body.removeChild(lightbox)
      );
    }

    const copyButton = e.target.closest(".copy-button");
    if (copyButton) {
      const targetId = copyButton.dataset.target;
      const accountNumber = document.querySelector(targetId).innerText;
      navigator.clipboard.writeText(accountNumber).then(() => {
        const buttonText = copyButton.querySelector("span");
        buttonText.innerText = "Tersalin!";
        setTimeout(() => {
          buttonText.innerText = "Salin";
        }, 2000);
      });
    }
  });

  const commentForm = document.getElementById("comment-form");
  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerText = "Mengirim...";
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      data.sheetName = CLIENT_DATA.backend.namaSheet;
      fetch(CLIENT_DATA.backend.url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Ucapan berhasil terkirim!");
          commentForm.reset();
          setTimeout(loadComments, 2000);
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
          submitButton.disabled = false;
          submitButton.innerText = "Kirim Ucapan";
        });
    });
  }

  if (musicToggleButton) {
    musicToggleButton.addEventListener("click", () => {
      if (musicPlayer.paused) {
        musicPlayer.play();
        musicToggleButton.classList.add("playing");
        musicToggleButton.innerHTML = '<i class="fas fa-compact-disc"></i>';
      } else {
        musicPlayer.pause();
        musicToggleButton.classList.remove("playing");
        musicToggleButton.innerHTML = '<i class="fas fa-pause"></i>';
      }
    });
  }

  const loadComments = () => {
    const commentsList = document.getElementById("comments-list");
    if (!commentsList || !CLIENT_DATA.backend.url) return;
    fetch(`${CLIENT_DATA.backend.url}?sheet=${CLIENT_DATA.backend.namaSheet}`)
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = "";
        if (data && data.length > 0) {
          data.forEach((comment) => {
            commentsList.innerHTML += `<div class="comment-item"><p class="name">${comment.Nama} <span class="status">${comment.Kehadiran}</span></p><p class="message">${comment.Ucapan}</p></div>`;
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  loadComments();

  const contentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      });
    },
    { threshold: 0.25 }
  );
  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => contentObserver.observe(el));
});
