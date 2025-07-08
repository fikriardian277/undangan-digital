// Menunggu semua elemen HTML siap sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
  // =======================================================
  // === PUSAT KONTROL & DATA UNDANGAN ===
  // =======================================================
  const CONFIG = {
    // Ganti tanggal ini dengan tanggal acara Anda
    weddingDate: "Nov 15, 2025 09:00:00",

    // Ganti dengan URL Apps Script & Nama Tab Sheet Anda
    backend: {
      url: "https://script.google.com/macros/s/AKfycbyVJI5F-HFHLPteYvrUZSPTO6gqfkH5rYlchRW0n3K--mcq2GBnY3mFZRObAea-10lw/exec",
      sheetName: "serenity",
    },

    // Ganti dengan link Instagram & nama kredit Anda
    footer: {
      instagramUrl:
        "https://www.instagram.com/temuhati.kita?igsh=dmZ4cGJyMmZmZzM2",
      creditText: 'Made with <i class="fas fa-heart"></i> by TemuHati.id',
    },
  };

  // =======================================================
  // === DEFINISI SEMUA FUNGSI APLIKASI ===
  // =======================================================

  function initStaticContent() {
    const footerCredit = document.getElementById("footer-credit");
    const footerInsta = document.getElementById("footer-instagram");
    if (footerCredit) footerCredit.innerHTML = CONFIG.footer.creditText;
    if (footerInsta) footerInsta.href = CONFIG.footer.instagramUrl;
  }

  function startCountdown() {
    const targetTime = new Date(CONFIG.weddingDate).getTime();
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;
    const elements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds"),
    };
    const interval = setInterval(() => {
      const distance = targetTime - new Date().getTime();
      if (distance < 0) {
        clearInterval(interval);
        countdownEl.innerHTML = "<h2>The Day Has Come!</h2>";
        return;
      }
      const pad = (n) => (n < 10 ? "0" + n : n);
      elements.days.innerText = pad(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      );
      elements.hours.innerText = pad(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      elements.minutes.innerText = pad(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      elements.seconds.innerText = pad(
        Math.floor((distance % (1000 * 60)) / 1000)
      );
    }, 1000);
  }

  function setupClickListeners() {
    document.body.addEventListener("click", (event) => {
      const target = event.target;

      const copyBtn = target.closest(".copy-btn");
      if (copyBtn) {
        const targetElement = document.getElementById(
          copyBtn.dataset.copyTarget
        );
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
        return;
      }

      const galleryLink = target.closest('a[data-lightbox="gallery"]');
      if (galleryLink) {
        event.preventDefault();
        const overlay = document.createElement("div");
        overlay.className = "lightbox-overlay";
        overlay.innerHTML = `<div class="lightbox-content"><img src="${galleryLink.href}" class="lightbox-image"></div><button class="lightbox-close">&times;</button>`;
        document.body.appendChild(overlay);
        const close = () => document.body.removeChild(overlay);
        overlay
          .querySelector(".lightbox-close")
          .addEventListener("click", close);
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) close();
        });
        return;
      }

      const cardContainer = target.closest(".interactive-stack-container");
      if (cardContainer) {
        cardContainer
          .querySelectorAll(".couple-card")
          .forEach((c) => c.classList.toggle("is-active"));
      }
    });
  }

  function setupScrollAnimations() {
    const sections = document.querySelectorAll(
      "#quote, #couple, #event, #story, #gallery, #rsvp, #gift, #closing"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-visible", entry.isIntersecting)
        );
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));

    const footer = document.getElementById("page-footer");
    const guestDisplay = document.getElementById("guest-display");
    if (footer && guestDisplay) {
      const footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            guestDisplay.classList.toggle("is-hidden", entry.isIntersecting)
          );
        },
        { threshold: 0.1 }
      );
      footerObserver.observe(footer);
    }
  }

  function setupAutoScrollGallery() {
    const container = document.querySelector(".filmstrip-container");
    const track = document.querySelector(".filmstrip-track");
    if (!container || !track || track.scrollWidth <= container.clientWidth)
      return;

    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => track.appendChild(item.cloneNode(true)));

    let pos = 0,
      isPaused = false,
      id;
    const scrollAmount = 0.5;
    const resetPoint = track.scrollWidth / 2;

    const loop = () => {
      if (isPaused) return;
      pos += scrollAmount;
      if (pos >= resetPoint) pos -= resetPoint;
      track.style.transform = `translateX(-${pos}px)`;
      id = requestAnimationFrame(loop);
    };
    const start = () => {
      if (isPaused) {
        isPaused = false;
        loop();
      }
    };
    const stop = () => {
      isPaused = true;
      cancelAnimationFrame(id);
    };

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);
    container.addEventListener("touchstart", stop, { passive: true });
    container.addEventListener("touchend", start);
    loop();
  }

  function setupRsvpForm(config) {
    const form = document.getElementById("rsvp-form");
    const wishesList = document.getElementById("wishes-list");
    if (!form || !wishesList) return;

    const statusDiv = document.getElementById("form-status");
    const submitBtn = form.querySelector(".submit-btn");
    const guestsGroup = document.getElementById("jumlah-tamu-group");
    const rsvpRadios = form.querySelectorAll('input[name="Kehadiran"]');
    const escape = (str) =>
      str
        ? str.replace(
            /[&<>"']/g,
            (m) =>
              ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
              }[m])
          )
        : "";

    rsvpRadios.forEach((r) =>
      r.addEventListener(
        "change",
        (e) =>
          (guestsGroup.style.display =
            e.target.value === "Hadir" ? "block" : "none")
      )
    );

    const loadWishes = () => {
      fetch(`${config.backend.url}?sheet=${config.backend.sheetName}`)
        .then((res) => res.json())
        .then((data) => {
          wishesList.innerHTML = "";
          if (data && data.length > 0) {
            data.reverse().forEach((wish) => {
              if (!wish.Nama || !wish.Ucapan) return;
              const date = new Date(wish.Timestamp).toLocaleDateString(
                "id-ID",
                { day: "numeric", month: "long", year: "numeric" }
              );
              const card = document.createElement("div");
              card.className = "wish-card";
              card.innerHTML = `<span class="wish-name">${escape(
                wish.Nama
              )}</span><span class="wish-date">${date}</span><p class="wish-text">${escape(
                wish.Ucapan
              )}</p>`;
              wishesList.appendChild(card);
            });
          } else {
            wishesList.innerHTML =
              "<p style='text-align: center;'>Jadilah yang pertama mengirim ucapan!</p>";
          }
        })
        .catch((err) => {
          console.error(err);
          wishesList.innerHTML = `<p style='text-align: center; color: #ff8a8a;'>Gagal memuat ucapan.</p>`;
        });
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";
      const dataToSend = {
        Nama: form.elements.Nama.value,
        Ucapan: form.elements.Ucapan.value,
        Kehadiran: form.elements.Kehadiran.value,
        Jumlah:
          form.elements.Kehadiran.value === "Hadir"
            ? form.elements.Jumlah.value
            : 0,
        sheetName: config.backend.sheetName,
      };
      fetch(config.backend.url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(dataToSend),
      })
        .then(() => {
          statusDiv.textContent = "Terima kasih! Ucapan Anda sudah terkirim.";
          statusDiv.style.color = "#4CAF50";
          form.reset();
          guestsGroup.style.display = "none";
          setTimeout(loadWishes, 2000);
        })
        .catch((err) => alert("Terjadi kesalahan."))
        .finally(() => {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Kirim Konfirmasi";
            statusDiv.textContent = "";
          }, 2000);
        });
    });

    loadWishes();
  }

  // =======================================================
  // === INISIALISASI APLIKASI ===
  // =======================================================

  initStaticContent();
  startCountdown();
  setupClickListeners();
  setupScrollAnimations();
  setupRsvpForm(CONFIG);

  window.addEventListener("load", setupAutoScrollGallery);
});
