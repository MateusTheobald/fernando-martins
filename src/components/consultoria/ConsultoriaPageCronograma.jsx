import "./ConsultoriaPageCronograma.css";

const markup = `<section>
<div class="wrap">
<h2>Exemplo de cronograma</h2>
<p class="lead" style="margin-top:14px">O acompanhamento é anual e acontece a cada 45 dias, sempre com um foco definido.</p>
<ol class="agenda">
<li><b>1</b><span>Início da parceria: reunião de análise financeira</span></li>
<li><b>7</b><span>Fluxo de caixa e investimentos + aposentadoria</span></li>
<li><b>2</b><span>Estratégias macro + fluxo de caixa: planejamento financeiro anual prático</span></li>
<li><b>8</b><span>Fluxo e investimentos + investimentos</span></li>
<li><b>3</b><span>Fluxo de caixa + investimentos + proteção</span></li>
<li><b>9</b><span>Fluxo e investimentos + planejamento de viagens</span></li>
<li><b>4</b><span>Fluxo e investimentos + objetivos</span></li>
<li><b>10</b><span>Planejamento + revisão da carteira de investimentos</span></li>
<li><b>5</b><span>Fluxo e investimentos + cartões de crédito e milhas</span></li>
<li><b>11</b><span>Balanço anual + apresentação de um novo cronograma</span></li>
<li><b>6</b><span>Fluxo e investimentos + aquisição de bens</span></li>
</ol>
</div>
</section>`;

export default function ConsultoriaPageCronograma() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
