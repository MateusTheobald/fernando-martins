import "./HomePageBanner.css";

const markup = `<section class="hero">
<div class="wrap">
<div class="txt">
<h1>Eu realizo <em>sonhos.</em></h1>
<p class="lead">Sou Fernando Martins, consultor financeiro pessoal. Ajudo famílias a organizar o dinheiro, sair do piloto automático e transformar renda em patrimônio, com plano e acompanhamento de perto.</p>
<div class="cta">
<a class="btn lg wa" data-msg="consult" data-note="WhatsApp · WA-CONSULT" href="#" rel="noopener" target="_blank">Quero meu diagnóstico</a>
<!-- <a class="btn ghost lg" data-note="→ Sobre (/sobre)" href="#/sobre">Conhecer o Fernando</a> -->
</div>
</div>
<div class="photo"><img alt="Fernando Martins sorrindo, de terno, diante de parede de tijolos brancos" src="/assets/4bb2d9e3f384.jpg"/></div>
</div>
</section>`;

export default function HomePageBanner() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
