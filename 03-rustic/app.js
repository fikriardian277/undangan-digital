/* =================================================================
   LOGIKA INTERAKTIF UNTUK TEMA RUSTIC (VERSI GESER)
================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Seleksi elemen yang dibutuhkan
  const openButton = document.getElementById("open-invitation");
  const stageContainer = document.querySelector(".stage-container");

  // --- Fungsi untuk Save The Date ---
  const saveDateButton = document.getElementById("save-the-date");
  if (saveDateButton) {
    saveDateButton.addEventListener("click", () => {
      alert("Tombol Save The Date diklik!");
    });
  } // --- Nama Tamu dari URL ---

  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  const guestNameElement = document.querySelector(".guest-name");
  if (guest && guestNameElement) {
    guestNameElement.innerText = guest.replace(/\+/g, " ");
  } // --- Fungsi Buka Undangan (Geser) ---

  if (openButton && stageContainer) {
    openButton.addEventListener("click", () => {
      stageContainer.classList.add("slide-active");
      openButton.classList.add("hidden");
    });
  }
});

// --- Fungsi untuk SCROLL HORIZONTAL (Mouse & Touch) ---
const mainContentArea = document.getElementById("main-content");
if (mainContentArea) {
  let targetScroll = 0;
  let currentScroll = 0;
  const easeFactor = 0.08;

  // Variabel baru untuk logika sentuhan (touch)
  let isDragging = false;
  let startX;
  let scrollLeftStart; // 1. EVENT LISTENER UNTUK MOUSE SCROLL

  mainContentArea.addEventListener("wheel", (event) => {
    event.preventDefault();
    targetScroll += event.deltaY;
    const maxScroll = mainContentArea.scrollWidth - mainContentArea.clientWidth;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
  });

  // 2. EVENT LISTENERS BARU UNTUK SENTUHAN (TOUCH)
  mainContentArea.addEventListener("touchstart", (event) => {
    isDragging = true;
    startX = event.touches[0].pageX; // Posisi X awal jari
    scrollLeftStart = currentScroll; // Posisi scroll saat ini
  });

  mainContentArea.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    event.preventDefault(); // Mencegah scroll vertikal halaman saat menggeser

    const currentX = event.touches[0].pageX;
    const walk = currentX - startX; // Seberapa jauh jari digeser

    // Update target scroll berdasarkan pergeseran jari
    targetScroll = scrollLeftStart - walk;

    const maxScroll = mainContentArea.scrollWidth - mainContentArea.clientWidth;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
  });

  mainContentArea.addEventListener("touchend", () => {
    isDragging = false;
  });
  mainContentArea.addEventListener("touchcancel", () => {
    isDragging = false;
  }); // 3. FUNGSI ANIMASI (TETAP SAMA)

  const smoothScroll = () => {
    currentScroll += (targetScroll - currentScroll) * easeFactor;
    mainContentArea.scrollLeft = currentScroll;
    requestAnimationFrame(smoothScroll);
  };

  smoothScroll();
}
