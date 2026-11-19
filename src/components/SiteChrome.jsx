
const headerHtml = `
<header class="nav" id="siteNav">
  <div class="wrap">
    <a aria-label="FM Finanças, início" class="brand" href="#/">
      <img alt="Fernando Martins, Consultor Financeiro Pessoal" src="/assets/53ebc8520df1.png"/>
    </a>

    <button aria-label="Abrir menu" class="burger" onclick="document.querySelector('nav.menu').classList.toggle('open')">
      <span></span>
    </button>

    <nav aria-label="Principal" class="menu">
      <a href="#/">Início</a>
      <a href="#/sobre">Sobre</a>
      <a href="#/consultoria">Consultoria</a>
      <a href="#/palestras">Palestras</a>
      <a href="#/curso">Curso</a>
    </nav>

    <div class="header-social" aria-label="Redes sociais">
      <a class="social-icon" href="https://wa.me/5519981833892" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .25 5.32.25 11.87c0 2.09.55 4.13 1.59 5.93L.15 24l6.36-1.67a11.9 11.9 0 0 0 5.6 1.42h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.24-6.15-3.47-8.4ZM12.12 21.7a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
      </a>

      <a class="social-icon" href="https://instagram.com/ofernandofinancas" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
        </svg>
      </a>

      <a class="social-icon" href="SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4.1 4.1 0 0 1 16.74 8.7c3.95 0 4.68 2.6 4.68 5.98V21h-3.8v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9.4V9Z"/>
        </svg>
      </a>

      <a class="social-icon" href="SEU_YOUTUBE" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
        </svg>
      </a>
    </div>
  </div>
</header>
`;

const footerHtml = `
<footer id="siteFooter" class="fm-footer">
  <div class="fm-footer-main">

    <div class="fm-footer-brand">
      <a href="#/" aria-label="FM Finanças - Início">
        <img src="/assets/cc15596b16ce.png" alt="Fernando Martins"/>
      </a>
    </div>

    <div class="fm-footer-column fm-footer-pages">
      <h4>Páginas</h4>
      <a href="#/sobre">Sobre</a>
      <a href="#/consultoria">Consultoria</a>
      <a href="#/palestras">Palestras</a>
      <a href="#/curso">Curso</a>
    </div>

    <div class="fm-footer-column fm-footer-contact">
      <h4>Contato</h4>

      <a href="https://wa.me/5519981833892" target="_blank" rel="noopener noreferrer">
        <span class="fm-footer-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .25 5.32.25 11.87c0 2.09.55 4.13 1.59 5.93L.15 24l6.36-1.67a11.9 11.9 0 0 0 5.6 1.42h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.24-6.15-3.47-8.4ZM12.12 21.7a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Z"/>
            <path d="M17.55 14.29c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
          </svg>
        </span>
        WhatsApp (19) 98183-3892
      </a>

      <a href="mailto:fernando@fmfinancas.com.br">
        <span class="fm-footer-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13ZM4 6v.3l8 5.4 8-5.4V6H4Zm16 2.7-7.44 5.02a1 1 0 0 1-1.12 0L4 8.7v9.8h16V8.7Z"/>
          </svg>
        </span>
        fernando@fmfinancas.com.br
      </a>

      <a href="https://instagram.com/ofernandofinancas" target="_blank" rel="noopener noreferrer">
        <span class="fm-footer-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
          </svg>
        </span>
        @ofernandofinancas
      </a>

      <a href="SEU_LINKEDIN" target="_blank" rel="noopener noreferrer">
        <span class="fm-footer-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4.1 4.1 0 0 1 16.74 8.7c3.95 0 4.68 2.6 4.68 5.98V21h-3.8v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9.4V9Z"/>
          </svg>
        </span>
        LinkedIn
      </a>

      <a href="SEU_YOUTUBE" target="_blank" rel="noopener noreferrer">
        <span class="fm-footer-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
          </svg>
        </span>
        YouTube
      </a>
    </div>
  </div>

  <div class="fm-footer-bottom">
    © 2026 Todos os direitos reservados
  </div>
</footer>
`;

export function SiteHeader() {
  return <div dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}

export function SiteFooter() {
  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
