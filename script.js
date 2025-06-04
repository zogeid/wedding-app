
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2026-08-15T17:00:00");
let lang = "es"; // idioma por defecto

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = lang === "es" ? "¡Ya es el gran día!" : "Today is the big day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML =
    lang === "es"
      ? `Faltan ${days} días, ${hours} h y ${minutes} min`
      : `${days} days, ${hours} h and ${minutes} min to go`;
}

const switcher = document.getElementById("lang-switch");

switcher.addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  document.documentElement.lang = lang;
  switcher.textContent = lang === "es" ? "English" : "Español";

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  updateCountdown();
});

setInterval(updateCountdown, 1000);
updateCountdown();
