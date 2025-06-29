document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // KONFIGURASI UTAMA - SESUAIKAN DI SINI
  // =========================================================================
  const NAMA_PRIA = "Diki Gunawan";
  const NAMA_WANITA = "Meliana";
  const TANGGAL_ACARA_ISO = "2025-10-12T10:00:00"; // Format: TAHUN-BULAN-HARI T JAM:MENIT:DETIK
  const LOKASI_ACARA = "Gedung Olahraga (GOR), Jl. Lewo Babakan, Tasikmalaya";
  // URL Google Apps Script untuk mengirim dan mengambil komentar
  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbzMHvkCoo5mDUoEpO4mj8TOYY6HV0GzoBysEHJFY840aDRyIOnm3nZTX9AWBK06kVbz/exec";

  // =========================================================================
  // FUNGSI BUKA UNDANGAN & MUSIK
  // =========================================================================
  const btnOpen = document.getElementById("btnOpen");
  const hero1 = document.getElementById("hero1");
  const mainContent = document.getElementById("main-content"); // Target <main> sekarang
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  let isPlaying = false;

  function startMusic() {
    bgMusic
      .play()
      .then(() => {
        isPlaying = true;
        musicToggle.innerHTML = '<i data-feather="disc"></i>';
        feather.replace();
      })
      .catch((err) => console.warn("Autoplay musik gagal oleh browser:", err));
  }

  function toggleMusic() {
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
      musicToggle.innerHTML = '<i data-feather="pause-circle"></i>';
    } else {
      bgMusic.play();
      isPlaying = true;
      musicToggle.innerHTML = '<i data-feather="disc"></i>';
    }
    feather.replace();
  }

  btnOpen.addEventListener("click", () => {
    // 1. Sembunyikan cover secara perlahan
    hero1.classList.add("hide");

    // 2. Tampilkan konten utama
    mainContent.classList.remove("hidden");

    // 3. Buka kunci scroll
    document.body.classList.remove("lock-scroll");

    // 4. Setelah transisi cover selesai, hapus dari DOM agar tidak mengganggu
    setTimeout(() => {
      hero1.style.display = "none";
    }, 1000);

    // 5. Putar musik dan tampilkan tombolnya
    startMusic();
    musicToggle.style.display = "grid";
  });

  musicToggle.addEventListener("click", toggleMusic);
  // =========================================================================
  // NAMA TAMU DARI URL
  // =========================================================================
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to");
  if (guestName) {
    document.getElementById("namaTamu").innerText = decodeURIComponent(
      guestName.replace(/\+/g, " ")
    );
  }

  // =========================================================================
  // ANIMASI SAAT SCROLL (SATU OBSERVER UNTUK SEMUA)
  // =========================================================================
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Ini adalah satu-satunya baris yang diubah.
        // 'toggle' akan menambah/menghapus kelas 'show' secara otomatis
        // saat elemen masuk/keluar dari layar.
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.25 }
  ); // Elemen akan (re)animasi saat 25% terlihat

  // Mengamati semua elemen yang perlu dianimasikan
  document
    .querySelectorAll(
      ".animate-on-scroll, .section-kutipan, .animate-top, .animate-bottom, .and-symbol"
    )
    .forEach((el) => {
      animationObserver.observe(el);
    });
  // =========================================================================
  // COUNTDOWN TIMER
  // =========================================================================
  const targetDate = new Date(TANGGAL_ACARA_ISO).getTime();
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown").innerHTML =
        "<h4>Acara Telah Berlangsung</h4>";
      return;
    }

    document.getElementById("days").innerText = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );
    document.getElementById("hours").innerText = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % (1000 * 60)) / 1000
    );
  }, 1000);

  // =========================================================================
  // TOMBOL SAVE THE DATE
  // =========================================================================
  document.getElementById("btnSaveDate").addEventListener("click", () => {
    const googleCalendarDate = new Date(TANGGAL_ACARA_ISO)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(
      NAMA_PRIA
    )}+dan+${encodeURIComponent(
      NAMA_WANITA
    )}&dates=${googleCalendarDate}/${googleCalendarDate}&details=Undangan+pernikahan+kami.+Kami+berharap+kehadiran+Anda.&location=${encodeURIComponent(
      LOKASI_ACARA
    )}`;
    window.open(url, "_blank");
  });

  // =========================================================================
  // BAGIAN HADIAH (GIFT SECTION)
  // =========================================================================
  const btnGift = document.getElementById("btnGift");
  const giftButtonContainer = document.getElementById("giftButtonContainer");
  const giftSection = document.getElementById("giftSection");
  const giftCards = document.querySelectorAll(".gift-card");

  btnGift.addEventListener("click", () => {
    // Sembunyikan container tombol dan tampilkan section gift
    giftButtonContainer.style.display = "none";
    giftSection.classList.add("show");

    // Tampilkan kartu satu per satu dengan delay
    giftCards.forEach((card, index) => {
      setTimeout(() => card.classList.add("show"), index * 200);
    });
  });

  document.querySelectorAll(".btn-copy").forEach((button) => {
    button.addEventListener("click", function () {
      const rekId = this.dataset.rekId;
      const nomor = document.getElementById(rekId).innerText;
      navigator.clipboard
        .writeText(nomor)
        .then(() => {
          alert(`Nomor rekening ${nomor} berhasil disalin!`);
        })
        .catch((err) => {
          alert("Gagal menyalin. Coba lagi.");
          console.error("Copy error:", err);
        });
    });
  });

  // =========================================================================
  // FORM KOMENTAR & RSVP
  // =========================================================================
  const commentForm = document.getElementById("commentForm");
  const commentsList = document.getElementById("commentsList");
  const hadirCountEl = document.getElementById("hadirCount").firstChild;
  const tidakHadirCountEl =
    document.getElementById("tidakHadirCount").firstChild;

  // Fungsi untuk mengirim komentar
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitButton = this.querySelector("button");
    submitButton.disabled = true;
    submitButton.innerText = "Mengirim...";

    // --- PERUBAHAN UTAMA DI SINI ---
    // Mengambil data langsung dari elemen berdasarkan ID-nya. Ini lebih andal.
    const data = {
      Nama: document.getElementById("name").value,
      Ucapan: document.getElementById("message").value,
      Kehadiran: document.getElementById("kehadiran").value,
    };
    // --- AKHIR PERUBAHAN ---

    fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // Disesuaikan untuk GAS
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result === "success") {
          alert("Ucapan berhasil terkirim! Terima kasih.");
          commentForm.reset();
          loadComments(); // Muat ulang komentar setelah berhasil mengirim
        } else {
          throw new Error(response.message || "Unknown error");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Terjadi kesalahan, ucapan gagal terkirim.");
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.innerText = "Kirim Ucapan";
      });
  });

  // Fungsi untuk memuat komentar dari Google Sheet
  function loadComments() {
    fetch(GAS_URL)
      .then((res) => res.json())
      .then((data) => {
        commentsList.innerHTML = ""; // Kosongkan daftar sebelum diisi
        let hadir = 0;
        let tidakHadir = 0;

        data.forEach((comment) => {
          if (comment.Kehadiran === "Hadir") hadir++;
          if (comment.Kehadiran === "Tidak Hadir") tidakHadir++;

          const commentDiv = document.createElement("div");
          commentDiv.className = "comment";
          commentDiv.innerHTML = `
            <p class="comment-name">${comment.Nama} <span class="comment-status">${comment.Kehadiran}</span></p>
            <p class="comment-message">${comment.Ucapan}</p>
          `;
          commentsList.prepend(commentDiv); // Tampilkan komentar baru di paling atas
        });

        hadirCountEl.textContent = hadir;
        tidakHadirCountEl.textContent = tidakHadir;
      })
      .catch((err) => {
        console.error("Gagal memuat komentar:", err);
        commentsList.innerHTML =
          "<p>Gagal memuat ucapan. Coba segarkan halaman.</p>";
      });
  }

  // Muat komentar saat halaman pertama kali dibuka
  loadComments();

  // Inisialisasi Feather Icons
  feather.replace();
});
