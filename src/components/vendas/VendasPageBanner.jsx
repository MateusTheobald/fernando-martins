import "./VendasPageBanner.css";

const markup = `<section class="hero" style="padding:0">
<div class="wrap" style="min-height:0;grid-template-columns:1fr;padding-top:56px;padding-bottom:64px;text-align:center;justify-items:center">
<h1 style="font-size:clamp(34px,5.4vw,68px);max-width:16ch">Organize suas finanças em <em>30 dias</em></h1>
<p class="lead" style="margin:20px auto 32px">Assista ao vídeo e veja como o método Revolução Financeira funciona.</p>
<div class="video" style="width:min(860px,100%)"><div aria-hidden="true" class="play"></div><small>Espaço do vídeo de vendas do Fernando</small></div>
<div style="margin-top:34px"><a class="btn lg eduzz" data-note="Eduzz (nova aba)" href="#" rel="noopener" target="_blank">Quero começar agora</a></div>
</div>
</section>`;

export default function VendasPageBanner() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
