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

  animatedElements.forEach((el) => observer.observe(el));
});
const btnGift = document.getElementById("btnGift");
const giftIntro = document.getElementById("giftIntro");
const giftSection = document.getElementById("giftSection");

btnGift.addEventListener("click", () => {
  const isHidden = giftSection.style.display === "none";

  giftIntro.style.display = isHidden ? "block" : "none";
  giftSection.style.display = isHidden ? "block" : "none";

  if (isHidden) {
    giftIntro.scrollIntoView({ behavior: "smooth" });
  }
});
// Scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  const btnGift = document.getElementById("btnGift");
  const giftSection = document.getElementById("giftSection");

  let isVisible = false; // status awal disembunyikan

  btnGift.addEventListener("click", () => {
    isVisible = !isVisible;

    if (isVisible) {
      giftSection.style.display = "block";
      giftSection.scrollIntoView({ behavior: "smooth" });
      btnGift.innerText = "Wedding Gift";
    } else {
      giftSection.style.display = "none";
      btnGift.innerText = "Wedding Gift";
    }
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
      }, transitionDuration);

      isVisible = false;
    }
  });
});
