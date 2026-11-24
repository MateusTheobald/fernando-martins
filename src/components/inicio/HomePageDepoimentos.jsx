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
  const indiceRef = useRef(1);
  const inicializadoRef = useRef(false);

  const [indice, setIndice] = useState(1);

  // Duplica o primeiro e o último para criar o looping
  const slides = [
    { ...depoimentos[depoimentos.length - 1], clone: "inicio" },
    ...depoimentos,
    { ...depoimentos[0], clone: "fim" },
  ];

  // Posiciona o card no centro
  const posicionarCard = (numero, animar = true) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".depoimento-card");
    const card = cards[numero];

    if (!card) return;

    const viewport = track.parentElement;

    const destino =
      card.offsetLeft -
      (viewport.clientWidth - card.offsetWidth) / 2;

    if (!animar) {
      track.style.transition = "none";
    }

    track.style.transform = `translate3d(${-destino}px, 0, 0)`;

    if (!animar) {
      track.offsetHeight;
      track.style.transition = "transform .75s ease";
    }
  };

  // Inicialização e movimentação
  useEffect(() => {
    posicionarCard(indice, inicializadoRef.current);

    if (!inicializadoRef.current) {
      inicializadoRef.current = true;
    }
  }, [indice]);

  // Navegação manual
  const navegar = (direcao) => {
    const proximo = indiceRef.current + direcao;

    indiceRef.current = proximo;
    setIndice(proximo);
  };

  // Avanço automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      navegar(1);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  // Corrige o posicionamento sem mostrar o retorno
  const finalizarTransicao = (event) => {
    if (event.target !== trackRef.current) return;
    if (event.propertyName !== "transform") return;

    const atual = indiceRef.current;

    let destino = atual;

    if (atual === depoimentos.length + 1) {
      destino = 1;
    } else if (atual === 0) {
      destino = depoimentos.length;
    } else {
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    // Reposicionamento invisível
    track.style.transition = "none";

    indiceRef.current = destino;

    posicionarCard(destino, false);

    setIndice(destino);
  };

  const indiceReal =
    (indice - 1 + depoimentos.length) % depoimentos.length;

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

        {/* SETA ANTERIOR */}

        <button
          className="depoimentos-arrow prev"
          onClick={() => navegar(-1)}
          aria-label="Depoimento anterior"
        >
          &#8249;
        </button>

        {/* CARROSSEL */}

        <div className="depoimentos-viewport">

          <div
            className="depoimentos-track"
            ref={trackRef}
            onTransitionEnd={finalizarTransicao}
          >

            {slides.map((item, index) => {

              const ativo = indice === index;

              return (
                <article
                  className={`depoimento-card ${
                    ativo ? "active" : ""
                  }`}
                  key={item.clone || item.id}
                  aria-hidden={!ativo}
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
              );
            })}

          </div>

        </div>

        {/* SETA PRÓXIMA */}

        <button
          className="depoimentos-arrow next"
          onClick={() => navegar(1)}
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
              indiceReal === index ? "active" : ""
            }`}
            onClick={() => navegar(index - indiceReal)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}
