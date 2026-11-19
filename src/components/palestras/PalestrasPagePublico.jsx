import "./PalestrasPagePublico.css";

const markup = `<section>
<div class="wrap split rev">
<div class="stack">
<h2>Para quem é essa palestra</h2>
<p class="lead">Muitos profissionais enfrentam problemas financeiros em casa e acabam rendendo menos no trabalho. Com a palestra, eles ganham insights e ferramentas práticas para mudar essa realidade.</p>
<div class="data">
<div><b>60%+</b><span>das famílias brasileiras estão endividadas</span></div>
<div><b>15%</b><span>a menos: quanto podem produzir funcionários com problemas financeiros</span></div>
<div><b>60%</b><span>dos divórcios acontecem por conflitos financeiros</span></div>
</div>
<div class="bnote">Esses três dados vieram do material da palestra, sem fonte. Antes de usar em anúncio, citar a fonte de cada um.</div>
</div>
<div class="pic"><img alt="Fernando Martins sorrindo diante de uma plateia de colaboradores de uniforme azul" src="/assets/ca3476fdd81b.jpg" style="aspect-ratio:4/3;object-position:50% 20%"/></div>
</div>
</section>`;

export default function PalestrasPagePublico() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
