
import { useEffect, useRef } from "react";
import "./HomePageDepoimentos.css";

const depoimentos = [
  {
    id: 1,
    titulo: "Momento anônimo 01",
    texto: "Espaço reservado para um relato autorizado. Conteúdo demonstrativo.",
    assinatura: "Participante anônimo",
    inicial: "A",
  },
  {
    id: 2,
    titulo: "Momento anônimo 02",
    texto: "Espaço reservado para um relato autorizado. Conteúdo demonstrativo.",
    assinatura: "Participante anônimo",
    inicial: "M",
  },
  {
    id: 3,
    titulo: "Momento anônimo 03",
    texto: "Espaço reservado para um relato autorizado. Conteúdo demonstrativo.",
    assinatura: "Participante anônimo",
    inicial: "F",
  },
];

export default function HomePageDepoimentos() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".depoimento-card");
    const card = cards[1];

    if (card) {
      track.scrollLeft =
        card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    }
  }, []);

  const navegar = (direcao) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".depoimento-card");
    const distancia = card ? card.offsetWidth + 40 : 540;

    track.scrollBy({
      left: direcao * distancia,
      behavior: "smooth",
    });
  };

  return (
    <section className="depoimentos-section">
      <div className="wrap">

        <div className="depoimentos-heading">
          <h2>Quem já passou por aqui</h2>
          <p>
            Histórias, experiências e momentos que fazem a diferença.
          </p>
        </div>

        <div className="depoimentos-carousel">

          <button
            className="depoimentos-arrow prev"
            onClick={() => navegar(-1)}
            aria-label="Depoimentos anteriores"
          >
            &#8249;
          </button>

          <div
            className="depoimentos-track"
            ref={trackRef}
          >
            {depoimentos.map((item) => (
              <article
                className="depoimento-card"
                key={item.id}
              >
                <div className="depoimento-content">

                  <span className="depoimento-quote">
                    “
                  </span>

                  <span className="depoimento-label">
                    {item.titulo}
                  </span>

                  <p className="depoimento-text">
                    {item.texto}
                  </p>

                  <div className="depoimento-signature">
                    {item.assinatura}
                  </div>

                </div>

                <div className="depoimento-footer">
                  <div className="depoimento-avatar">
                    {item.inicial}
                  </div>
                </div>

              </article>
            ))}
          </div>

          <button
            className="depoimentos-arrow next"
            onClick={() => navegar(1)}
            aria-label="Próximos depoimentos"
          >
            &#8250;
          </button>

        </div>

      </div>
    </section>
  );
}
