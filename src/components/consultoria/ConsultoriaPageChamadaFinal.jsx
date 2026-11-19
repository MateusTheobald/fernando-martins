import "./ConsultoriaPageChamadaFinal.css";

const markup = `<section class="dark finalcta">
<div class="wrap">
<h2>Agende seu diagnóstico financeiro</h2>
<p class="lead">O primeiro passo é uma conversa. Me chame e eu explico como funciona para o seu caso.</p>
<a class="btn lg wa" data-msg="consult" data-note="WhatsApp · WA-CONSULT" href="#" rel="noopener" target="_blank">Falar no WhatsApp</a>
</div>
</section>`;

export default function ConsultoriaPageChamadaFinal() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
