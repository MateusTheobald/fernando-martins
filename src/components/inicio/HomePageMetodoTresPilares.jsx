import "./HomePageMetodoTresPilares.css";

const markup = `<section class="dark">
<div class="wrap">
<h2>Um método em três pilares</h2>
<p class="lead" style="margin-top:14px">Cada plano que construo parte da mesma estrutura.</p>
<div class="pillars">
<div class="pillar"><h3>Diagnóstico e comportamento</h3><p>Onde você está hoje e como lida com dinheiro. É o ponto de partida que define a abordagem certa para você.</p></div>
<div class="pillar"><h3>Fluxo e objetivo</h3><p>Poupar com propósito: seu mapa de objetivos e o motivo forte por trás do plano.</p></div>
<div class="pillar"><h3>Proteção e decisão</h3><p>Blindagem do que você já construiu e apoio para qualquer decisão financeira que aparecer no caminho.</p></div>
</div>
</div>
</section>`;

export default function HomePageMetodoTresPilares() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
