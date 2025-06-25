const btnOpen = document.getElementById("btnOpen");
const hero1 = document.getElementById("hero1");
const hero2 = document.getElementById("hero2");

btnOpen.addEventListener("click", () => {
  // 1. Hide hero 1
  hero1.classList.add("hide");

  // 2. Show hero 2
  hero2.classList.add("show");

  // 3. Unlock scroll
  document.body.classList.remove("lock-scroll");

  // 4. Scroll ke atas biar fix posisi
  window.scrollTo({ top: 0, behavior: "auto" });
});
// hero section
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // supaya animasi muncul ulang saat masuk lagi
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

// quotes section
document.addEventListener("DOMContentLoaded", function () {
  const kutipanSection = document.querySelector(".section-kutipan");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          kutipanSection.classList.add("show");
        } else {
          kutipanSection.classList.remove("show"); // reset saat keluar layar
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(kutipanSection);
});
// save date
document.getElementById("btnSaveDate").addEventListener("click", function () {
  const url =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    "&text=Pernikahan+Nama+Pria+dan+Wanita" +
    "&dates=20251012T090000/20251012T110000" +
    "&details=Undangan+pernikahan+kami+yang+akan+diselenggarakan+di+lokasi+terlampir.+Kami+berharap+kehadiran+Anda." +
    "&location=Gedung+Pernikahan+Bahagia,+Bandung";
  window.open(url, "_blank");
});
// mempelai laki laki
// Animasi Scroll untuk elemen dengan class 'animate-on-scroll'
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}
// section dan
// Sudah ada sebelumnya:
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));
// save date
// Countdown Timer
const targetDate = new Date("July 1, 2025 08:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days < 0 ? 0 : days;
  document.getElementById("hours").innerText = hours < 0 ? 0 : hours;
  document.getElementById("minutes").innerText = minutes < 0 ? 0 : minutes;
  document.getElementById("seconds").innerText = seconds < 0 ? 0 : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // panggil langsung saat load

// Observer untuk animasi
const observerSaveDate = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

document.querySelectorAll(".animate-top, .animate-bottom").forEach((el) => {
  observerSaveDate.observe(el);
});

// love story
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  // wedding gift

  document.addEventListener("DOMContentLoaded", () => {
    const btnGift = document.getElementById("btnGift");
    const giftIntro = document.getElementById("giftIntro");
    const giftSection = document.getElementById("giftSection");

    btnGift.addEventListener("click", () => {
      // Tampilkan section
      giftIntro.style.display = "none";
      giftSection.style.display = "block";

      // Scroll ke bagian hadiah
      giftSection.scrollIntoView({ behavior: "smooth" });

      // Sembunyikan tombol setelah diklik
      btnGift.style.display = "none";
    });
  });

  // Fungsi untuk salin nomor rekening
  window.copyRek = function (id) {
    const nomor = document.getElementById(id).innerText;
    navigator.clipboard.writeText(nomor).then(() => {
      alert("Nomor rekening berhasil disalin!");
    });
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const btnGift = document.getElementById("btnGift");
  const giftSection = document.getElementById("giftSection");
  const giftCards = document.querySelectorAll(".gift-card");

  let isVisible = false;

  btnGift.addEventListener("click", function () {
    if (!isVisible) {
      // Step 1: Tampilkan elemen
      giftSection.style.display = "block";

      // Step 2: Tunggu 1 frame, lalu animasikan masuk
      requestAnimationFrame(() => {
        giftSection.classList.add("show");
        giftSection.classList.remove("hide");

        giftCards.forEach((card, index) => {
          setTimeout(() => card.classList.add("show"), index * 100);
        });
      });

      isVisible = true;
    } else {
      // Step 1: Animasikan keluar
      giftSection.classList.remove("show");
      giftSection.classList.add("hide");

      giftCards.forEach((card) => card.classList.remove("show"));

      // Step 2: Setelah animasi selesai, baru sembunyikan
      const transitionDuration = 800; // HARUS SAMA DENGAN di CSS
      setTimeout(() => {
        giftSection.style.display = "none";
        // Munculkan commentSection
        commentSection.style.display = "block";
        requestAnimationFrame(() => {
          commentSection.classList.add("show");
          commentSection.classList.remove("hide");
        });
      }, transitionDuration);

      isVisible = false;
    }
  });
});
// comment section

function loadComments() {
  fetch(
    "https://script.google.com/macros/s/AKfycbwDGpwPFVDD7j68W2syYEMiv1uxXCbz-sIc2wLLwYYKCqgsqFppYVloOxpM3-VrQ4kF-w/exec"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA DARI SHEETS:", data); // CEK APA YANG DATANG

      commentsList.innerHTML = "";
      hadir = 0;
      tidakHadir = 0;

      data.reverse().forEach((item) => {
        const status = item.kehadiran?.toLowerCase().replace(/\s/g, "");
        console.log(`Kehadiran: "${status}"`); // LIHAT APA ISINYA

        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerHTML = `
          <strong>${item.nama} ${
          status === "tidakhadir" || status === "tidak-hadir" ? "❌" : "✅"
        }</strong><br>
          ${item.ucapan}
        `;
        commentsList.appendChild(comment);

        if (status === "hadir") {
          hadir++;
        } else if (status === "tidakhadir" || status === "tidak-hadir") {
          tidakHadir++;
        }
      });

      hadirCount.innerHTML = `${hadir}<br><span>Hadir</span>`;
      tidakHadirCount.innerHTML = `${tidakHadir}<br><span>Tidak Hadir</span>`;
    })
    .catch((error) => {
      console.error("Gagal fetch komentar:", error);
    });
}
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const kehadiran = document.getElementById("kehadiran").value;

  if (!name || !message || !kehadiran) {
    alert("Harap isi semua kolom!");
    return;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbwDGpwPFVDD7j68W2syYEMiv1uxXCbz-sIc2wLLwYYKCqgsqFppYVloOxpM3-VrQ4kF-w/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: name,
        ucapan: message,
        kehadiran: kehadiran,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Berhasil kirim komentar:", data);
      // Kosongkan form
      document.getElementById("commentForm").reset();
      // Load ulang komentar
      loadComments();
    })
    .catch((err) => {
      console.error("Gagal kirim komentar:", err);
      alert("Gagal mengirim komentar. Coba lagi.");
    });
});
window.addEventListener("DOMContentLoaded", loadComments);
