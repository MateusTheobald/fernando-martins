import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/SobrePage";
import ConsultoriaPage from "./pages/ConsultoriaPage";
import PalestrasPage from "./pages/PalestrasPage";
import CursoPage from "./pages/CursoPage";
import VendasPage from "./pages/VendasPage";

const routes = {
  "/": HomePage,
  "/sobre": SobrePage,
  "/consultoria": ConsultoriaPage,
  "/palestras": PalestrasPage,
  "/curso": CursoPage,
  "/revolucao-financeira": VendasPage,
};

const messages = {
  geral: "Olá, Fernando! Vim pelo site da FM Finanças e quero conversar.",
  consult: "Olá, Fernando! Vim pelo site da FM Finanças e quero saber mais sobre a consultoria financeira.",
  palestra: "Olá, Fernando! Vim pelo site da FM Finanças e quero uma proposta de palestra para minha empresa.",
  curso: "Olá, Fernando! Tenho uma dúvida sobre o curso Revolução Financeira em 30 Dias.",
};

const WHATSAPP = "5519981833892";
const CHECKOUT = "https://sun.eduzz.com/40Q3XAVK0B?cupom=REVOLUCAO30";

function setDestinations() {
  document.querySelectorAll("a.wa").forEach((link) => {
    const type = link.dataset.msg || "geral";

    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      messages[type] || messages.geral
    )}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.onclick = () =>
      window.dataLayer?.push({
        event: "whatsapp_click",
        whatsapp_type: type,
      });
  });

  document.querySelectorAll("a.eduzz").forEach((link) => {
    const url = new URL(CHECKOUT);

    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm_")) {
        url.searchParams.set(key, value);
      }
    });

    link.href = url.toString();
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.onclick = () =>
      window.dataLayer?.push({
        event: "eduzz_checkout_click",
      });
  });
}

export default function App() {
  const resolveRoute = () => {
    const hashRoute = (location.hash || "").slice(1);

    if (hashRoute) return hashRoute || "/";

    return routes[location.pathname] ? location.pathname : "/";
  };

  const [route, setRoute] = useState(resolveRoute);

  const Page = routes[route] || HomePage;
  const sales = route === "/revolucao-financeira";

  useEffect(() => {
    const update = () =>
      setRoute((location.hash || "#/").slice(1) || "/");

    addEventListener("hashchange", update);

    return () => removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nofab", sales);

    const nav = document.getElementById("siteNav");

    if (nav) {
      nav.style.display = sales ? "none" : "";
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(setDestinations, 0);

    return () => clearTimeout(timer);
  }, [route, sales]);

  return (
    <>
      {!sales && <SiteHeader />}

      <main>
        <Page />
      </main>

      <SiteFooter sales={sales} />

      {!sales && (
        <a
          className="fab wa"
          data-msg="geral"
          href="#"
          aria-label="Falar no WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" />
          </svg>
        </a>
      )}
    </>
  );
}
