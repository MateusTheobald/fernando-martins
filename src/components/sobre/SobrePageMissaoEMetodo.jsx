import "./SobrePageMissaoEMetodo.css";

const markup = `<section class="dark">
<div class="wrap">
<h2>Uma consultoria de verdade imparcial</h2>
<p class="lead" style="margin-top:14px">Não vendo produto financeiro nem recebo comissão de banco ou seguradora.</p>
<ul class="ticks" style="max-width:640px">
<li>Recomendações sem influência de comissão ou meta de venda.</li>
<li>Cada decisão pensada a partir do seu objetivo, não do meu ganho.</li>
<li>Você decide com informação isenta, sem pressão.</li>
</ul>
</div>
</section>`;

export default function SobrePageMissaoEMetodo() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
