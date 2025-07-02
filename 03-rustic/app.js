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
      // (Kita akan isi logika Google Calendar di sini nanti jika diperlukan)
      alert("Tombol Save The Date diklik!");
    });
  }

  // --- Nama Tamu dari URL ---
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  const guestNameElement = document.querySelector(".guest-name");
  if (guest && guestNameElement) {
    guestNameElement.innerText = guest.replace(/\+/g, " ");
  }

  // --- Fungsi Buka Undangan (Geser) ---
  if (openButton && stageContainer) {
    openButton.addEventListener("click", () => {
      // 1. Tambahkan class untuk memicu animasi geser
      stageContainer.classList.add("slide-active");

      // 2. Sembunyikan tombol setelah diklik
      openButton.classList.add("hidden");
    });
  }

  // (Tambahkan logika untuk tombol Save The Date dan lainnya di sini jika perlu)
});
// --- Fungsi untuk SCROLL HORIZONTAL YANG SMOOTH ---
const mainContentArea = document.getElementById("main-content");
if (mainContentArea) {
  let targetScroll = 0;
  let currentScroll = 0;
  const easeFactor = 0.08; // Angka kecil untuk efek yang sangat halus

  // Saat mouse di-scroll, kita hanya update targetnya
  mainContentArea.addEventListener("wheel", (event) => {
    event.preventDefault();
    targetScroll += event.deltaY;

    // Batasi agar target tidak scroll melebihi batas
    const maxScroll = mainContentArea.scrollWidth - mainContentArea.clientWidth;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
  });

  // Fungsi animasi yang berjalan terus-menerus
  const smoothScroll = () => {
    // Gerakkan posisi saat ini (currentScroll) sedikit demi sedikit menuju target
    currentScroll += (targetScroll - currentScroll) * easeFactor;

    // Terapkan posisi baru ke scrollbar
    mainContentArea.scrollLeft = currentScroll;

    // Minta browser untuk menjalankan fungsi ini lagi di frame berikutnya
    requestAnimationFrame(smoothScroll);
  };

  // Mulai loop animasi
  smoothScroll();
}
