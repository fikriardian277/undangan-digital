/* =================================================================
   FILE JAVASCRIPT FINAL (VERSI INTERAKTIF)
   ================================================================= */

function startCountdown() {
  const weddingDate = new Date("Nov 15, 2025 09:00:00").getTime();
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
      const countdownElement = document.getElementById("countdown");
      if (countdownElement)
        countdownElement.innerHTML = "<h2>The Day Has Come!</h2>";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const daysEl = document.getElementById("days");
    if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
    const hoursEl = document.getElementById("hours");
    if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    const minutesEl = document.getElementById("minutes");
    if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    const secondsEl = document.getElementById("seconds");
    if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

function createLightbox() {
  const lightboxLinks = document.querySelectorAll('a[data-lightbox="gallery"]');
  lightboxLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const imageUrl = this.getAttribute("href");
      const lightboxOverlay = document.createElement("div");
      lightboxOverlay.className = "lightbox-overlay";
      lightboxOverlay.innerHTML = `<div class="lightbox-content"><img src="${imageUrl}" class="lightbox-image" alt="Gambar yang diperbesar"></div><button class="lightbox-close">&times;</button>`;
      document.body.appendChild(lightboxOverlay);
      const closeButton = lightboxOverlay.querySelector(".lightbox-close");
      closeButton.addEventListener("click", () => {
        document.body.removeChild(lightboxOverlay);
      });
      lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay) {
          document.body.removeChild(lightboxOverlay);
        }
      });
    });
  });
}

function activateScrollAnimations() {
  const sectionsToAnimate = document.querySelectorAll(
    "#quote, #couple, #event, #story, #gallery"
  );
  if (sectionsToAnimate.length === 0) return;
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
    { threshold: 0.2 }
  );
  sectionsToAnimate.forEach((section) => observer.observe(section));
}

/**
 * FUNGSI AUTO-SCROLL (VERSI DISEMPURNAKAN DENGAN INFINITE LOOP)
 */
function setupAutoScrollGallery() {
  const container = document.querySelector(".filmstrip-container");
  if (!container) return;

  // --- LANGKAH 1: DUPLIKASI ITEM UNTUK EFEK INFINITE LOOP ---
  const originalItems = Array.from(container.children);
  originalItems.forEach((item) => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });

  // --- LANGKAH 2: LOGIKA ANIMASI DENGAN REQUESTANIMATIONFRAME ---
  let animationFrameId;
  let isPaused = false;
  const scrollAmount = 0.5; // Atur kecepatan di sini

  const scrollLoop = () => {
    if (isPaused) return;

    container.scrollLeft += scrollAmount;

    // Logika baru untuk looping:
    // Hitung setengah dari total lebar scroll (lebar set gambar asli)
    const originalScrollWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= originalScrollWidth) {
      container.scrollLeft = 0; // Kembali ke awal tanpa terlihat
    }

    animationFrameId = requestAnimationFrame(scrollLoop);
  };

  const startAnimation = () => {
    if (isPaused) {
      isPaused = false;
      scrollLoop();
    }
  };

  const stopAnimation = () => {
    isPaused = true;
    cancelAnimationFrame(animationFrameId);
  };

  // Event listener untuk interaksi (tetap sama)
  container.addEventListener("mouseenter", stopAnimation);
  container.addEventListener("mouseleave", startAnimation);
  container.addEventListener("touchstart", stopAnimation, { passive: true });
  container.addEventListener("touchend", startAnimation);

  // Mulai animasi
  scrollLoop();
}

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".interactive-stack-container");
  if (cardContainer) {
    const cards = cardContainer.querySelectorAll(".couple-card");
    cardContainer.addEventListener("click", () => {
      cards.forEach((card) => card.classList.toggle("is-active"));
    });
  }
  startCountdown();
  createLightbox();
  activateScrollAnimations();
});

window.addEventListener("load", () => {
  setupAutoScrollGallery();
});
