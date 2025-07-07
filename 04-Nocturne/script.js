document.addEventListener("DOMContentLoaded", () => {
  // =======================================================
  // === PUSAT KONTROL & DATA UNDANGAN (EDIT DI SINI) ===
  // =======================================================
  const CONFIG = {
    title: "Undangan Pernikahan Ardi & Rania",
    favicon: "assets/images/favicon.png",
    audio: "assets/audio/youlookatme.mp3",

    groom: {
      shortName: "Ardi",
      fullName: "Ardi Pratama, S.Kom.",
      parents: "Putra Kedua dari Bapak H. Subagyo & Ibu Hj. Ibu Hj. Lestari",
      photo: "assets/images/mempelai-pria.jpg",
      instagram:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
    },

    bride: {
      shortName: "Rania",
      fullName: "Rania Safitri, S.E.",
      parents: "Putri Kedua dari Bapak Drs. Endang Wijaya & Ibu Amalia, S.Pd.",
      photo: "assets/images/mempelai-wanita.jpg",
      instagram:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
    },

    backgrounds: {
      hero: "assets/images/cover.jpg",
      vow: "assets/images/cover.jpg",
      closing: "assets/images/prewedding-penutup.jpg",
    },

    vow: {
      title: "Ikrar Kami",
      text: `<span class="highlight">cinta</span>
             <span class="vow-line">bukanlah tentang menemukan kesempurnaan,</span>
             <span class="vow-line">melainkan merayakan ketidaksempurnaan dengan penuh kesabaran.</span>
             <span class="vow-line">Sebuah perjalanan untuk tumbuh bersama,</span>
             <span class="vow-line">bukan hanya berjalan beriringan.</span>`,
    },

    event: {
      countdownDate: "2025-12-01T08:00:00",
      photo: "assets/images/prewedding-penutup.jpg",
      details: [
        {
          title: "Akad Nikah",
          date: "Senin, 1 Desember 2025",
          time: "08:00 - 10:00 WIB",
          venue: "Masjid Agung Nocturne, Jakarta",
          address:
            "The Vow Premiere Venue, Jalan Kenangan Manis Blok C No. 7, Bandung",
          gmapsUrl: "https://maps.app.goo.gl/4KLKjy1T3RQVnkEKA",
        },
        {
          title: "Syukuran Resepsi",
          date: "Selasa, 1 Desember 2025",
          time: "10:00 - 21:00 WIB",
          venue: "Grand Ballroom Nocturne, Jakarta",
          address:
            "The Vow Premiere Venue, Jalan Kenangan Manis Blok C No. 7, Bandung",
          gmapsUrl: "https://maps.app.goo.gl/4KLKjy1T3RQVnkEKA",
        },
      ],
    },

    gallery: [
      "assets/images/galeri-1.jpg",
      "assets/images/galeri-2.jpg",
      "assets/images/galeri-3.jpg",
      "assets/images/galeri-4.jpg",
      "assets/images/galeri-5.jpg",
      "assets/images/galeri-2.jpg",
    ],

    weddingGift: {
      intro:
        "Doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami telah menyediakan beberapa opsi di bawah ini untuk memudahkan.",
      accounts: [
        { name: "Ardi Pratam (BCA)", number: "1234567890" },
        { name: "Rania Safitri (Gopay)", number: "08123456789" },
        {
          name: "Alamat Kirim Kado",
          number: "Jl. Kenangan Indah No. 4, Bandung. Penerima: Ardi/Rania",
        },
      ],
    },

    closing: {
      text: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu. Atas kehadiran serta doa restu yang telah diberikan, kami ucapkan terima kasih.",
      coupleName: "Ardi & Rania",
    },

    backend: {
      url: "https://script.google.com/macros/s/AKfycbyVJI5F-HFHLPteYvrUZSPTO6gqfkH5rYlchRW0n3K--mcq2GBnY3mFZRObAea-10lw/exec",
      sheetName: "Nocturne",
    },

    credit: {
      name: "TemuHati.id",
      instagram:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
    },
  };

  // =======================================================
  // === FUNGSI BANTU & RENDERER ===
  // =======================================================
  const set = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) el[prop] = value;
  };

  const generateCalendarLink = (eventDetail) => {
    const googleCalendarUrl =
      "https://www.google.com/calendar/render?action=TEMPLATE";
    const eventDate = new Date(CONFIG.event.countdownDate);
    const [startTime, endTime] = eventDetail.time
      .replace(/WIB/g, "")
      .trim()
      .split(" - ");
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const startDate = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
      startHour,
      startMinute
    );
    const endDate = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
      endHour,
      endMinute
    );

    const toISOStringWithoutMs = (date) =>
      date.toISOString().replace(/[-:]|\.\d{3}/g, "");

    const details = `Pernikahan ${CONFIG.groom.shortName} & ${CONFIG.bride.shortName} - ${eventDetail.title}`;
    return `${googleCalendarUrl}&text=${encodeURIComponent(
      details
    )}&dates=${toISOStringWithoutMs(startDate)}/${toISOStringWithoutMs(
      endDate
    )}&location=${encodeURIComponent(eventDetail.address)}`;
  };

  function renderData() {
    set("title-tag", "textContent", CONFIG.title);
    set("favicon", "href", CONFIG.favicon);
    set("background-music", "src", CONFIG.audio);

    set("cover-groom-name", "textContent", CONFIG.groom.shortName);
    set("cover-bride-name", "textContent", CONFIG.bride.shortName);

    document.getElementById(
      "hero-bg"
    ).style.backgroundImage = `url('${CONFIG.backgrounds.hero}')`;
    document.getElementById(
      "vow-bg"
    ).style.backgroundImage = `url('${CONFIG.backgrounds.vow}')`;
    document.getElementById(
      "closing"
    ).style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${CONFIG.backgrounds.closing}')`;

    set("vow-title", "innerHTML", CONFIG.vow.title);
    set("vow-text", "innerHTML", CONFIG.vow.text);

    set("groom-photo", "src", CONFIG.groom.photo);
    set("groom-fullname", "textContent", CONFIG.groom.fullName);
    set("groom-parents", "innerHTML", CONFIG.groom.parents);
    set("groom-social", "href", CONFIG.groom.instagram);
    set("bride-photo", "src", CONFIG.bride.photo);
    set("bride-fullname", "textContent", CONFIG.bride.fullName);
    set("bride-parents", "innerHTML", CONFIG.bride.parents);
    set("bride-social", "href", CONFIG.bride.instagram);

    const eventContainer = document.getElementById("event-panel-container");
    if (eventContainer) {
      let eventHTML = `<div class="event-photo"><img src="${CONFIG.event.photo}" alt="Detail Suasana Pernikahan" /></div>`;
      eventHTML += '<div class="event-info">';
      CONFIG.event.details.forEach((evt) => {
        const calendarUrl = generateCalendarLink(evt);
        eventHTML += `
                <div class="event-block">
                    <h3>${evt.title}</h3>
                    <p class="event-date"><i class="fas fa-calendar-alt"></i> ${evt.date}</p>
                    <p class="event-time"><i class="fas fa-clock"></i> ${evt.time}</p>
                    <p class="event-venue"><i class="fas fa-map-marker-alt"></i> ${evt.venue}</p>
                    <div class="event-actions">
                        <a href="${calendarUrl}" target="_blank" class="event-cta-link">Kalender</a>
                        <a href="${evt.gmapsUrl}" target="_blank" class="event-cta-link">Lihat Peta</a>
                    </div>
                </div>`;
      });
      eventHTML += "</div>";
      eventContainer.innerHTML = eventHTML;
    }

    const galleryContainer = document.getElementById("gallery-grid-container");
    if (galleryContainer) {
      galleryContainer.innerHTML = CONFIG.gallery
        .map(
          (img) => `
        <a href="${img}" class="gallery-item">
          <img src="${img}" alt="Galeri Foto" />
        </a>`
        )
        .join("");
    }

    set("gift-intro", "innerHTML", CONFIG.weddingGift.intro);
    const giftContainer = document.getElementById("gift-items-container");
    if (giftContainer) {
      giftContainer.innerHTML = CONFIG.weddingGift.accounts
        .map(
          (acc) => `
            <div class="gift-item">
                <div class="gift-details">
                    <p class="account-name">${acc.name}</p>
                    <p class="account-number">${acc.number}</p>
                </div>
                <button class="icon-copy-button" data-copy-text="${acc.number}">
                    <i class="far fa-copy"></i>
                </button>
            </div>`
        )
        .join("");
    }

    set("closing-text", "innerHTML", CONFIG.closing.text);
    set("closing-couple-names", "textContent", CONFIG.closing.coupleName);

    set("footer-instagram", "href", CONFIG.credit.instagram);
    set(
      "footer-credit",
      "innerHTML",
      `Made with <i class="fas fa-heart"></i> by ${CONFIG.credit.name}`
    );
  }

  // =======================================================
  // === FUNGSI INTERAKTIF ===
  // =======================================================
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  const musicPlayer = document.getElementById("background-music");
  const musicToggleButton = document.getElementById("music-toggle-btn");
  const footer = document.querySelector("footer");

  function startCountdown() {
    const timerContainer = document.querySelector(".countdown-timer");
    if (!timerContainer || !CONFIG.event.countdownDate) return;
    const weddingDate = new Date(CONFIG.event.countdownDate).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      if (distance < 0) {
        clearInterval(timer);
        timerContainer.innerHTML = "<p>Acara Telah Berlangsung</p>";
        return;
      }
      const pad = (num) => (num < 10 ? "0" + num : num);
      set(
        "days",
        "innerText",
        pad(Math.floor(distance / (1000 * 60 * 60 * 24)))
      );
      set(
        "hours",
        "innerText",
        pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      );
      set(
        "minutes",
        "innerText",
        pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      );
      set(
        "seconds",
        "innerText",
        pad(Math.floor((distance % (1000 * 60)) / 1000))
      );
    }, 1000);
  }

  function activateScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll(
      "#the-vow, .profile-entry, #event-details, .gallery-item, #wedding-gift, #guestbook, #closing"
    );
    if (elementsToAnimate.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
  }

  function setupMusicPlayer() {
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

  function handleGuestName() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const guestName = urlParams.get("to");
      const guestNameElement = document.getElementById(
        "guest-name-placeholder"
      );

      if (guestName && guestNameElement) {
        guestNameElement.textContent = guestName.replace(/\+/g, " ");
      }
    } catch (error) {
      console.error("Gagal menangani nama tamu:", error);
    }
  }

  function setupGalleryLightbox() {
    try {
      const lightbox = document.getElementById("lightbox");
      if (!lightbox) return;
      const lightboxImg = document.getElementById("lightbox-img");
      const galleryContainer = document.getElementById(
        "gallery-grid-container"
      );
      const closeBtn = document.querySelector(".lightbox-close");

      galleryContainer.addEventListener("click", (e) => {
        e.preventDefault();
        const item = e.target.closest(".gallery-item");
        if (item) {
          const imageUrl = item.getAttribute("href");
          lightboxImg.setAttribute("src", imageUrl);
          lightbox.classList.add("visible");
        }
      });

      const closeLightbox = () => lightbox.classList.remove("visible");
      closeBtn.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    } catch (error) {
      console.error("Error di setupGalleryLightbox:", error);
    }
  }

  function setupCopyButtons() {
    try {
      const giftContainer = document.getElementById("gift-items-container");
      giftContainer.addEventListener("click", (e) => {
        const button = e.target.closest(".icon-copy-button");
        if (button) {
          const originalIcon = button.innerHTML;
          const textToCopy = button.dataset.copyText;
          if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
              button.innerHTML = '<i class="fas fa-check"></i>';
              button.style.color = "var(--color-accent)";
              setTimeout(() => {
                button.innerHTML = originalIcon;
                button.style.color = "";
              }, 2000);
            });
          }
        }
      });
    } catch (error) {
      console.error("Error di setupCopyButtons:", error);
    }
  }

  function setupAccordion() {
    try {
      const accordionItems = document.querySelectorAll(".accordion-item");
      accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        header.addEventListener("click", () => {
          item.classList.toggle("active");
          content.style.maxHeight = item.classList.contains("active")
            ? content.scrollHeight + "px"
            : null;
        });
      });
    } catch (error) {
      console.error("Error di setupAccordion:", error);
    }
  }

  // <-- FUNGSI INI TELAH DIPERBAIKI DARI SYNTAX ERROR -->
  function escapeHTML(str) {
    if (!str) return "";
    const map = {
      "&": "&",
      "<": "<",
      ">": ">",
      '"': '"',
      "'": "'",
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
  }

  function loadComments() {
    const commentList = document.getElementById("comment-list");
    if (!commentList || !CONFIG.backend || !CONFIG.backend.url) return;
    commentList.innerHTML =
      "<p style='text-align: center;'>Memuat ucapan...</p>";
    fetch(`${CONFIG.backend.url}?sheet=${CONFIG.backend.sheetName}`)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data");
        return response.json();
      })
      .then((data) => {
        commentList.innerHTML = "";
        const comments = data;
        if (comments && comments.length > 0) {
          comments.forEach((comment) => {
            const commentHTML = `
                <div class="comment-item">
                    <p class="comment-author">${escapeHTML(
                      comment.Nama
                    )} <span class="status">${escapeHTML(
              comment.Kehadiran
            )}</span></p>
                    <p class="comment-text">${escapeHTML(comment.Ucapan)}</p>
                </div>`;
            commentList.innerHTML += commentHTML;
          });
        } else {
          commentList.innerHTML =
            "<p style='text-align: center;'>Belum ada ucapan.</p>";
        }
      })
      .catch((error) => {
        console.error("Error memuat komentar:", error);
        commentList.innerHTML = `<p style='text-align: center; color: #ff8a8a;'>Gagal memuat ucapan.<br>Cek URL Apps Script.</p>`;
      });
  }

  function setupGuestbookForm() {
    try {
      const form = document.getElementById("comment-form");
      if (!form) return;
      const attendanceInput = document.getElementById("attendance");
      const rsvpButtons = document.querySelectorAll(".rsvp-option");
      rsvpButtons.forEach((button) => {
        button.addEventListener("click", () => {
          rsvpButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");
          attendanceInput.value = button.dataset.value;
        });
      });
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = "Mengirim...";
        const dataToSend = {
          Nama: form.elements.name.value,
          Ucapan: form.elements.comment.value,
          Kehadiran: form.elements.attendance.value,
          sheetName: CONFIG.backend.sheetName,
        };
        fetch(CONFIG.backend.url, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(dataToSend),
        })
          .then(() => {
            alert("Terima kasih! Ucapan Anda sudah terkirim.");
            form.reset();
            rsvpButtons.forEach((btn) => btn.classList.remove("active"));
            document
              .querySelector('.rsvp-option[data-value="Hadir"]')
              .classList.add("active");
            attendanceInput.value = "Hadir";
            setTimeout(loadComments, 2000);
          })
          .catch((error) => alert("Terjadi kesalahan saat mengirim."))
          .finally(() => {
            submitButton.disabled = false;
            submitButton.innerHTML =
              'Kirim Ucapan <span class="arrow">→</span>';
          });
      });
    } catch (error) {
      console.error("Error di setupGuestbookForm:", error);
    }
  }

  // =======================================================
  // === ALUR UTAMA APLIKASI ===
  // =======================================================

  renderData();
  setupMusicPlayer();
  handleGuestName();
  setupGalleryLightbox();
  setupCopyButtons();
  setupAccordion();
  setupGuestbookForm();

  if (openButton) {
    openButton.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        heroCover.classList.add("fading-out");
        mainContent.classList.remove("hidden");
        if (footer) footer.classList.remove("hidden");

        body.style.overflow = "auto";
        setTimeout(() => {
          heroCover.style.display = "none";
        }, 1200);

        if (musicPlayer) {
          musicPlayer
            .play()
            .catch((e) => console.log("Autoplay musik diblokir oleh browser."));
          musicToggleButton.classList.add("playing");
        }

        if (musicToggleButton) {
          musicToggleButton.classList.remove("hidden");
        }

        startCountdown();
        activateScrollAnimations();
        loadComments();
      },
      { once: true }
    );
  }
});
