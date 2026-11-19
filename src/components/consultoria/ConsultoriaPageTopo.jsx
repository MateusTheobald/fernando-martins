import "./ConsultoriaPageTopo.css";

const markup = `<section class="hero sub">
<div class="wrap">
<div class="txt">
<h1>Consultoria financeira pessoal</h1>
<p class="lead">Um plano feito para a sua família e um ano de acompanhamento direto comigo, para ele sair do papel.</p>
<div class="cta"><a class="btn lg wa" data-msg="consult" data-note="WhatsApp · WA-CONSULT" href="#" rel="noopener" target="_blank">Agendar meu diagnóstico</a></div>
</div>
<div class="photo"><img alt="Fernando Martins em reunião e palestra com slide ao fundo" src="/assets/ced13667e7e0.jpg" style="height:clamp(300px,34vw,440px);object-position:50% 20%"/></div>
</div>
</section>`;

export default function ConsultoriaPageTopo() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
