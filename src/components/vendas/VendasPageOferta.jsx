import "./VendasPageOferta.css";

const markup = `<section class="dark">
<div class="wrap">
<div class="offer">
<div>
<h2>Comece hoje</h2>
<ul class="ticks">
<li>24 aulas (12 teóricas e 12 práticas)</li>
<li>11 ferramentas</li>
<li>Garantia de 7 dias</li>
</ul>
</div>
<div class="price">
<small>Investimento</small>
<b>R$ 250</b>
<p style="margin:6px 0 22px;font-size:15px">Valor e condições de pagamento a confirmar.</p>
<a class="btn lg eduzz" data-note="Eduzz (nova aba), cupom REVOLUCAO30" href="#" rel="noopener" target="_blank">Quero começar agora</a>
</div>
</div>
</div>
</section>`;

export default function VendasPageOferta() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
