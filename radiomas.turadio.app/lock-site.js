const fechaLimite = new Date("2026-07-30");
const hoy = new Date();

if (hoy > fechaLimite) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgb(0, 0, 0)";
  overlay.style.color = "#ffffff";
  overlay.style.zIndex = "99999";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.style.textAlign = "center";
  overlay.style.transition = "opacity 1s ease-in-out";
  overlay.style.opacity = "0";

  // Contenido del mensaje
  overlay.innerHTML = `
    <div style="animation: fadeIn 2s ease-out; max-width: 600px;">
      <h1 style="font-size: 3rem; margin-bottom: 1rem;">🔒 Sitio Bloqueado</h1>
      <p style="font-size: 1.5rem; line-height: 1.5;">
        Este sitio ha sido desactivado temporalmente por falta de pago.<br>
        Por favor contacta al administrador para restaurar el acceso o al correo contacto@tuempresa.com.
      </p>
    </div>
  `;

  // Agregar estilos animados
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 100);
}

