
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const TOTAL = depoimentos.length;
const INDICE_INICIAL = TOTAL;

export default function HomePageDepoimentos() {
  const trackRef = useRef(null);
  const indiceRef = useRef(INDICE_INICIAL);
  const [indice, setIndice] = useState(INDICE_INICIAL);

  const inicializadoRef = useRef(false);

  // Três cópias completas: anterior, principal e próxima
  const slides = [
    ...depoimentos.map((item, index) => ({
      ...item,
      chave: `anterior-${index}`,
    })),

    ...depoimentos.map((item, index) => ({
      ...item,
      chave: `principal-${index}`,
    })),

    ...depoimentos.map((item, index) => ({
      ...item,
      chave: `proxima-${index}`,
    })),
  ];

  // Calcula a posição central do card
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

    track.style.transition = animar
      ? "transform .75s ease"
      : "none";

    track.style.transform = `translate3d(${-destino}px, 0, 0)`;

    if (!animar) {
      track.offsetHeight;
    }
  };

  // Posicionamento inicial e movimentação
  useLayoutEffect(() => {
    posicionarCard(indice, inicializadoRef.current);

    if (!inicializadoRef.current) {
      inicializadoRef.current = true;
    }
  }, [indice]);

  // Recalcula a posição quando a tela muda de tamanho
  useEffect(() => {
    const ajustarPosicao = () => {
      posicionarCard(indiceRef.current, false);
    };

    window.addEventListener("resize", ajustarPosicao);

    return () => {
      window.removeEventListener("resize", ajustarPosicao);
    };
  }, []);

  // Atualiza o índice
  const atualizarIndice = (novoIndice) => {
    indiceRef.current = novoIndice;
    setIndice(novoIndice);
  };

  // Navegação manual e automática
  const navegar = (direcao) => {
    atualizarIndice(indiceRef.current + direcao);
  };

  // Avanço automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      navegar(1);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  // Reposiciona entre as cópias sem mostrar o retorno
  const finalizarTransicao = (event) => {
    if (event.target !== trackRef.current) return;
    if (event.propertyName !== "transform") return;

    const atual = indiceRef.current;

    let destino = atual;

    // Chegou à terceira cópia: retorna à cópia central
    if (atual >= TOTAL * 2) {
      destino = atual - TOTAL;
    }

    // Chegou à primeira cópia: retorna à cópia central
    else if (atual < TOTAL) {
      destino = atual + TOTAL;
    }

    if (destino === atual) return;

    const track = trackRef.current;
    if (!track) return;

    // O card visualmente é idêntico; apenas troca a cópia
    track.style.transition = "none";

    indiceRef.current = destino;

    posicionarCard(destino, false);

    setIndice(destino);

    // Restaura a animação para os próximos movimentos
    track.offsetHeight;
    track.style.transition = "transform .75s ease";
  };

  // Identifica qual depoimento original está ativo
  const indiceReal = ((indice % TOTAL) + TOTAL) % TOTAL;

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
                  key={item.chave}
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
            onClick={() => {
              atualizarIndice(TOTAL + index);
            }}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}
