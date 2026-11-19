import { useState } from "react";

// CABEÇALHO
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav" id="siteNav">
      <div className="wrap">

        <a
          aria-label="FM Finanças, início"
          className="brand"
          href="#/"
          onClick={closeMenu}
        >
          <img
            alt="Fernando Martins, Consultor Financeiro Pessoal"
            src="/assets/53ebc8520df1.png"
          />
        </a>

        <nav
          aria-label="Principal"
          className={`menu ${menuOpen ? "open" : ""}`}
        >
          <a href="#/" onClick={closeMenu}>Início</a>
          <a href="#/sobre" onClick={closeMenu}>Sobre</a>
          <a href="#/consultoria" onClick={closeMenu}>Consultoria</a>
          <a href="#/palestras" onClick={closeMenu}>Palestras</a>
          <a href="#/curso" onClick={closeMenu}>Curso</a>
        </nav>

        <div className="header-social" aria-label="Redes sociais">

          <a
            className="social-icon"
            href="https://wa.me/5519981833892"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .25 5.32.25 11.87c0 2.09.55 4.13 1.59 5.93L.15 24l6.36-1.67a11.9 11.9 0 0 0 5.6 1.42h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.24-6.15-3.47-8.4ZM12.12 21.7a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Z"/>
            </svg>
          </a>

          <a
            className="social-icon"
            href="https://instagram.com/ofernandofinancas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
            </svg>
          </a>

          <a
            className="social-icon"
            href="SEU_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4.1 4.1 0 0 1 16.74 8.7c3.95 0 4.68 2.6 4.68 5.98V21h-3.8v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9.4V9Z"/>
            </svg>
          </a>

          <a
            className="social-icon"
            href="SEU_YOUTUBE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
            </svg>
          </a>

        </div>

        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span></span>
        </button>

      </div>
    </header>
  );
}
