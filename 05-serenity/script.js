document.addEventListener("DOMContentLoaded", () => {
  // =================================================================================
  // === PUSAT KONTROL & DATA UNDANGAN (SEMUA DATA DIEDIT DI BAGIAN INI) ===
  // =================================================================================
  const CONFIG = {
    // --- DATA UMUM ---
    pageTitle: "Ardi & Rania Wedding",
    audio: "assets/audio/youlookatme.mp3",

    // --- MEMPELAI ---
    groom: {
      shortName: "Ardi",
      fullName: "Ardi Pratama",
      parents: "Putra Pertama dari Bapak Subagyo & Ibu Lestari",
      photo: "assets/images/mempelai-pria.jpg",
      instagram: "https://www.instagram.com/ardipratama",
    },
    bride: {
      shortName: "Rania",
      fullName: "Rania Safitri",
      parents: "Putri Kedua dari Bapak Endang & Ibu Amalia",
      photo: "assets/images/mempelai-wanita.jpg",
      instagram: "https://www.instagram.com/raniasafitri",
    },

    // --- HEADER / HERO SECTION ---
    hero: {
      introText: "THE WEDDING OF",
      date: "15 . 11 . 2025",
    },

    // --- KUTIPAN ---
    quote: {
      text: `<span>“Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan”</span>
                   <span>pasangan-pasangan untukmu dari jenismu sendiri,</span>
                   <span>agar kamu cenderung dan merasa tenteram kepadanya,</span>
                   <span>dan Dia menjadikan di antaramu rasa kasih dan sayang.”</span>`,
      cite: "Q.S. Ar-Rum: 21",
    },

    // --- ACARA & TANGGAL ---
    event: {
      // Format: YYYY-MM-DDTHH:MM:SS (contoh: 2025-11-15T09:00:00 untuk 15 November 2025 jam 9 pagi)
      countdownDate: "2025-11-15T09:00:00",
      details: [
        {
          icon: "fas fa-gem",
          title: "Akad Nikah",
          dateTime: "Sabtu, 15 November 2025 <br> Pukul 09:00 - 11:00 WIB",
          location:
            "Masjid Agung Sunda Kelapa <br> Jl. Taman Sunda Kelapa No.16, Menteng, Jakarta Pusat",
          gmapsUrl: "https://maps.app.goo.gl/example",
        },
        {
          icon: "fas fa-glass-cheers",
          title: "Resepsi",
          dateTime: "Sabtu, 15 November 2025 <br> Pukul 13:00 - 15:00 WIB",
          location:
            "Gedung Serbaguna Bidakara <br> Jl. Gatot Subroto Kav. 71-73, Pancoran, Jakarta Selatan",
          gmapsUrl: "https://maps.app.goo.gl/example2",
        },
      ],
    },

    // --- CERITA CINTA ---
    story: [
      {
        title: "Awal Bertemu",
        date: "Maret 2021",
        text: "Awal dari segalanya, di mana dua pasang mata bertemu secara tidak sengaja dan meninggalkan kesan yang tak terlupakan.",
      },
      {
        title: "Memulai Hubungan",
        date: "Juli 2021",
        text: "Setelah beberapa waktu, kami memutuskan untuk menulis babak baru dan memulai perjalanan ini bersama sebagai sepasang kekasih.",
      },
      {
        title: "Lamaran",
        date: "Januari 2025",
        text: "Di bawah langit senja, sebuah janji diucapkan. Momen di mana satu pertanyaan sederhana mengubah sisa hidup kami selamanya.",
      },
      {
        title: "Menuju Hari Bahagia",
        date: "November 2025",
        text: "Dan kini, kami menantikan hari di mana kami akan mengikat janji suci, dengan restu dan doa dari Anda semua.",
      },
    ],

    // --- GALERI FOTO ---
    gallery: [
      "assets/images/galeri-1.jpg",
      "assets/images/galeri-2.jpg",
      "assets/images/galeri-3.jpg",
      "assets/images/galeri-4.jpg",
      "assets/images/galeri-5.jpg",
      "assets/images/galeri-6.jpg",
    ],

    // --- HADIAH PERNIKAHAN ---
    gift: {
      intro:
        "Doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami telah menyediakan beberapa opsi di bawah ini untuk memudahkan.",
      accounts: [
        {
          icon: "fas fa-university",
          name: "Bank Central Asia (BCA)",
          number: "1234567890",
          holder: "a.n. Ardi Pratama",
          "data-copy-id": "rekening-bca",
        },
        {
          icon: "fas fa-wallet",
          name: "GoPay / OVO",
          number: "081234567890",
          holder: "a.n. Rania Safitri",
          "data-copy-id": "nomor-ewallet",
        },
        {
          icon: "fas fa-gift",
          name: "Kirim Kado",
          number:
            "Jl. Kenangan Indah No. 4, Kel. Bahagia, Kec. Sejahtera, Kota Impian 12345. Penerima: Ardi/Rania",
          holder: "",
          "data-copy-id": "alamat-rumah",
        },
      ],
    },

    // --- PENUTUP ---
    closing: {
      text: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu. Atas kehadiran serta doa restu yang telah diberikan, kami ucapkan terima kasih.",
    },

    // --- BACKEND UNTUK RSVP & BUKU TAMU ---
    backend: {
      url: "https://script.google.com/macros/s/AKfycbyVJI5F-HFHLPteYvrUZSPTO6gqfkH5rYlchRW0n3K--mcq2GBnY3mFZRObAea-10lw/exec",
      sheetName: "serenity",
    },

    // --- KREDIT FOOTER ---
    credit: {
      instagramUrl: "https://www.instagram.com/temuhati.kita",
      text: 'Made with <i class="fas fa-heart"></i> by TemuHati.id',
    },
  };

  // =================================================================================
  // === RENDERER & LOGIKA INTI (TIDAK PERLU DIEDIT) ===
  // =================================================================================
  const set = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) el[prop] = value;
  };

  function renderContent() {
    set("page-title", "textContent", CONFIG.pageTitle);
    set("background-music", "src", CONFIG.audio);
    set("footer-instagram", "href", CONFIG.credit.instagramUrl);
    set("footer-credit", "innerHTML", CONFIG.credit.text);
    set("hero-intro-text", "textContent", CONFIG.hero.introText);
    set(
      "hero-couple-names",
      "innerHTML",
      `${CONFIG.groom.shortName} & ${CONFIG.bride.shortName}`
    );
    set("hero-date", "textContent", CONFIG.hero.date);
    set("quote-text", "innerHTML", CONFIG.quote.text);
    set("quote-cite", "textContent", CONFIG.quote.cite);
    set("groom-photo", "src", CONFIG.groom.photo);
    set("groom-fullname", "textContent", CONFIG.groom.fullName);
    set("groom-parents", "textContent", CONFIG.groom.parents);
    set("groom-instagram", "href", CONFIG.groom.instagram);
    set("bride-photo", "src", CONFIG.bride.photo);
    set("bride-fullname", "textContent", CONFIG.bride.fullName);
    set("bride-parents", "textContent", CONFIG.bride.parents);
    set("bride-instagram", "href", CONFIG.bride.instagram);

    const eventContainer = document.getElementById("event-container");
    if (eventContainer) {
      eventContainer.innerHTML = CONFIG.event.details
        .map((evt) => {
          const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            evt.title +
              ": " +
              CONFIG.groom.shortName +
              " & " +
              CONFIG.bride.shortName
          )}&details=${encodeURIComponent(
            evt.location
          )}&location=${encodeURIComponent(evt.location)}`;
          return `
                <div class="event-card">
                    <div class="event-icon"><i class="${evt.icon}"></i></div>
                    <div class="event-details">
                        <h3>${evt.title}</h3>
                        <p class="event-time">${evt.dateTime}</p>
                        <p class="event-location">${evt.location}</p>
                    </div>
                    <div class="event-buttons">
                        <a href="${calendarUrl}" target="_blank" class="btn"><i class="far fa-calendar-alt"></i> Save Date</a>
                        <a href="${evt.gmapsUrl}" target="_blank" class="btn"><i class="fas fa-map-marker-alt"></i> View Map</a>
                    </div>
                </div>`;
        })
        .join("");
    }

    const timelineContainer = document.getElementById("timeline-container");
    if (timelineContainer) {
      timelineContainer.innerHTML = CONFIG.story
        .map(
          (item) => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <p class="timeline-date">${item.date}</p>
                        <p>${item.text}</p>
                    </div>
                </div>`
        )
        .join("");
    }

    const galleryTrack = document.getElementById("gallery-track");
    if (galleryTrack) {
      galleryTrack.innerHTML = CONFIG.gallery
        .map(
          (imgSrc) => `
                <div class="filmstrip-item">
                    <a href="${imgSrc}" data-lightbox="gallery">
                        <img src="${imgSrc}" alt="Galeri Foto" />
                    </a>
                </div>`
        )
        .join("");
    }

    set("gift-intro", "textContent", CONFIG.gift.intro);
    const giftContainer = document.getElementById("gift-container");
    if (giftContainer) {
      giftContainer.innerHTML = CONFIG.gift.accounts
        .map(
          (acc) => `
                <div class="gift-card">
                    <div class="gift-icon"><i class="${acc.icon}"></i></div>
                    <div class="gift-details">
                        <p class="account-name">${acc.name}</p>
                        <p class="account-number" id="${acc["data-copy-id"]}">${
            acc.number
          }</p>
                        ${
                          acc.holder
                            ? `<p class="account-holder">${acc.holder}</p>`
                            : ""
                        }
                    </div>
                    <button class="copy-btn" data-copy-target="${
                      acc["data-copy-id"]
                    }" aria-label="Salin">
                        <i class="far fa-copy"></i>
                    </button>
                </div>`
        )
        .join("");
    }

    set("closing-text", "textContent", CONFIG.closing.text);
    set(
      "closing-couple-names",
      "innerHTML",
      `${CONFIG.groom.shortName} & ${CONFIG.bride.shortName}`
    );
  }

  const TemplateSerenity = {
    elements: {},
    state: {
      countdownInterval: null,
      galleryAnimFrame: null,
      isGalleryPaused: false,
    },

    init() {
      renderContent();
      this.cacheDOMElements();
      this.initGuestName();
      this.initCountdown();
      this.initRsvpForm();
      this.initScrollAnimations();

      this.setupEventListeners();
    },

    cacheDOMElements() {
      this.elements = {
        cover: document.getElementById("invitation-cover"),
        mainContent: document.getElementById("main-content"),
        openBtn: document.getElementById("open-invitation-btn"),
        audio: document.getElementById("background-music"),
        musicToggle: document.getElementById("music-toggle-btn"),
        fixedGuestName: document.getElementById("fixed-guest-name"),
        countdown: document.getElementById("countdown"),
        countdownItems: {
          days: document.getElementById("days"),
          hours: document.getElementById("hours"),
          minutes: document.getElementById("minutes"),
          seconds: document.getElementById("seconds"),
        },
        rsvpForm: document.getElementById("rsvp-form"),
        wishesList: document.getElementById("wishes-list"),
        guestsGroup: document.getElementById("jumlah-tamu-group"),
        galleryContainer: document.querySelector(".filmstrip-container"),
        galleryTrack: document.getElementById("gallery-track"),
        pageFooter: document.getElementById("page-footer"),
        fixedGuestDisplay: document.getElementById("fixed-guest-display"),
      };
    },

    setupEventListeners() {
      if (this.elements.openBtn)
        this.elements.openBtn.addEventListener("click", () =>
          this.openInvitation()
        );
      if (this.elements.musicToggle)
        this.elements.musicToggle.addEventListener("click", () =>
          this.toggleAudio()
        );
      if (this.elements.rsvpForm) {
        this.elements.rsvpForm.addEventListener("submit", (e) =>
          this.handleRsvpSubmit(e)
        );
        this.elements.rsvpForm
          .querySelectorAll('input[name="Kehadiran"]')
          .forEach((radio) => {
            radio.addEventListener(
              "change",
              (e) =>
                (this.elements.guestsGroup.style.display =
                  e.target.value === "Hadir" ? "block" : "none")
            );
          });
      }
      document.body.addEventListener("click", (e) => {
        this.handleCopyButtons(e);
        this.handleLightbox(e);
        this.handleCoupleCardClick(e);
      });
    },

    openInvitation() {
      this.elements.cover.classList.add("hidden");
      this.elements.mainContent.style.display = "block";
      this.elements.musicToggle.style.display = "flex";
      if (this.elements.audio) {
        this.elements.audio
          .play()
          .catch((e) => console.log("Autoplay dicegah browser."));
        this.elements.musicToggle.classList.add("playing");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.initGallery();
    },

    toggleAudio() {
      if (!this.elements.audio) return;
      if (this.elements.audio.paused) {
        this.elements.audio.play();
        this.elements.musicToggle.classList.add("playing");
      } else {
        this.elements.audio.pause();
        this.elements.musicToggle.classList.remove("playing");
      }
    },

    initGuestName() {
      const guestName = new URLSearchParams(window.location.search).get("to");
      const finalName = guestName
        ? guestName.replace(/[+_]/g, " ")
        : "Bapak/Ibu/Saudara/i";
      document.getElementById("guest-name-placeholder").textContent = finalName;
      if (this.elements.fixedGuestName)
        this.elements.fixedGuestName.textContent = finalName;
    },

    initCountdown() {
      if (!this.elements.countdown || !CONFIG.event.countdownDate) return;
      const targetTime = new Date(CONFIG.event.countdownDate).getTime();
      this.state.countdownInterval = setInterval(() => {
        const distance = targetTime - new Date().getTime();
        if (distance < 0) {
          clearInterval(this.state.countdownInterval);
          this.elements.countdown.innerHTML = "<h4>The Day Has Come!</h4>";
          return;
        }
        const pad = (n) => (n < 10 ? "0" + n : n);
        this.elements.countdownItems.days.innerText = pad(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        );
        this.elements.countdownItems.hours.innerText = pad(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        this.elements.countdownItems.minutes.innerText = pad(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        );
        this.elements.countdownItems.seconds.innerText = pad(
          Math.floor((distance % (1000 * 60)) / 1000)
        );
      }, 1000);
    },

    initRsvpForm() {
      this.loadWishes();
    },

    handleRsvpSubmit(e) {
      e.preventDefault();
      const form = this.elements.rsvpForm;
      const submitBtn = form.querySelector(".submit-btn");
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";
      fetch(CONFIG.backend.url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          Nama: form.elements.Nama.value,
          Ucapan: form.elements.Ucapan.value,
          Kehadiran: form.elements.Kehadiran.value,
          Jumlah:
            form.elements.Kehadiran.value === "Hadir"
              ? form.elements.Jumlah.value
              : 0,
          sheetName: CONFIG.backend.sheetName,
        }),
      })
        .then(() => {
          form.reset();
          this.elements.guestsGroup.style.display = "none";
          document.getElementById("form-status").textContent =
            "Terima kasih! Ucapan Anda sudah terkirim.";
          setTimeout(() => this.loadWishes(), 2000);
        })
        .catch((err) => alert("Terjadi kesalahan."))
        .finally(() => {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Confirmation";
            document.getElementById("form-status").textContent = "";
          }, 3000);
        });
    },

    loadWishes() {
      if (!CONFIG.backend.url) return;

      // [FIXED] Fungsi 'escape' diperbaiki dan dipindah ke luar loop untuk efisiensi
      const escape = (str) => {
        if (!str) return "";
        const map = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;", // <-- Ini adalah baris yang menyebabkan error sebelumnya
        };
        return str.replace(/[&<>"']/g, (m) => map[m]);
      };

      fetch(`${CONFIG.backend.url}?sheet=${CONFIG.backend.sheetName}`)
        .then((res) => res.json())
        .then((data) => {
          const wishesList = this.elements.wishesList;
          if (!wishesList) return;

          wishesList.innerHTML = "";
          if (data && data.length > 0) {
            data.reverse().forEach((wish) => {
              if (!wish.Nama || !wish.Ucapan) return;

              const card = document.createElement("div");
              card.className = "wish-card";
              // Menggunakan fungsi escape yang sudah diperbaiki
              card.innerHTML = `<span class="wish-name">${escape(
                wish.Nama
              )}</span><p class="wish-text">${escape(wish.Ucapan)}</p>`;
              wishesList.appendChild(card);
            });
          } else {
            wishesList.innerHTML =
              "<p style='text-align: center;'>Jadilah yang pertama mengirim ucapan!</p>";
          }
        })
        .catch((err) => {
          if (this.elements.wishesList) {
            this.elements.wishesList.innerHTML = `<p style='text-align: center; color: #ff8a8a;'>Gagal memuat ucapan.</p>`;
          }
          console.error("Error loading wishes:", err);
        });
    },
    // [FIXED] Logika yang hilang sudah diisi kembali
    initScrollAnimations() {
      const sections = document.querySelectorAll(".content-section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.target.classList.toggle("is-visible", entry.isIntersecting)
          );
        },
        { threshold: 0.15 }
      );
      sections.forEach((section) => observer.observe(section));

      if (this.elements.pageFooter && this.elements.fixedGuestDisplay) {
        const footerObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) =>
              this.elements.fixedGuestDisplay.classList.toggle(
                "is-hidden",
                entry.isIntersecting
              )
            );
          },
          { threshold: 0.1 }
        );
        footerObserver.observe(this.elements.pageFooter);
      }
    },

    // [FIXED] Logika yang hilang sudah diisi kembali
    initGallery() {
      const container = this.elements.galleryContainer;
      const track = this.elements.galleryTrack;
      if (!container || !track || track.scrollWidth <= container.clientWidth)
        return;

      let pos = 0;
      let direction = 1;
      const scrollAmount = 0.7;
      const maxScroll = track.scrollWidth - container.clientWidth;

      const loop = () => {
        if (this.state.isGalleryPaused) return;
        pos += scrollAmount * direction;
        if (pos >= maxScroll || pos <= 0) direction *= -1;
        pos = Math.max(0, Math.min(pos, maxScroll));
        track.style.transform = `translateX(-${pos}px)`;
        this.state.galleryAnimFrame = requestAnimationFrame(loop);
      };
      const start = () => {
        if (this.state.isGalleryPaused) {
          this.state.isGalleryPaused = false;
          loop();
        }
      };
      const stop = () => {
        this.state.isGalleryPaused = true;
        cancelAnimationFrame(this.state.galleryAnimFrame);
      };

      container.addEventListener("mouseenter", stop);
      container.addEventListener("mouseleave", start);
      loop();
    },

    // [FIXED] Logika yang hilang sudah diisi kembali
    handleCopyButtons(event) {
      const copyBtn = event.target.closest(".copy-btn");
      if (!copyBtn) return;
      const targetElement = document.getElementById(copyBtn.dataset.copyTarget);
      if (targetElement) {
        navigator.clipboard.writeText(targetElement.innerText).then(() => {
          const originalIcon = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fas fa-check"></i>';
          copyBtn.classList.add("copied");
          setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
            copyBtn.classList.remove("copied");
          }, 2000);
        });
      }
    },

    // [FIXED] Logika yang hilang sudah diisi kembali
    handleLightbox(event) {
      const galleryLink = event.target.closest('a[data-lightbox="gallery"]');
      if (!galleryLink) return;
      event.preventDefault();
      const overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";
      overlay.innerHTML = `<div class="lightbox-content"><img src="${galleryLink.href}" class="lightbox-image"></div><button class="lightbox-close">×</button>`;
      document.body.appendChild(overlay);
      const close = () => document.body.removeChild(overlay);
      overlay.querySelector(".lightbox-close").addEventListener("click", close);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
      });
    },

    // [FIXED] Logika yang hilang sudah diisi kembali
    handleCoupleCardClick(event) {
      const cardContainer = event.target.closest(
        ".interactive-stack-container"
      );
      if (!cardContainer) return;
      cardContainer
        .querySelectorAll(".couple-card")
        .forEach((card) => card.classList.toggle("is-active"));
    },
  };

  // INISIALISASI APLIKASI
  TemplateSerenity.init();
});
