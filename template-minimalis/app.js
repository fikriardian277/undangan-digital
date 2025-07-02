/* =================================================================
   KONFIGURASI UTAMA - SEMUA DATA KLIEN DIUBAH DI SINI
================================================================= */
const CLIENT_DATA = {
  backgrounds: {
    kutipan: "assets/images/galeri-3.jpg",
    mempelai: "assets/images/galeri-4.jpg",
    saveTheDate: "assets/images/galeri-5.jpg",
    loveStory: "assets/images/galeri-6.jpg",
    weddingGift: "assets/images/galeri-2.jpg",
    penutup: "assets/images/prewedding-penutup.jpg",
  },
  heroImages: {
    cover: "assets/images/cover.jpg",
    slideshow: ["assets/images/galeri-1.jpg", "assets/images/galeri-2.jpg"],
  },
  // Nama Mempelai
  namaPanggilanPria: "Reyhan",
  namaPanggilanWanita: "Risna",
  namaLengkapPria: "Reyhan Sanjaya",
  namaLengkapWanita: "Risna Nuraini",

  // Informasi Keluarga
  orangTuaPria: "Putra dari Bapak Sanjaya & Ibu Nani",
  orangTuaWanita: "Putri dari Bapak Nurman & Ibu Siti",

  // Link Sosial Media
  instagramPria: "https://instagram.com/username_pria",
  instagramWanita: "https://instagram.com/username_wanita",

  // Path Foto
  fotoPria: "assets/images/mempelai-pria.jpg",
  fotoWanita: "assets/images/mempelai-wanita.jpg",
  fotoPenutup: "assets/images/prewedding-penutup.jpg",

  // Detail Acara
  acara: {
    judul: "Akad & Resepsi",
    tanggalISO: "2025-10-12", // Format YYYY-MM-DD (untuk countdown)
    tanggalTeks: "Sabtu, 12 Oktober 2025",
    waktu: "10.00 WIB - Selesai",
    lokasi: "Gedung Pernikahan Impian, Jl. Bahagia No. 1, Jakarta",
    urlPeta: "https://maps.app.goo.gl/LOKASI_ANDA",
  },

  // Kutipan
  kutipan: {
    teks: "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”",
    sumber: "Q.S. Ar-Rum: 21",
  },

  // Love Story (Bisa ditambah atau dikurangi)
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

  // Galeri (Array berisi path gambar)
  galeri: [
    "assets/images/galeri-1.jpg",
    "assets/images/galeri-2.jpg",
    "assets/images/galeri-3.jpg",
    "assets/images/galeri-4.jpg",
    "assets/images/galeri-5.jpg",
    "assets/images/galeri-6.jpg",
  ],

  // Hadiah Pernikahan (Bisa ditambah atau dikurangi)
  hadiah: [
    {
      bank: "BCA",
      logo: "assets/images/logo-bca.png",
      noRek: "1234567890",
      atasNama: "Rian Sanjaya",
    },
    {
      bank: "BCA",
      logo: "assets/images/logo-bca.png",
      noRek: "0987654321",
      atasNama: "Ismi Nuraini",
    },
  ],

  // Musik
  musik: "assets/audio/laksanasurga.mp3",

  // Ucapan Penutup
  ucapanPenutup:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doa restunya, kami ucapkan terima kasih.",

  // Backend (Google Sheet)
  backend: {
    url: "https://script.google.com/macros/s/AKfycbx0dx13pseqcEKjH9gs4fy7T1w0bVh0-LA6q4Z57Vo22JNdYWwuty0yDJaOEy7Qqt4/exec",
    namaSheet: "minimalis", // Nama tab di Google Sheet
  },

  // Footer
  kredit: {
    nama: "TemuHati",
    instagram: "https://instagram.com/temuhati.id",
  },
};

