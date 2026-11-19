import "./PalestrasPageChamadaFinal.css";

const markup = `<section class="dark finalcta">
<div class="wrap">
<h2>Vamos agendar?</h2>
<p class="lead">Investimento inteligente para empresas que valorizam seus talentos. Me conte o tamanho da equipe e a data do evento.</p>
<a class="btn lg wa" data-msg="palestra" data-note="WhatsApp · WA-PALESTRA" href="#" rel="noopener" target="_blank">Pedir proposta no WhatsApp</a>
</div>
</section>`;

export default function PalestrasPageChamadaFinal() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
