import "./VendasPageChamadaFinal.css";

const markup = `<section class="dark finalcta">
<div class="wrap">
<h2>Sua virada financeira começa agora</h2>
<p class="lead">Em 30 dias você sai do piloto automático e passa a ter um plano.</p>
<a class="btn lg eduzz" data-note="Eduzz (nova aba)" href="#" rel="noopener" target="_blank">Quero começar agora</a>
</div>
</section>`;

export default function VendasPageChamadaFinal() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
