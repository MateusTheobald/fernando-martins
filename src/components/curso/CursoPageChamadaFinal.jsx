import "./CursoPageChamadaFinal.css";

const markup = `<section class="dark finalcta">
<div class="wrap">
<h2>Prefere falar comigo antes?</h2>
<p class="lead">Tire sua dúvida direto no WhatsApp.</p>
<a class="btn lg wa ghost" data-msg="curso" data-note="WhatsApp · WA-CURSO" href="#" rel="noopener" target="_blank">Tirar dúvida sobre o curso</a>
</div>
</section>`;

export default function CursoPageChamadaFinal() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
