const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-08-15T17:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "¡Ya es el gran día!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `Faltan ${days} días, ${hours} h y ${minutes} min`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
