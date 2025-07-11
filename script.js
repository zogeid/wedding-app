
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-08-16T17:00:00");
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
  const seconds = Math.floor((diff / 1000) % 60);


  countdown.innerHTML =
    lang === "es"
      ? `Faltan ${days} días, ${hours} h y ${minutes} min ${seconds} secs`
      : `${days} days, ${hours} h and ${minutes} min ${seconds} secs to go`;
}

const switcher = document.getElementById("lang-switch");

switcher.addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  document.documentElement.lang = lang;
  switcher.textContent = lang === "es" ? "Switch to English" : "Cambiar a Español";

  document.querySelectorAll("[data-es]").forEach(el => {
    // transición: baja opacidad
    el.style.opacity = 0;
    
    // espera un poco para cambiar el texto, luego sube opacidad
    setTimeout(() => {
      el.textContent = el.getAttribute(`data-${lang}`);
      el.style.opacity = 1;
    }, 150);
  });

  updateCountdown();
});

setInterval(updateCountdown, 1000);
updateCountdown();
