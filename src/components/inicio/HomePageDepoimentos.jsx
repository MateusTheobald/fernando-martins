
import { useEffect, useRef, useState } from "react";
import "./HomePageDepoimentos.css";

const depoimentos = [
  {
    id: 1,
    titulo: "Momento anônimo 01",
    texto: "Espaço demonstrativo reservado para compartilhar uma experiência de organização financeira e planejamento familiar.",
    assinatura: "Participante anônimo",
    inicial: "A",
  },
  {
    id: 2,
    titulo: "Momento anônimo 02",
    texto: "Espaço demonstrativo reservado para compartilhar uma experiência de conquista de objetivos e transformação financeira.",
    assinatura: "Participante anônimo",
    inicial: "M",
  },
  {
    id: 3,
    titulo: "Momento anônimo 03",
    texto: "Espaço demonstrativo reservado para compartilhar uma experiência de acompanhamento e construção de patrimônio.",
    assinatura: "Participante anônimo",
    inicial: "F",
  },
];

export default function HomePageDepoimentos() {
  const trackRef = useRef(null);
  const [indice, setIndice] = useState(0);

  const navegar = (novoIndice) => {
    const proximo =
      (novoIndice + depoimentos.length) % depoimentos.length;

    setIndice(proximo);
  };

  // Avanço automático a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((atual) => (atual + 1) % depoimentos.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  // Centraliza o card selecionado
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".depoimento-card");
    const card = cards[indice];

    if (!card) return;

    const destino =
      card.offsetLeft -
      (track.clientWidth - card.offsetWidth) / 2;

    if (indice === 0 && track.scrollLeft > destino) {
      track.scrollTo({
        left: destino,
        behavior: "auto",
      });
    } else {
      track.scrollTo({
        left: destino,
        behavior: "smooth",
      });
    }
  }, [indice]);

  return (
    <section className="depoimentos-section">

      <div className="wrap">

        <div className="depoimentos-heading">
          <h2>Quem já passou por aqui</h2>

          <p>
            Histórias, experiências e momentos que fazem a diferença.
          </p>
        </div>

      </div>

      <div className="depoimentos-carousel">

        <button
          className="depoimentos-arrow prev"
          onClick={() => navegar(indice - 1)}
          aria-label="Depoimento anterior"
        >
          &#8249;
        </button>

        <div
          className="depoimentos-track"
          ref={trackRef}
        >

          {depoimentos.map((item, index) => (
            <article
              className={`depoimento-card ${
                indice === index ? "active" : ""
              }`}
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
          onClick={() => navegar(indice + 1)}
          aria-label="Próximo depoimento"
        >
          &#8250;
        </button>

      </div>

      {/* INDICADORES */}

      <div className="depoimentos-dots">
        {depoimentos.map((item, index) => (
          <button
            key={item.id}
            className={`depoimento-dot ${
              indice === index ? "active" : ""
            }`}
            onClick={() => navegar(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
