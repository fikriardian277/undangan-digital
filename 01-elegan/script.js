document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // KONFIGURASI UTAMA - SEMUA DATA KLIEN DIUBAH DI SINI
  // =========================================================================

  const NAMA_PRIA = "Ryan Muhammad";
  const NAMA_PANGGILAN_PRIA = "Rizky";
  const ORTU_PRIA =
    "Putra Kedua dari Bapak H. Andi Pratama & Ibu Hj. Siti Mariam";
  const IG_PRIA = "https://instagram.com/Rizky";

  const NAMA_WANITA = "Neni Nuraeni";
  const NAMA_PANGGILAN_WANITA = "Aulia";
  const ORTU_WANITA =
    "Putri Kedua dari Bapak H. Bambang Suhendar & Hj. Nurhayati";
  const IG_WANITA = "https://instagram.com/Aulia";

  // Format Tanggal: YYYY-MM-DDTHH:MM:SS (contoh: 2025-12-31T10:00:00)
  const TANGGAL_ACARA_ISO = "2025-07-03T09:00:00";
  const TANGGAL_RESEPSI_TEKS = "Sabtu, 02 Agustus 2025";
  const WAKTU_RESEPSI_TEKS = "PUKUL : 08.00 WIB - Selesai";

  const LOKASI_ACARA_TEKS = `
    Tempat : Gedung Olahraga (GOR)<br />
    Kec. Parongpong, Kabupaten Bandung Barat<br />
    Kabupaten Bandung Barat
  `;
  const LINK_LOKASI_GMAPS = "https://maps.app.goo.gl/SJqvQZipoitrBMCW9";

  const NO_REK_1 = "1234567890";
  const NAMA_REK_1 = "a.n. Muhammad Rizky Pratama";
  const NO_REK_2 = "0987654321";
  const NAMA_REK_2 = "a.n. Aulia Rahmawati";

  // -- Konfigurasi Music --
  const LINK_MUSIK = "audio/laksanasurga.mp3";

  // -- Konfigurasi Gambar --
  const GAMBAR = {
    cover: "assets/cover.jpg",
    mempelai_pria: "assets/mempelai-pria.jpg",
    mempelai_wanita: "assets/mempelai-wanita.jpg",
    prewedding_utama: "assets/prewedding-utama.jpg",
    prewedding_penutup: "assets/prewedding-penutup.jpg",
    galeri: [
      "assets/galeri-1.jpg",
      "assets/galeri-2.jpg",
      "assets/galeri-3.jpg",
      "assets/galeri-4.jpg",
      "assets/galeri-5.jpg",
      "assets/galeri-6.jpg",
    ],
    galeri_landscape: "assets/galeri-landscape.jpg",
    logo_bank: "assets/logo-bca.png",
    bg_gift: "assets/bg-gift.jpeg",
  };
  // =========================================================================
  // KODE JEMBATAN (JANGAN DIUBAH)
  // Fungsi untuk mengisi semua data dari konfigurasi ke HTML
  // =========================================================================
  function populateWeddingData() {
    // bagian music
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      const musicSource = bgMusic.querySelector("source");
      if (musicSource) musicSource.src = LINK_MUSIK;
      bgMusic.load(); // PERINTAH PENTING UNTUK MEMUAT ULANG AUDIO
    }
    // BAGIAN BARU: Mengisi data untuk Hero 1 & 2
    const hero1Names = document.getElementById("hero1-names");
    const hero2Names = document.getElementById("hero2-names");
    const hero2Date = document.getElementById("hero2-date");

    const combinedNames = `${NAMA_PRIA} & ${NAMA_WANITA}`;

    if (hero1Names) hero1Names.innerHTML = combinedNames;
    if (hero2Names) hero2Names.innerHTML = combinedNames;
    if (hero2Date) hero2Date.innerText = TANGGAL_RESEPSI_TEKS;

    // Mempelai (kode yang sudah ada)
    const namaPria = document.getElementById("nama-pria");
    const ortuPria = document.getElementById("ortu-pria");
    const igPria = document.getElementById("ig-pria");
    if (namaPria) namaPria.innerText = NAMA_PRIA;
    if (ortuPria) ortuPria.innerText = ORTU_PRIA;
    if (igPria) igPria.href = IG_PRIA;

    const namaWanita = document.getElementById("nama-wanita");
    const ortuWanita = document.getElementById("ortu-wanita");
    const igWanita = document.getElementById("ig-wanita");
    if (namaWanita) namaWanita.innerText = NAMA_WANITA;
    if (ortuWanita) ortuWanita.innerText = ORTU_WANITA;
    if (igWanita) igWanita.href = IG_WANITA;

    // Resepsi
    const tanggalResepsi = document.getElementById("tanggal-resepsi");
    const waktuResepsi = document.getElementById("waktu-resepsi");
    const lokasiResepsi = document.getElementById("lokasi-resepsi");
    const linkLokasi = document.getElementById("link-lokasi");
    if (tanggalResepsi) tanggalResepsi.innerText = TANGGAL_RESEPSI_TEKS;
    if (waktuResepsi) waktuResepsi.innerHTML = WAKTU_RESEPSI_TEKS;
    if (lokasiResepsi) lokasiResepsi.innerHTML = LOKASI_ACARA_TEKS;
    if (linkLokasi) linkLokasi.href = LINK_LOKASI_GMAPS;

    // Hadiah
    const rek1 = document.getElementById("rek1");
    const namaRek1 = document.getElementById("nama-rek1");
    if (rek1) rek1.innerText = NO_REK_1;
    if (namaRek1) namaRek1.innerText = NAMA_REK_1;

    const rek2 = document.getElementById("rek2");
    const namaRek2 = document.getElementById("nama-rek2");
    if (rek2) rek2.innerText = NO_REK_2;
    if (namaRek2) namaRek2.innerText = NAMA_REK_2;

    // Penutup
    const namaPenutup = document.getElementById("nama-penutup");
    if (namaPenutup)
      namaPenutup.innerText = `${NAMA_PANGGILAN_PRIA} & ${NAMA_PANGGILAN_WANITA}`;
    // 2. MENGISI DATA GAMBAR (Kode Baru)
    // ====================================
    // Set background cover
    document.getElementById(
      "hero1"
    ).style.backgroundImage = `url('${GAMBAR.cover}')`;
    document.getElementById(
      "hero2"
    ).style.backgroundImage = `url('${GAMBAR.cover}')`;

    // Set foto mempelai
    document.getElementById("img-mempelai-pria").src = GAMBAR.mempelai_pria;
    document.getElementById("img-mempelai-wanita").src = GAMBAR.mempelai_wanita;

    // Set foto prewedding
    document.getElementById("img-prewedding-utama").src =
      GAMBAR.prewedding_utama;
    document.getElementById("img-prewedding-penutup").src =
      GAMBAR.prewedding_penutup;

    // Set logo bank dan background gift
    document.getElementById("logo-bank-1").src = GAMBAR.logo_bank;
    document.getElementById("logo-bank-2").src = GAMBAR.logo_bank;
    document.getElementById(
      "gift-card-1"
    ).style.backgroundImage = `url('${GAMBAR.bg_gift}')`;
    document.getElementById(
      "gift-card-2"
    ).style.backgroundImage = `url('${GAMBAR.bg_gift}')`;

    // Mengisi galeri foto secara dinamis
    const galleryContainer = document.getElementById("gallery-grid-container");
    galleryContainer.innerHTML = ""; // Kosongkan dulu
    GAMBAR.galeri.forEach((foto) => {
      const link = document.createElement("a");
      link.href = foto;
      link.className = "gallery-item";
      link.dataset.lightbox = "gallery-grid"; // Untuk lightbox

      const img = document.createElement("img");
      img.src = foto;
      img.alt = "Galeri Foto Pernikahan";

      link.appendChild(img);
      galleryContainer.appendChild(link);
    });

    // Mengisi galeri landscape
    const landscapeContainer = document.getElementById(
      "gallery-landscape-container"
    );
    landscapeContainer.innerHTML = `<a href="${GAMBAR.galeri_landscape}" class="gallery-landscape" data-lightbox="gallery"><img src="${GAMBAR.galeri_landscape}" alt="Galeri Foto Landscape"></a>`;
  }

  // Panggil fungsi di atas agar semua data langsung terisi saat halaman dimuat
  populateWeddingData();

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
  const btnSaveDate = document.getElementById("btnSaveDate");
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
  // TOMBOL SAVE THE DATE (SUDAH DIPERBAIKI)
  // =========================================================================
  btnSaveDate.addEventListener("click", () => {
    const eventDate = new Date(TANGGAL_ACARA_ISO);

    // Format tanggal ke YYYYMMDDTHHMMSSZ
    const startTime = eventDate.toISOString().replace(/-|:|\.\d+/g, "");

    // Tambah durasi acara, misal 2 jam
    const endTimeDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
    const endTime = endTimeDate.toISOString().replace(/-|:|\.\d+/g, "");

    // Mengambil lokasi dari variabel LOKASI_ACARA_TEKS dan membersihkan tag <br />
    const lokasiBersih = LOKASI_ACARA_TEKS.replace(/<br\s*\/?>/gi, ", ");

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(
      NAMA_PRIA
    )}+dan+${encodeURIComponent(
      NAMA_WANITA
    )}&dates=${startTime}/${endTime}&details=Undangan+pernikahan+kami.+Kami+berharap+kehadiran+Anda.&location=${encodeURIComponent(
      lokasiBersih // <-- MENGGUNAKAN VARIABEL YANG SUDAH DIPERBAIKI
    )}`;

    window.open(googleCalendarUrl, "_blank");
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
