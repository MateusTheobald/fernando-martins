import "./CursoPageTopo.css";

const markup = `<section class="hero sub">
<div class="wrap">
<div class="txt">
<h1>Revolução Financeira em 30 dias</h1>
<p class="lead">O método que uso com as minhas famílias de consultoria, em formato de curso, para você começar hoje.</p>
<div class="cta">
<a class="btn lg" data-note="→ Página de vendas (/revolucao-financeira)" href="#/revolucao-financeira">Ver tudo sobre o curso</a>
</div>
</div>
<div class="photo"><img alt="Fernando Martins com microfone" src="/assets/eb57d06a22b2.jpg" style="height:clamp(300px,34vw,440px);object-position:50% 15%"/></div>
</div>
</section>`;

export default function CursoPageTopo() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
