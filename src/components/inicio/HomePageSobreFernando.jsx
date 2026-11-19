import "./HomePageSobreFernando.css";

const markup = `<section>
<div class="wrap split">
<div class="pic"><img alt="Fernando Martins de terno na pista do estádio do Pacaembu" src="/assets/6e4bb2b22638.jpg" style="aspect-ratio:4/5;object-position:50% 30%"/></div>
<div class="stack">
<h2>Quem é o Fernando</h2>
<p class="lead">Consultor financeiro pessoal, criador do método Revolução Financeira em 30 dias. Acredito que a vida não é só pagar boletos: todos temos sonhos, e sem planejamento eles ficam sempre para depois.</p>
<div class="facts">
<div class="fact"><b>+6</b><span>anos de experiência</span></div>
<div class="fact"><b>+300</b><span>famílias atendidas</span></div>
</div>
<div class="bnote">Confirmar: a proposta diz “+6 anos” e o PDF da palestra diz “mais de 5 anos”. Definir um só número para o site.</div>
<p style="margin-top:22px"><a class="link" data-note="→ Sobre (/sobre)" href="#/sobre">Ler minha história</a></p>
</div>
</div>
</section>`;

export default function HomePageSobreFernando() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