/* =================================================================
   JEMBATAN DATA - FUNGSI UNTUK MENGISI DATA KE HTML
   (Tidak perlu diubah)
================================================================= */
function populateData() {
  // Fungsi pembantu untuk mengisi elemen dengan aman
  const setElement = (id, type, value) => {
    const el = document.getElementById(id);
    if (el) {
      if (type === "text") el.innerText = value;
      if (type === "src") el.src = value;
      if (type === "href") el.href = value;
      if (type === "innerHTML") el.innerHTML = value;
    }
  };

  const coupleNames = `${CLIENT_DATA.namaPanggilanPria} & ${CLIENT_DATA.namaPanggilanWanita}`;

  // Judul Halaman
  document.title = `Undangan Pernikahan ${coupleNames}`;
  // --- Mengisi Background Hero secara Dinamis ---
  const heroCoverEl = document.getElementById("hero-cover");
  if (heroCoverEl) {
    heroCoverEl.style.backgroundImage = `url('${CLIENT_DATA.heroImages.cover}')`;
  }

  const heroMainEl = document.getElementById("hero-main");
  if (heroMainEl && CLIENT_DATA.heroImages.slideshow.length >= 2) {
    // Set gambar pertama langsung di elemennya
    heroMainEl.style.backgroundImage = `url('${CLIENT_DATA.heroImages.slideshow[0]}')`;

    // Buat aturan CSS dinamis untuk pseudo-element ::after
    // Ini adalah cara untuk mengisi gambar kedua slideshow dari JS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
            #hero-main::after {
                background-image: url('${CLIENT_DATA.heroImages.slideshow[1]}');
            }
        `;
    document.head.appendChild(styleSheet);
  }

  // --- Mengisi Background Section secara Dinamis ---
  const bgConfig = CLIENT_DATA.backgrounds;
  // Loop melalui setiap section di konfigurasi
  for (const sectionId in bgConfig) {
    const el = document.getElementById(sectionId);
    if (el) {
      // Gabungkan linear-gradient dengan URL gambar dari konfigurasi
      el.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgConfig[sectionId]}')`;
    }
  }
  // Ganti ID 'save-the-date-section' jika berbeda di HTML
  const saveTheDateEl = document.getElementById("save-the-date-section");
  if (saveTheDateEl && bgConfig.saveTheDate) {
    saveTheDateEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgConfig.saveTheDate}')`;
  }

  // Musik
  setElement("music-source", "src", CLIENT_DATA.musik);
  document.getElementById("background-music").load();

  // Hero & Nama Pasangan
  setElement("cover-couple-names", "text", coupleNames);
  setElement("main-couple-names", "text", coupleNames);

  // Kutipan
  setElement("quote-text", "text", CLIENT_DATA.kutipan.teks);
  setElement("quote-source", "text", CLIENT_DATA.kutipan.sumber);

  // Mempelai
  setElement("groom-photo", "src", CLIENT_DATA.fotoPria);
  setElement("groom-name", "text", CLIENT_DATA.namaLengkapPria);
  setElement("groom-parents", "text", CLIENT_DATA.orangTuaPria);
  setElement("groom-instagram", "href", CLIENT_DATA.instagramPria);
  setElement("bride-photo", "src", CLIENT_DATA.fotoWanita);
  setElement("bride-name", "text", CLIENT_DATA.namaLengkapWanita);
  setElement("bride-parents", "text", CLIENT_DATA.orangTuaWanita);
  setElement("bride-instagram", "href", CLIENT_DATA.instagramWanita);

  // Detail Acara
  setElement("event-date", "text", CLIENT_DATA.acara.tanggalTeks);
  setElement("event-title", "text", CLIENT_DATA.acara.judul);
  setElement("event-date-detail", "text", CLIENT_DATA.acara.tanggalTeks);
  setElement("event-time-detail", "text", CLIENT_DATA.acara.waktu);
  setElement("event-location-detail", "text", CLIENT_DATA.acara.lokasi);
  setElement("map-button", "href", CLIENT_DATA.acara.urlPeta);

  // Love Story
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    timelineContainer.innerHTML = "";
    CLIENT_DATA.loveStory.forEach((story) => {
      timelineContainer.innerHTML += `
                <div class="timeline-item animate-on-scroll">
                    <div class="timeline-content glass-panel">
                        <h3>${story.judul}</h3>
                        <p>${story.deskripsi}</p>
                    </div>
                </div>
            `;
    });
  }

  // Galeri
  const galleryContainer = document.getElementById("gallery-grid-container");
  if (galleryContainer) {
    galleryContainer.innerHTML = "";
    CLIENT_DATA.galeri.forEach((imgSrc) => {
      galleryContainer.innerHTML += `
                <a href="${imgSrc}" class="gallery-item animate-on-scroll">
                    <img src="${imgSrc}" alt="Galeri foto">
                </a>
            `;
    });
  }

  // Wedding Gift
  const giftContainer = document.getElementById("gift-container");
  if (giftContainer) {
    giftContainer.innerHTML = "";
    CLIENT_DATA.hadiah.forEach((gift, index) => {
      giftContainer.innerHTML += `
                <div class="gift-card glass-panel animate-on-scroll">
                    <img src="${gift.logo}" alt="Logo Bank ${
        gift.bank
      }" class="bank-logo">
                    <p class="account-number" id="rek${index + 1}">${
        gift.noRek
      }</p>
                    <p>a.n. ${gift.atasNama}</p>
                    <button class="copy-button" data-target="#rek${index + 1}">
                        <i class="fas fa-copy"></i>
                        <span>Salin</span>
                    </button>
                </div>
            `;
    });
  }

  // Penutup
  setElement("closing-photo", "src", CLIENT_DATA.fotoPenutup);
  setElement("closing-text", "text", CLIENT_DATA.ucapanPenutup);
  setElement("closing-couple-names", "text", coupleNames);

  // Footer
  setElement("footer-instagram", "href", CLIENT_DATA.kredit.instagram);
  setElement(
    "footer-credit",
    "innerHTML",
    `Made with <i class="fas fa-heart"></i> by ${CLIENT_DATA.kredit.nama}`
  );
}

