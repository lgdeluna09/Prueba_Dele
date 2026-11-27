const headerPlaceholder = document.getElementById('header-placeholder');

if (headerPlaceholder) {
  headerPlaceholder.innerHTML = `
    <header class="header">
      <img alt="logo provisional" width="50" src="imagenes/Logoprovisionalrsef.jpg">
      <nav class="nav-links">
        <a href="inicio.html">Inicio</a>
        <a href="actividades.html">Actividades</a>
        <a href="miembros.html">Miembros</a>
        <a href="contactanos.html">Contáctanos</a>
      </nav>
      <div class="lang-switch">
        <button type="button" class="lang-btn notranslate" onclick="cambiarIdioma('es')">ES</button>
        <span class="lang-sep">|</span>
        <button type="button" class="lang-btn notranslate" onclick="cambiarIdioma('ca')">VA</button>
      </div>
      <div id="google_translate_element" style="display:none;"></div>
    </header>
  `;
}

const footerPlaceholder = document.getElementById('footer-placeholder');

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = `
    <footer class="footer">
      <div>
        <p>©️ Real Sociedad Española de Física, 2026. Delegación de la UV. Aviso Legal | Política de Privacidad | Política de Cookies</p>
      </div>
      <div>
        <h3>Redes sociales</h3>
        <div class="social-links">
          <a href="https://www.instagram.com/estudiantesrsef_uv/" target="_blank">
            <img src="imagenes/LogoIG.webp" alt="Instagram">
          </a>
          <a href="https://x.com/EstRSEF_UV" target="_blank">
            <img src="imagenes/LogoX.webp" alt="Twitter">
          </a>
        </div>
      </div>
    </footer>
  `;
}

// ==========================================================
// TRADUCCIÓN AUTOMÁTICA CON GOOGLE TRANSLATE
// ==========================================================
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,ca',
    autoDisplay: false
  }, 'google_translate_element');
}

// Cargar el script oficial de Google
const gtScript = document.createElement('script');
gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.body.appendChild(gtScript);

// Función que activan tus botones ES / VA
function cambiarIdioma(idioma) {
  const selector = document.querySelector('.goog-te-combo');
  
  if (idioma === 'es') {
    // Restaurar idioma original (castellano)
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (selector) {
      selector.value = 'es';
      selector.dispatchEvent(new Event('change'));
    }
    location.reload();
  } else if (selector) {
    selector.value = idioma;
    selector.dispatchEvent(new Event('change'));
  }
}