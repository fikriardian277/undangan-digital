/* =================================================================
  PUSAT KONTROL & DATA UNDANGAN RUSTIC (VERSI FINAL TERSTANDAR)
================================================================= */
const config = {
  // Informasi dasar
  coupleName: "Ardi & Rania",
  groom: {
    name: "Ardi",
    fullName: "Ardi Pratama, S.Kom.",
    parents: "Putra Kedua dari Bapak H. Subagyo & Ibu Hj. Ibu Hj. Lestari",
    photo: "assets/images/mempelai-pria.jpg",
  },
  bride: {
    name: "Rania",
    fullName: "Rania Safitri, S.E.",
    parents: "Putri Kedua dari Bapak Drs. Endang Wijaya & Ibu Amalia, S.Pd.",
    photo: "assets/images/mempelai-wanita.jpg",
  },
  backend: {
    url: "https://script.google.com/macros/s/AKfycbx0dx13pseqcEKjH9gs4fy7T1w0bVh0-LA6q4Z57Vo22JNdYWwuty0yDJaOEy7Qqt4/exec",
    sheetName: "rustic",
  },
  event: {
    date: "2025-12-01T08:00:00",
    displayDate: "Senin, 1 Desember 2025",
    venueName: "Gedung Pernikahan Rustic",
    address: "Jl. Kenangan Indah No. 4, Bandung, Jawa Barat",
    gmapsUrl: "https://maps.app.goo.gl/xxxx",
  },
  quote: {
    text: "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri...”",
    cite: "Q.S. Ar-Rum: 21",
  },
  images: {
    coverBackground: "assets/images/cover-rustic.jpg",
    coverOverlay: "assets/images/mempelai-pria.jpg",
    saveTheDate: "assets/images/mempelai-pria.jpg",
    penutupBackground: "assets/images/mempelai-pria.jpg",
  },
  loveStory: [
    {
      align: "left",
      photo: "assets/images/mempelai-pria.jpg",
      caption: "Awal Bertemu - 2021",
      description:
        "Sebuah acara sederhana menjadi awal dari segalanya, di mana takdir mempertemukan kami untuk pertama kalinya.",
    },
    {
      align: "right",
      photo: "assets/images/mempelai-pria.jpg",
      caption: "Kencan Pertama - 2022",
      description:
        "Obrolan panjang ditemani secangkir kopi hangat menjadi saksi bisu babak baru cerita kami yang penuh tawa.",
    },
    {
      align: "left",
      photo: "assets/images/mempelai-pria.jpg",
      caption: "The Proposal - 2024",
      description:
        "Di bawah langit senja, sebuah janji terucap yang akan menyatukan sisa hidup kami untuk selamanya.",
    },
  ],
  weddingGift: {
    intro:
      "Kehadiran dan doa restu Bapak/Ibu/Saudara/i adalah hadiah terindah bagi kami. Namun, jika ingin memberikan tanda kasih, kami telah menyediakan beberapa opsi di bawah ini untuk memudahkan.",
    accounts: [
      {
        type: "bank",
        logo: "assets/images/logo-bca.png",
        name: "Ardi",
        number: "1234567890",
      },
      {
        type: "ewallet",
        logo: "assets/images/gopay-logo.png",
        name: "Rania",
        number: "08123456789",
      },
    ],
    physicalGiftAddress:
      "Untuk teman-teman yang ingin mengirimkan kado fisik, bisa mengirimkannya ke alamat berikut:<br><br><strong>Jl. Kenangan Indah No. 4, Komplek Bahagia Selalu, Bandung, Jawa Barat, 40123</strong>",
  },
  gallery: [
    "assets/images/galeri-1.jpg",
    "assets/images/galeri-2.jpg",
    "assets/images/galeri-3.jpg",
    "assets/images/galeri-4.jpg",
    "assets/images/galeri-5.jpg",
    "assets/images/galeri-6.jpg",
    "assets/images/galeri-5.jpg",
    "assets/images/galeri-4.jpg",
  ],
  penutup: {
    ucapanTerimaKasih:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doa restunya, kami ucapkan terima kasih.",
    foto: "assets/images/galeri-5.jpg",
  },
  kredit: {
    nama: "TemuHati",
    instagramUrl:
      "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
  },
  musik: "assets/audio/youlookatme.mp3",
};

