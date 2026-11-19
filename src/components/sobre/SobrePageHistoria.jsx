import "./SobrePageHistoria.css";

const markup = `<section>
<div class="wrap split rev">
<div class="stack">
<h2>Quem sou?</h2>
<p class="lead">Sou consultor financeiro pessoal há mais de 6 anos e já ajudei mais de 300 famílias a retomarem o controle da própria vida financeira.</p>
<p>Acredito que a vida não é apenas pagar boletos. Todos nós temos sonhos, mas, sem planejamento, eles acabam ficando sempre “para depois”.</p>
<p>Por isso criei o método Revolução Financeira em 30 dias, que hoje sustenta tanto a minha consultoria quanto o curso.</p>
<div class="bnote">Aqui entra a história pessoal (por que virou consultor, o que mudou na sua vida). Pedir 5 a 8 linhas ao Fernando.</div>
</div>
<div class="pic"><img alt="Fernando Martins palestrando com microfone diante do slide Planejamento Financeiro" src="/assets/eb57d06a22b2.jpg" style="aspect-ratio:3/4"/></div>
</div>
</section>`;

export default function SobrePageHistoria() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
