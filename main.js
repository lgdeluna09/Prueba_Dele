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