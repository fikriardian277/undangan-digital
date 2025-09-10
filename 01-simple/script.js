document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // === PUSAT KONTROL & DATA UNDANGAN (SEMUA DATA DIEDIT DI BAGIAN INI) ===
  // =========================================================================
  const CONFIG = {
    // og: {
    //   title: "Ardi & Rania Wedding",
    //   description:
    //     "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara pernikahan kami.",
    //   image: "https://url-ke-gambar-cover-anda.com/assets/cover.png",
    //   url: "https://url-undangan-anda.netlify.app/",
    // },
    pageTitle: "Ardi & Rania Wedding",
    audio: "audio/Shane Filan - Beautiful in White.mp3",
    groom: {
      fullName: "Ardi Pratama",
      shortName: "Ardi",
      parents: "Putra dari<br>Bapak Subagyo & Ibu Lestari",
      instagram:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
      photo: "assets/mempelai-pria.jpg",
    },
    bride: {
      fullName: "Rania Safitri",
      shortName: "Rania",
      parents: "Putri Kedua dari<br>Bapak Endang & Ibu Amalia",
      instagram:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
      photo: "assets/mempelai-wanita.jpg",
    },
    event: {
      isoDate: "2025-10-12T10:00:00",
      dateText: "Sabtu, 12 Oktober 2025",
      timeText: "<strong>Pukul : 10.00 WIB - Selesai</strong>",
      locationText: `Kediaman mempelai wanita<br>Jl. Lewo Babakan 66-60, Linggajaya, Kec. Mangkubumi<br>Kota Tasikmalaya`,
      gmapsUrl: "https://maps.app.goo.gl/FFHBLjHzhccGQCG88s",
    },
    images: {
      cover: "assets/cover.jpg",
      prewedding_utama: "assets/prewedding-utama.jpg",
      prewedding_penutup: "assets/prewedding-penutup.jpg",
      bg_gift: "assets/card-texture.png",
      desktop_bg: "assets/cover.jpg",
      mempelai_bg_1: "assets/mempelai-pria.jpg",
      mempelai_bg_2: "assets/mempelai-wanita.jpg",
      gallery: [
        "assets/galeri-1.jpg",
        "assets/galeri-2.jpg",
        "assets/galeri-3.jpg",
        "assets/galeri-4.jpg",
        "assets/galeri-5.jpg",
        "assets/galeri-6.jpg",
      ],
      loveStoryBg: "assets/cover.jpg", // Tambahkan ini
      waveFrame: "assets/wave-frame.png",
    },

    gift: [
      {
        bankLogo: "assets/logo-bca.png",
        accountNumber: "1234567890",
        accountHolder: "a.n. Ardi Pratama",
        id: "rek1",
      },
      {
        bankLogo: "assets/logo-bca.png",
        accountNumber: "0987654321",
        accountHolder: "a.n. Rania Safitri",
        id: "rek2",
      },
    ],
    backend: {
      gasUrl:
        "https://script.google.com/macros/s/AKfycbzMHvkCoo5mDUoEpO4mj8TOYY6HV0GzoBysEHJFY840aDRyIOnm3nZTX9AWBK06kVbz/exec",
    },
  };

  // =========================================================================
  // === FUNGSI BANTU GLOBAL (TIDAK PERLU DIEDIT) ===
  // =========================================================================
  // [FIXED] Fungsi 'set' dipindahkan ke sini agar bisa diakses semua fungsi lain
  const set = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) el[prop] = value;
  };

  // =========================================================================
  // === RENDERER (BAGIAN INI MENGISI DATA DARI CONFIG KE HTML) ===
  // =========================================================================
  function renderContent() {
    set("page-title", "textContent", CONFIG.pageTitle);
    document.querySelector("#bgMusic source").src = CONFIG.audio;
    document.getElementById("bgMusic").load();
    // setMeta("title", CONFIG.og.title);
    // setMeta("description", CONFIG.og.description);
    // setMeta("image", CONFIG.og.image);
    // setMeta("url", CONFIG.og.url);

    const coupleNames = `${CONFIG.groom.fullName} & ${CONFIG.bride.fullName}`;
    const coupleShortNames = `${CONFIG.groom.shortName} & ${CONFIG.bride.shortName}`;
    set("hero1-names", "innerHTML", coupleShortNames);
    set("hero2-names", "innerHTML", coupleShortNames);
    set("nama-penutup", "textContent", coupleShortNames);

    set("ortu-pria", "innerHTML", CONFIG.groom.parents);
    set("ortu-wanita", "innerHTML", CONFIG.bride.parents);

    set("img-mempelai-pria", "src", CONFIG.groom.photo);

    set("img-mempelai-wanita", "src", CONFIG.bride.photo);

    set("bg-mempelai-1", "src", CONFIG.images.mempelai_bg_1);
    set("bg-mempelai-2", "src", CONFIG.images.mempelai_bg_2);

    set("hero2-date", "textContent", CONFIG.event.dateText);
    set("tanggal-resepsi", "textContent", CONFIG.event.dateText);
    set("waktu-resepsi", "innerHTML", CONFIG.event.timeText);
    set("lokasi-resepsi", "innerHTML", CONFIG.event.locationText);
    set("link-lokasi", "href", CONFIG.event.gmapsUrl);
    const loveStorySection = document.querySelector(".section-love-story");
    if (loveStorySection && CONFIG.images.loveStoryBg) {
      loveStorySection.style.backgroundImage = `url(${CONFIG.images.loveStoryBg})`;
    }
    document.getElementById(
      "hero1"
    ).style.backgroundImage = `url('${CONFIG.images.cover}')`;
    document.getElementById(
      "hero2"
    ).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${CONFIG.images.cover}')`;
    set("img-prewedding-utama", "src", CONFIG.images.prewedding_utama);
    set("img-prewedding-penutup", "src", CONFIG.images.prewedding_penutup);
    document.getElementById(
      "gift-card-1"
    ).style.backgroundImage = `url('${CONFIG.images.bg_gift}')`;
    document.getElementById(
      "gift-card-2"
    ).style.backgroundImage = `url('${CONFIG.images.bg_gift}')`;

    const galleryGrid = document.getElementById("gallery-grid-container");
    if (galleryGrid) {
      galleryGrid.innerHTML = CONFIG.images.gallery
        .map(
          (img) =>
            `<a href="${img}" class="gallery-item" data-lightbox="gallery-grid"><img src="${img}" alt="Galeri Foto"></a>`
        )
        .join("");
    }
    const landscapeContainer = document.getElementById(
      "gallery-landscape-container"
    );
    if (landscapeContainer) {
      landscapeContainer.innerHTML = `<a href="${CONFIG.images.gallery_landscape}" class="gallery-landscape" data-lightbox="gallery"><img src="${CONFIG.images.gallery_landscape}" alt="Galeri Landscape"></a>`;
    }

    CONFIG.gift.forEach((item, index) => {
      set(`logo-bank-${index + 1}`, "src", item.bankLogo);
      set(`rek${index + 1}`, "textContent", item.accountNumber);
      set(`nama-rek${index + 1}`, "textContent", item.accountHolder);
    });
  }

  // =========================================================================
  // === LOGIKA INTERAKTIF (TIDAK PERLU DIEDIT) ===
  // =========================================================================
  const App = {
    init() {
      renderContent();
      this.initGuestName();
      this.initEventListeners();
      this.initScrollAnimations();
      this.initCountdown();
      this.initRsvp();
      feather.replace();
    },

    initEventListeners() {
      document
        .getElementById("btnOpen")
        .addEventListener("click", this.openInvitation);
      document
        .getElementById("musicToggle")
        .addEventListener("click", () => this.toggleMusic());
      document
        .getElementById("btnSaveDate")
        .addEventListener("click", this.saveTheDate);
      document
        .getElementById("btnGift")
        .addEventListener("click", () => this.toggleGiftSection());
      document
        .querySelectorAll(".btn-copy")
        .forEach((btn) => btn.addEventListener("click", this.copyToClipboard));
    },

    openInvitation() {
      document.getElementById("hero1").classList.add("hide");
      document.getElementById("main-content").classList.remove("hidden");
      document.body.classList.remove("lock-scroll");
      document.getElementById("bottomNav").classList.add("show");
      document.addEventListener("scroll", () => this.handleScroll());
      const desktopBgEl = document.querySelector(".photo-left");
      console.log("Elemen photo-left ditemukan:", desktopBgEl);
      console.log("Path gambar desktop:", CONFIG.images.desktop_bg);
      if (desktopBgEl) {
        desktopBgEl.style.backgroundImage = `url('${CONFIG.images.desktop_bg}')`;
      }
      setTimeout(() => {
        document.getElementById("hero1").style.display = "none";
      }, 1000);
      document.getElementById("musicToggle").style.display = "grid";
      App.toggleMusic(true);
    },

    toggleMusic(forcePlay = false) {
      const music = document.getElementById("bgMusic");
      const icon = document.getElementById("musicToggle");
      if (music.paused || forcePlay) {
        music.play().catch((e) => console.warn("Autoplay gagal"));
        icon.innerHTML = '<i data-feather="disc"></i>';
      } else {
        music.pause();
        icon.innerHTML = '<i data-feather="pause-circle"></i>';
      }
      feather.replace();
    },
    handleScroll() {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".bottom-nav .nav-link");

      sections.forEach((section) => {
        // Sesuaikan offset jika diperlukan. 80 adalah tinggi rata-rata navbar.
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            // Gunakan link.hash untuk mendapatkan ID (#...) dari href
            if (link.hash === `#${section.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    saveTheDate() {
      const eventDate = new Date(CONFIG.event.isoDate);
      const startTime = eventDate.toISOString().replace(/-|:|\.\d+/g, "");
      const endTimeDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
      const endTime = endTimeDate.toISOString().replace(/-|:|\.\d+/g, "");
      const location = CONFIG.event.locationText.replace(/<br\s*\/?>/gi, ", ");
      const gcalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(
        CONFIG.groom.fullName
      )}+dan+${encodeURIComponent(
        CONFIG.bride.fullName
      )}&dates=${startTime}/${endTime}&location=${encodeURIComponent(
        location
      )}`;
      window.open(gcalUrl, "_blank");
    },

    initGuestName() {
      const guestName = new URLSearchParams(window.location.search).get("to");
      if (guestName) {
        document.getElementById("namaTamu").innerText = decodeURIComponent(
          guestName.replace(/\+/g, " ")
        );
      }
    },

    initScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) =>
            e.target.classList.toggle("show", e.isIntersecting)
          ),
        { threshold: 0.25 }
      );
      document
        .querySelectorAll(
          ".animate-on-scroll, .section-kutipan, .animate-top, .animate-bottom, .and-symbol"
        )
        .forEach((el) => observer.observe(el));
    },

    initCountdown() {
      const target = new Date(CONFIG.event.isoDate).getTime();
      if (isNaN(target)) {
        console.error(
          "FORMAT TANGGAL SALAH di CONFIG.event.isoDate. Gunakan format YYYY-MM-DDTHH:MM:SS"
        );
        document.querySelector(".countdown").innerHTML =
          "<h4>Error: Tanggal Acara Tidak Valid</h4>";
        return;
      }

      const intervalId = setInterval(() => {
        const distance = target - new Date().getTime();
        if (distance < 0) {
          clearInterval(intervalId);
          document.querySelector(".countdown").innerHTML =
            "<h4>Acara Telah Berlangsung</h4>";
          return;
        }
        set("days", "innerText", Math.floor(distance / (1000 * 60 * 60 * 24)));
        set(
          "hours",
          "innerText",
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        set(
          "minutes",
          "innerText",
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        );
        set(
          "seconds",
          "innerText",
          Math.floor((distance % (1000 * 60)) / 1000)
        );
      }, 1000);
    },

    toggleGiftSection() {
      const giftSection = document.getElementById("giftSection");
      const giftButton = document.getElementById("btnGift");

      giftSection.classList.toggle("show");

      // Ganti teks tombol sesuai keadaan
      if (giftSection.classList.contains("show")) {
        giftButton.textContent = "Tutup";
        // Animasikan kartu hadiah
        giftSection.querySelectorAll(".gift-card").forEach((card, i) => {
          setTimeout(() => card.classList.add("show"), i * 200);
        });
      } else {
        giftButton.textContent = "Kirim Hadiah";
        // Hapus kelas 'show' dari kartu hadiah agar bisa dianimasikan ulang
        giftSection.querySelectorAll(".gift-card").forEach((card) => {
          card.classList.remove("show");
        });
      }
    },
    copyToClipboard(e) {
      const rekId = e.currentTarget.dataset.rekId;
      const nomor = document.getElementById(rekId).innerText;
      navigator.clipboard
        .writeText(nomor)
        .then(() => {
          alert(`Nomor ${nomor} berhasil disalin!`);
        })
        .catch((err) => alert("Gagal menyalin."));
    },

    initRsvp() {
      const form = document.getElementById("commentForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector("button");
        btn.disabled = true;
        btn.innerText = "Mengirim...";

        const data = {
          Nama: document.getElementById("name").value,
          Ucapan: document.getElementById("message").value,
          Kehadiran: document.getElementById("kehadiran").value,
        };

        fetch(CONFIG.backend.gasUrl, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "text/plain;charset=utf-8" },
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.result === "success") {
              alert("Ucapan berhasil terkirim!");
              form.reset();
              App.loadComments();
            } else throw new Error(response.message);
          })
          .catch((err) => alert("Terjadi kesalahan."))
          .finally(() => {
            btn.disabled = false;
            btn.innerText = "Kirim Ucapan";
          });
      });
      this.loadComments();
    },

    loadComments() {
      fetch(CONFIG.backend.gasUrl)
        .then((res) => res.json())
        .then((data) => {
          const list = document.getElementById("commentsList");
          list.innerHTML = "";
          let hadir = 0,
            tidakHadir = 0;

          data.forEach((comment) => {
            if (comment.Kehadiran === "Hadir") hadir++;
            if (comment.Kehadiran === "Tidak Hadir") tidakHadir++;

            const item = document.createElement("div");
            item.className = "comment";
            item.innerHTML = `<p class="comment-name">${comment.Nama} <span class="comment-status">${comment.Kehadiran}</span></p><p class="comment-message">${comment.Ucapan}</p>`;
            list.prepend(item);
          });

          document.getElementById("hadirCount").firstChild.textContent = hadir;
          document.getElementById("tidakHadirCount").firstChild.textContent =
            tidakHadir;
        })
        .catch((err) => console.error("Gagal memuat komentar:", err));
    },
  };

  // =========================================================================
  // === INISIALISASI APLIKASI ===
  // =========================================================================
  App.init();
});
