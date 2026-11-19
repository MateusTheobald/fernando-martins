import "./VendasPageMetodoCompleto.css";

const markup = `<section class="dark">
<div class="wrap">
<h2 style="max-width:24ch">O último curso de finanças que você vai precisar comprar</h2>
<p class="lead" style="margin-top:14px">Um passo a passo com a metodologia que uso na consultoria.</p>
<div class="pillars six">
<div class="pillar"><h3>Mapa do Propósito</h3><p>Descubra o motivo forte por trás de cada real que você poupa.</p></div>
<div class="pillar"><h3>Sistema de 3 Contas (50/30/20)</h3><p>Uma divisão simples do salário entre o essencial, o lazer e o futuro.</p></div>
<div class="pillar"><h3>Caçando vazamentos financeiros</h3><p>Encontre para onde o dinheiro escapa sem você perceber.</p></div>
<div class="pillar"><h3>Micro-cortes indolores</h3><p>Reduza gastos sem sentir que está abrindo mão da vida.</p></div>
<div class="pillar"><h3>Blindagem contra crises</h3><p>Monte a proteção que segura a sua família quando o imprevisto chega.</p></div>
<div class="pillar"><h3>Onde investir</h3><p>Curto, médio e longo prazo, com clareza para começar.</p></div>
</div>
</div>
</section>`;

export default function VendasPageMetodoCompleto() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
