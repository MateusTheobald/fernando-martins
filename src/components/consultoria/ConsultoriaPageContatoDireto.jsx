import "./ConsultoriaPageContatoDireto.css";

const markup = `<section class="light2">
<div class="wrap split">
<div class="stack">
<h2>Contato direto comigo</h2>
<p>Você não fala com call center nem com equipe rotativa. Toda dúvida, decisão ou ajuste de rota passa por mim.</p>
<ul class="ticks">
<li>Canal direto pelo WhatsApp para dúvidas entre as reuniões</li>
<li>Reuniões sempre com foco e pauta definidos</li>
<li>Acompanhamento próximo das decisões, nunca um plano engavetado</li>
</ul>
</div>
<div class="ph"><b>Valor e condições</b>A definir pelo Fernando se o valor aparece no site ou só na conversa.</div>
</div>
</section>`;

export default function ConsultoriaPageContatoDireto() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
