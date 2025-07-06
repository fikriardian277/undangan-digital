document.addEventListener("DOMContentLoaded", () => {
  // =======================================================
  // === PENGATURAN ELEMEN & KONFIGURASI ===
  // =======================================================
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  const musicPlayer = document.getElementById("background-music"); // <-- TAMBAHKAN INI
  const musicToggleButton = document.getElementById("music-toggle-btn");

  const CONFIG = {
    backendUrl:
      "https://script.google.com/macros/s/AKfycbyVJI5F-HFHLPteYvrUZSPTO6gqfkH5rYlchRW0n3K--mcq2GBnY3mFZRObAea-10lw/exec", // GANTI DENGAN URL-MU
    sheetName: "Nocturne",
  };

  // =======================================================
  // === KUMPULAN SEMUA FUNGSI ===
  // =======================================================

  function startCountdown() {
    const timerContainer = document.querySelector(".countdown-timer");
    if (!timerContainer) return;
    const weddingDate = new Date("Jul 8, 2025 08:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      if (distance < 0) {
        clearInterval(timer);
        timerContainer.innerHTML = "<p>Acara Telah Berlangsung</p>";
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

  function activateScrollAnimations() {
    const sectionsToAnimate = document.querySelectorAll(
      "#the-vow, .profile-entry, #event-details, #gallery h2, .gallery-item, #wedding-gift, #guestbook, #closing"
    );
    if (sectionsToAnimate.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
          else entry.target.classList.remove("is-visible");
        });
      },
      { threshold: 0.2 }
    );
    sectionsToAnimate.forEach((section) => observer.observe(section));
  }

  function setupGalleryLightbox() {
    try {
      const lightbox = document.getElementById("lightbox");
      if (!lightbox) return;
      const lightboxImg = document.getElementById("lightbox-img");
      const galleryItems = document.querySelectorAll(".gallery-item");
      const closeBtn = document.querySelector(".lightbox-close");
      galleryItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const imageUrl = item.getAttribute("href");
          lightboxImg.setAttribute("src", imageUrl);
          lightbox.classList.add("visible");
        });
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
      const copyButtons = document.querySelectorAll(".icon-copy-button");
      copyButtons.forEach((button) => {
        const originalIcon = button.innerHTML;
        button.addEventListener("click", (e) => {
          e.preventDefault();
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
        });
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
          const isActive = item.classList.contains("active");
          accordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            otherItem.querySelector(".accordion-content").style.maxHeight =
              null;
          });
          if (!isActive) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      });
    } catch (error) {
      console.error("Error di setupAccordion:", error);
    }
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
          "'": "&#39;",
        }[m])
    );
  }

  function loadComments() {
    const commentList = document.getElementById("comment-list");
    if (
      !commentList ||
      !CONFIG.backendUrl ||
      CONFIG.backendUrl === "URL_APPS_SCRIPT_KAMU_DI_SINI"
    ) {
      if (commentList)
        commentList.innerHTML =
          "<p style='text-align: center;'>URL Apps Script belum diatur.</p>";
      return;
    }

    commentList.innerHTML =
      "<p style='text-align: center;'>Memuat ucapan...</p>";
    fetch(`${CONFIG.backendUrl}?sheet=${CONFIG.sheetName}`)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data");
        return response.json();
      })
      .then((data) => {
        commentList.innerHTML = "";
        const comments = data; // Asumsi data adalah array
        if (comments && comments.length > 0) {
          comments.forEach((comment) => {
            const commentHTML = `
                            <div class="comment-item">
                                <p class="comment-author">${escapeHTML(
                                  comment.Nama
                                )} <span class="status">${escapeHTML(
              comment.Kehadiran
            )}</span></p>
                                <p class="comment-text">${escapeHTML(
                                  comment.Ucapan
                                )}</p>
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
        commentList.innerHTML = `<p style='text-align: center; color: #ff8a8a;'>Gagal memuat ucapan.<br>Cek URL Apps Script & izin akses.</p>`;
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
          sheetName: CONFIG.sheetName,
        };
        fetch(CONFIG.backendUrl, {
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
  // === ALUR UTAMA & PEMANGGILAN FUNGSI ===
  // =======================================================

  // 1. Atur semua fungsi yang bisa disiapkan dari awal
  setupGalleryLightbox();
  setupCopyButtons();
  setupAccordion();
  setupGuestbookForm();

  // 2. Atur event listener utama untuk membuka undangan
  if (openButton) {
    openButton.addEventListener("click", (event) => {
      event.preventDefault();
      heroCover.classList.add("fading-out");
      mainContent.classList.remove("hidden");
      body.style.overflow = "auto";
      setTimeout(() => {
        heroCover.remove();
      }, 1200);

      // 3. Panggil fungsi yang hanya berjalan SETELAH undangan dibuka
      startCountdown();
      activateScrollAnimations();
      loadComments();
    });
  }
});
