import "./HomePageChamadaFinal.css";

const markup = `<section class="dark finalcta">
<div class="wrap">
<h2>Vamos começar essa jornada juntos?</h2>
<p class="lead">Agende seu diagnóstico financeiro e descubra o primeiro passo para o seu plano.</p>
<a class="btn lg wa" data-msg="geral" data-note="WhatsApp · WA-GERAL" href="#" rel="noopener" target="_blank">Falar no WhatsApp</a>
</div>
</section>`;

export default function HomePageChamadaFinal() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