/* =================================================================
   LOGIKA INTERAKTIF - Jangan diubah kecuali perlu
================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Panggil fungsi untuk mengisi semua data ke HTML
  populateData();

  // --- Seleksi Elemen DOM ---
  const openButton = document.getElementById("open-invitation");
  const coverSection = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const saveDateButton = document.getElementById("save-the-date");
  const musicPlayer = document.getElementById("background-music");
  const musicToggleButton = document.getElementById("music-toggle-btn");

  // --- Nama Tamu dari URL ---
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  if (guest) {
    document.getElementById("guest-name").innerText = guest.replace(/\+/g, " ");
  }

  // --- Fungsi Buka Undangan ---
  openButton.addEventListener("click", () => {
    coverSection.classList.add("hidden");
    mainContent.classList.remove("hidden");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      coverSection.style.display = "none";
      musicToggleButton.classList.remove("hidden");
      if (musicPlayer)
        musicPlayer
          .play()
          .catch((e) => console.log("Autoplay diblokir oleh browser."));
      musicToggleButton.classList.add("playing");
    }, 1000);
  });

  // --- Fungsi Save The Date ---
  if (saveDateButton) {
    saveDateButton.addEventListener("click", () => {
      const { tanggalISO, waktu, judul, lokasi, deskripsi } = CLIENT_DATA.acara;
      const startTime = waktu.split(" ")[0];
      const startDate = new Date(`${tanggalISO}T${startTime}:00`)
        .toISOString()
        .replace(/-|:|\.\d{3}/g, "");
      const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        judul
      )}&dates=${startDate}/${startDate}&details=${encodeURIComponent(
        deskripsi
      )}&location=${encodeURIComponent(lokasi)}`;
      window.open(googleCalendarUrl, "_blank");
    });
  }

  // --- Fungsi Countdown ---
  const countdown = () => {
    const daysEl = document.getElementById("days"),
      hoursEl = document.getElementById("hours"),
      minutesEl = document.getElementById("minutes"),
      secondsEl = document.getElementById("seconds");
    if (!daysEl) return;
    const eventDate = new Date(CLIENT_DATA.acara.tanggalISO).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
      clearInterval(interval);
      document.querySelector(".countdown").innerHTML =
        "<h4>Acara Telah Berlangsung</h4>";
      return;
    }
    const format = (num) => (num < 10 ? "0" + num : num);
    daysEl.innerText = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
    hoursEl.innerText = format(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    minutesEl.innerText = format(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    secondsEl.innerText = format(Math.floor((distance % (1000 * 60)) / 1000));
  };
  const interval = setInterval(countdown, 1000);

  // --- Fungsi untuk semua interaksi dinamis ---
  function initDynamicInteractions() {
    document.body.addEventListener("click", function (e) {
      // Lightbox Galeri
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

      // Tombol Salin
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

    // Form Komentar
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

    // Tombol Musik
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
  }
  initDynamicInteractions();

  // --- Fungsi memuat Komentar ---
  const loadComments = () => {
    const commentsList = document.getElementById("comments-list");
    if (!commentsList || !CLIENT_DATA.backend.url) return;
    fetch(`${CLIENT_DATA.backend.url}?sheet=${CLIENT_DATA.backend.namaSheet}`)
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = "";
        if (data && data.length > 0) {
          data.forEach((comment) => {
            commentsList.innerHTML += `
                            <div class="comment-item">
                                <p class="name">${comment.Nama} <span class="status">${comment.Kehadiran}</span></p>
                                <p class="message">${comment.Ucapan}</p>
                            </div>
                        `;
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  loadComments();

  // --- Fungsi Animasi Scroll ---
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
});