/* =================================================================
  KODE FUNGSIONAL
================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const musicPlayer = document.getElementById("background-music");
  const musicToggleButton = document.getElementById("music-toggle-btn");

  function renderData() {
    const set = (id, prop, value) => {
      const el = document.getElementById(id);
      if (el) el[prop] = value;
    };
    set("title-tag", "textContent", `Undangan Pernikahan ${config.coupleName}`);
    set(
      "cover-couple-names",
      "innerHTML",
      `${config.groom.name}<br>&<br>${config.bride.name}`
    );
    set("main-couple-names", "textContent", config.coupleName);
    set("main-event-date", "textContent", config.event.displayDate);
    document.getElementById(
      "cover-bg-image"
    ).style.backgroundImage = `url('${config.images.coverBackground}')`;
    document.getElementById(
      "cover-overlay-image"
    ).style.backgroundImage = `url('${config.images.coverOverlay}')`;
    set("quote-text", "textContent", config.quote.text);
    set("quote-cite", "textContent", config.quote.cite);
    set("groom-photo", "src", config.groom.photo);
    set("groom-name", "textContent", config.groom.fullName);
    set("groom-parents", "innerHTML", config.groom.parents);
    set("bride-photo", "src", config.bride.photo);
    set("bride-name", "textContent", config.bride.fullName);
    set("bride-parents", "innerHTML", config.bride.parents);
    set("save-the-date-photo", "src", config.images.saveTheDate);
    set("venue-name", "textContent", config.event.venueName);
    set("venue-address", "textContent", config.event.address);
    set("gmaps-link", "href", config.event.gmapsUrl);

    const loveStoryContainer = document.getElementById("love-story-container");
    if (loveStoryContainer) {
      loveStoryContainer.innerHTML = config.loveStory
        .map(
          (story) =>
            `<div class="story-milestone align-${story.align}"><div class="milestone-content"><div class="milestone-photo"><img src="${story.photo}" alt="${story.caption}" /><div class="photo-caption">${story.caption}</div></div><div class="milestone-text"><p>${story.description}</p></div></div></div>`
        )
        .join("");
    }

    const giftContainer = document.getElementById("gift-options-container");
    if (giftContainer) {
      set("gift-intro", "textContent", config.weddingGift.intro);
      giftContainer.innerHTML = config.weddingGift.accounts
        .map(
          (acc, index) =>
            `<div class="gift-card ${
              index % 2 === 0 ? "rotate-left" : "rotate-right"
            }"><img src="${
              acc.logo
            }" alt="Logo" class="bank-logo"/><p class="account-number">No. Rek: <span id="acc-num-${index}">${
              acc.number
            }</span></p><p class="account-name">a.n. ${
              acc.name
            }</p><button class="copy-button" data-target="acc-num-${index}"><i class="fas fa-copy"></i> Salin</button></div>`
        )
        .join("");
      if (config.weddingGift.physicalGiftAddress) {
        giftContainer.innerHTML += `<div class="gift-card"><i class="fas fa-gift gift-icon"></i><h3>Kirim Hadiah</h3><p class="gift-address">${config.weddingGift.physicalGiftAddress}</p></div>`;
      }
    }

    set("penutup-photo", "src", config.penutup.foto);
    set("penutup-ucapan", "textContent", config.penutup.ucapanTerimaKasih);
    set("penutup-couple-names", "textContent", config.coupleName);

    const instagramLink = document.getElementById("footer-instagram");
    if (instagramLink) {
      instagramLink.href = config.kredit.instagramUrl;
    }
    const creditText = document.getElementById("footer-credit");
    if (creditText) {
      creditText.innerHTML = `Made with <i class="fas fa-heart"></i> by ${config.kredit.nama}`;
    }
    const penutupSectionEl = document.getElementById("penutup-section");
    if (penutupSectionEl && config.images.penutupBackground) {
      penutupSectionEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${config.images.penutupBackground}')`;
    }
    const musicSourceEl = document.getElementById("background-music");
    if (musicSourceEl) {
      musicSourceEl.src = config.musik;
    }
  }

  function setupSaveTheDateLink() {
    const btn = document.getElementById("btnSaveDate");
    if (!btn) return;
    const startDate = new Date(config.event.date);
    const endDate = new Date(startDate.getTime() + 8 * 60 * 60 * 1000);
    const toISOStringWithoutMs = (date) =>
      date.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const start = toISOStringWithoutMs(startDate);
    const end = toISOStringWithoutMs(endDate);
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Pernikahan ${config.coupleName}`
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      `Undangan Pernikahan ${config.coupleName}`
    )}&location=${encodeURIComponent(config.event.address)}&sf=true&output=xml`;
    btn.href = calendarUrl;
  }

  function startCountdown() {
    const weddingDate = new Date(config.event.date).getTime();
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML =
          "<h4>Acara Telah Berlangsung</h4>";
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

  // === BLOK KODE KOMENTAR (DENGAN LOGIKA KEHADIRAN) ===
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");

  const loadComments = () => {
    if (!commentList || !config.backend || !config.backend.url) return;
    commentList.innerHTML =
      "<p style='text-align: center;'>Memuat ucapan...</p>";
    fetch(`${config.backend.url}?sheet=${config.backend.sheetName}`)
      .then((response) => response.json())
      .then((data) => {
        commentList.innerHTML = "";
        if (data && data.length > 0) {
          data.forEach((comment) => {
            // PENYESUAIAN: Menampilkan status kehadiran
            const commentHTML = `
              <div class="comment-item">
                <p class="comment-author">
                  ${escapeHTML(comment.Nama)} 
                  <span class="status">${escapeHTML(comment.Kehadiran)}</span>
                </p>
                <p class="comment-text">${escapeHTML(comment.Ucapan)}</p>
                <p class="comment-date">${new Date(
                  comment.Timestamp
                ).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                })}</p>
              </div>`;
            commentList.innerHTML += commentHTML;
          });
        } else {
          commentList.innerHTML =
            "<p style='text-align: center;'>Belum ada ucapan. Jadilah yang pertama!</p>";
        }
      })
      .catch((error) => {
        console.error("Error memuat komentar:", error);
        commentList.innerHTML =
          "<p style='text-align: center;'>Gagal memuat ucapan.</p>";
      });
  };

  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerText = "Mengirim...";

      // PENYESUAIAN: Mengambil nilai kehadiran dari radio button
      const dataToSend = {
        Nama: this.elements.name.value,
        Ucapan: this.elements.comment.value,
        Kehadiran: this.elements.kehadiran.value,
        sheetName: config.backend.sheetName,
      };

      fetch(config.backend.url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(dataToSend),
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

  function escapeHTML(str) {
    if (!str) return "";
    return str.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        }[m])
    );
  }

  // === LOGIKA GALERI & LIGHTBOX ===
  function setupGallery() {
    const galleryContainer = document.getElementById("gallery-container");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    if (!galleryContainer || !config.gallery) return;
    galleryContainer.innerHTML = config.gallery
      .map(
        (imgSrc) =>
          `<a class="gallery-item"><img src="${imgSrc}" alt="Foto Galeri Pernikahan"></a>`
      )
      .join("");
    galleryContainer.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item) {
        const img = item.querySelector("img");
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      }
    });
    const closeLightbox = () => {
      lightbox.style.display = "none";
    };
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // === Fungsi untuk Nama Tamu dari URL ===
  function handleGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get("to");
    const guestNameElement = document.getElementById("guest-name-placeholder");
    if (guest && guestNameElement) {
      guestNameElement.innerText = guest.replace(/[+]/g, " ");
    }
  }

  // === Logika Animasi & Interaksi Lainnya ===
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  let countdownStarted = false;
  const mainObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("is-visible", entry.isIntersecting)
      );
    },
    { threshold: 0.2 }
  );

  function activateObservers() {
    const sections = document.querySelectorAll(
      "#hero-main, #kutipan, #mempelai, #save-the-date, .story-milestone, #wedding-gift, #comment-section, .gallery-item, #penutup-section"
    );
    sections.forEach((section) => mainObserver.observe(section));
  }

  if (openButton) {
    const invitationOpener = document.getElementById("invitation-opener");
    setTimeout(() => invitationOpener.classList.add("is-visible"), 800);
    setTimeout(() => invitationOpener.classList.add("is-opening"), 2000);

    openButton.addEventListener("click", () => {
      invitationOpener.classList.add("drop-down");
      setTimeout(() => {
        mainContent.classList.remove("hidden");
        mainContent.classList.add("fade-in");
        activateObservers();
        if (!countdownStarted) {
          startCountdown();
          countdownStarted = true;
        }
        musicToggleButton.classList.remove("hidden");
        if (musicPlayer) {
          musicPlayer
            .play()
            .catch((e) => console.log("Autoplay musik diblokir oleh browser."));
          musicToggleButton.classList.add("playing");
        }
      }, 500);
      setTimeout(() => {
        heroCover.classList.add("hidden");
        body.style.overflow = "auto";
      }, 1200);
    });

    if (musicToggleButton && musicPlayer) {
      musicToggleButton.addEventListener("click", () => {
        if (musicPlayer.paused) {
          musicPlayer.play();
          musicToggleButton.classList.add("playing");
        } else {
          musicPlayer.pause();
          musicToggleButton.classList.remove("playing");
        }
      });
    }
  }

  const giftOptionsContainer = document.getElementById(
    "gift-options-container"
  );
  if (giftOptionsContainer) {
    giftOptionsContainer.addEventListener("click", function (e) {
      const button = e.target.closest(".copy-button");
      if (button) {
        const targetId = button.dataset.target;
        const numberEl = document.getElementById(targetId);
        if (numberEl) {
          navigator.clipboard.writeText(numberEl.innerText).then(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
            button.classList.add("copied");
            setTimeout(() => {
              button.innerHTML = '<i class="fas fa-copy"></i> Salin';
              button.classList.remove("copied");
            }, 2000);
          });
        }
      }
    });
  }

  // === INISIALISASI SEMUA FUNGSI ===
  renderData();
  setupSaveTheDateLink();
  handleGuestName();
  loadComments();
  setupGallery();
});
