import "./ConsultoriaPageMetodoTresPilares.css";

const markup = `<section class="dark">
<div class="wrap">
<h2>A estrutura do seu planejamento</h2>
<div class="pillars">
<div class="pillar"><h3>Diagnóstico e comportamento</h3><p>Onde você está hoje e como lida com dinheiro.</p></div>
<div class="pillar"><h3>Fluxo e objetivo</h3><p>Poupar com propósito: mapa de objetivos e motivo forte.</p></div>
<div class="pillar"><h3>Proteção e decisão</h3><p>Blindagem do que você construiu e apoio nas decisões.</p></div>
</div>
</div>
</section>`;

export default function ConsultoriaPageMetodoTresPilares() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
