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

  animatedElements.forEach((el) => observer.observe(el));
});
// lightbox untuk galeri
src =
  "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js";
