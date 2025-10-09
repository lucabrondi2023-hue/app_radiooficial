// pwa.js — instala PWA o descarga APK
const apkURL = "./descargar/appradio.apk";
const installBtn = document.getElementById("pwaInstallBtn");
let deferredPrompt = null;

// Detectar si se puede instalar
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("✅ PWA lista para instalar");
});

// Acción del botón
if (installBtn) {
  installBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // 1️⃣ Usa tu bundle si lo tenés
    if (window.pwaInstall) {
      try {
        if (typeof window.pwaInstall.prompt === "function") return await window.pwaInstall.prompt();
        if (typeof window.pwaInstall.show === "function") return await window.pwaInstall.show();
        if (typeof window.pwaInstall.install === "function") return await window.pwaInstall.install();
      } catch (err) {
        console.warn("Error usando pwa-install.bundle.js:", err);
      }
    }

    // 2️⃣ Instalación PWA nativa
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log("Resultado instalación:", choice.outcome);
      deferredPrompt = null;
      return;
    }

    // 3️⃣ Fallback → descarga el APK
    window.location.href = apkURL;
  });
}

// Registrar service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Error registrando SW:", err));
}
