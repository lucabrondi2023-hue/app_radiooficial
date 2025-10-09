// Fondo dinámico
const images = [
  "https://pbs.twimg.com/media/G13GnxOXMAAfFWJ?format=jpg&name=large",
  "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_1280.jpg",
  "https://turismoenushuaia.com/wp-content/uploads/2023/07/Diseno-sin-titulo-2023-08-01T192445.539.jpg",
  "https://img.freepik.com/foto-gratis/vista-lateral-microfono-radio-espacio-copia_23-2148808737.jpg"
];
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
let current = 0;
let showingBg1 = true;
bg1.style.backgroundImage = `url('${images[0]}')`;

setInterval(() => {
  current = (current + 1) % images.length;
  if (showingBg1) {
    bg2.style.backgroundImage = `url('${images[current]}')`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url('${images[current]}')`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }
  showingBg1 = !showingBg1;
}, 7000);

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Bloqueo F12 y Ctrl+U
document.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = function(e) {
  if (e.key === "F12" || (e.ctrlKey && e.key.toLowerCase() === "u")) return false;
};