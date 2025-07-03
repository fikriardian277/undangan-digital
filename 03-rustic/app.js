/* =================================================================
    LOGIKA INTERAKTIF UNTUK TEMA RUSTIC (VERSI STABIL)
================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // === Seleksi Elemen Utama ===
  const invitationOpener = document.getElementById("invitation-opener");
  const openButton = document.getElementById("open-invitation");
  const heroCover = document.getElementById("hero-cover");
  const mainContent = document.getElementById("main-content");
  const btnSaveDate = document.getElementById("btnSaveDate");

  if (btnSaveDate) {
    const namaPria = "Reyhan";
    const namaWanita = "Risna";
    const tanggalMulai = new Date("2025-07-04T10:00:00+07:00");
    const tanggalSelesai = new Date("2025-07-04T18:00:00+07:00");
    const lokasi = "Jl. Contoh Alamat, Kota";
    const deskripsi = "Undangan Pernikahan Reyhan & Risna";

    const start = tanggalMulai.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const end = tanggalSelesai.toISOString().replace(/[-:]|\.\d{3}/g, "");

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(
      namaPria
    )}+dan+${encodeURIComponent(
      namaWanita
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      deskripsi
    )}&location=${encodeURIComponent(lokasi)}&sf=true&output=xml`;

    btnSaveDate.href = calendarUrl;
  }

  if (invitationOpener && openButton && heroCover && mainContent) {
    // --- TAHAP 1: Animasi amplop muncul dari bawah (OTOMATIS) ---
    setTimeout(() => {
      invitationOpener.classList.add("is-visible");
    }, 800); // Jeda 0.8 detik

    // --- TAHAP 2: Animasi membuka (OTOMATIS & BERANTAI) ---
    setTimeout(() => {
      invitationOpener.classList.add("is-opening");
    }, 2000); // Jeda 2 detik (0.8s tunggu + 1.2s durasi slide up)

    // --- TAHAP 3: Pengguna mengklik tombol "Buka Undangan" ---
    openButton.addEventListener("click", () => {
      // 1. Buat amplop terbang ke atas
      invitationOpener.classList.add("drop-down");

      // 2. Tampilkan konten utama (fade in)
      mainContent.classList.remove("hidden");

      // 3. Setelah animasi terbang selesai, sembunyikan cover & izinkan scroll
      setTimeout(() => {
        heroCover.classList.add("hidden");
        document.body.style.overflow = "auto";
      }, 1200); // Sesuaikan dengan durasi transisi fly-away
    });
  }
  mainContent.classList.remove("hidden");
  mainContent.classList.add("fade-in");

  // === Logika Nama Tamu (Sama seperti sebelumnya) ===
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("to");
  const guestNameElement = document.querySelector(".guest-name");
  if (guest && guestNameElement) {
    guestNameElement.innerText = guest.replace(/\+/g, " ");
  }
});
