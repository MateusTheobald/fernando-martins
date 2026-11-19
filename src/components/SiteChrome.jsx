import { useEffect } from "react";

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/5519981833892",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.16 1.6 5.97L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.5-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.48.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
    `,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ofernandofinancas",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
      </svg>
    `,
  },
  {
    name: "LinkedIn",
    url: "SEU_LINKEDIN",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.12 18.8H5.16V9.28h2.96v9.52ZM6.64 7.98a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM18.8 18.8h-2.95v-4.63c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.71H9.57V9.28h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.56 1.97 3.56 4.53v5.21Z"/>
      </svg>
    `,
  },
  {
    name: "YouTube",
    url: "SEU_YOUTUBE",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="currentColor" d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.13C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.52A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.13c1.87.52 9.38.52 9.38.52s7.51 0 9.38-.52a3.02 3.02 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z"/>
      </svg>
    `,
  },
];

const renderSocialLinks = (footer = false) =>
  socialLinks.map((item) => `
    <a
      class="social-icon ${footer ? "footer-social-icon" : ""}"
      href="${item.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${item.name}"
      title="${item.name}"
    >
      ${item.icon}
      ${footer ? `<span>${item.name}</span>` : ""}
    </a>
  `).join("");

const headerHtml = `
  <header class="nav" id="siteNav">
    <div class="wrap">

      <a class="brand" href="/" aria-label="FM Finanças - Página inicial">
        <img src="/assets/53ebc8520df1.png" alt="FM Finanças" />
      </a>

      <nav class="menu" aria-label="Menu principal">
        <a href="/">Início</a>
        <a href="/sobre">Sobre</a>
        <a href="/consultoria">Consultoria</a>
        <a href="/palestras">Palestras</a>
        <a href="/curso">Curso</a>
        <a href="/revolucao-financeira">Revolução Financeira</a>
      </nav>

      <div class="header-social">
        ${renderSocialLinks()}
      </div>

      <button
        class="burger"
        type="button"
        aria-label="Abrir menu"
        aria-expanded="false"
      >
        <span></span>
      </button>

    </div>
  </header>
`;

const footerHtml = `
  <footer class="fm-footer">

    <div class="fm-footer-main">

      <div class="fm-footer-brand">
        <a href="/" aria-label="FM Finanças - Página inicial">
          <img
            src="/assets/cc15596b16ce.png"
            alt="FM Finanças"
          />
        </a>
      </div>

      <div class="fm-footer-column fm-footer-pages">
        <h4>Páginas</h4>
        <a href="/">Início</a>
        <a href="/sobre">Sobre</a>
        <a href="/consultoria">Consultoria</a>
        <a href="/palestras">Palestras</a>
        <a href="/curso">Curso</a>
        <a href="/revolucao-financeira">Revolução Financeira</a>
      </div>

      <div class="fm-footer-column fm-footer-contact">
        <h4>Redes sociais e contato</h4>

        <div class="footer-social-list">
          ${renderSocialLinks(true)}
        </div>
      </div>

    </div>

    <div class="fm-footer-bottom">
      © 2026 FM Finanças. Todos os direitos reservados.
    </div>

  </footer>
`;

export function SiteHeader() {
  useEffect(() => {
    const header = document.getElementById("siteNav");

    if (!header) return;

    const burger = header.querySelector(".burger");
    const menu = header.querySelector("nav.menu");

    if (!burger || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Abrir menu");
    };

    const toggleMenu = () => {
      const isOpen = menu.classList.toggle("open");

      burger.classList.toggle("active", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    };

    burger.addEventListener("click", toggleMenu);

    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const handleResize = () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      burger.removeEventListener("click", toggleMenu);

      links.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}

export function SiteFooter({ sales = false }) {
  if (sales) return null;

  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
