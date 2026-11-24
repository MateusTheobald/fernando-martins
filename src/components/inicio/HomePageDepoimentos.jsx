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

function GrupoDepoimentos({ itens, duplicado = false }) {
  return (
    <div
      className="depoimentos-group"
      aria-hidden={duplicado ? "true" : undefined}
    >
      {itens.map((item) => (
        <article className="depoimento-card" key={item.id}>

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
  );
}

export default function HomePageDepoimentos() {
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

        <div className="depoimentos-track">

          {/* PRIMEIRO GRUPO */}

          <GrupoDepoimentos itens={depoimentos} />

          {/* SEGUNDO GRUPO — DUPLICADO PARA LOOPING */}

          <GrupoDepoimentos
            itens={depoimentos}
            duplicado
          />

        </div>

      </div>

    </section>
  );
}
