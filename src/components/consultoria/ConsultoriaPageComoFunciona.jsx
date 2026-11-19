import "./ConsultoriaPageComoFunciona.css";

const markup = `<section>
<div class="wrap">
<h2>Como funciona</h2>
<div class="steps">
<div class="step"><h3>Conversa inicial</h3><p>Conversamos pelo WhatsApp para entender o seu momento e o que você quer conquistar.</p></div>
<div class="step"><h3>Diagnóstico financeiro</h3><p>Reunião de cerca de 2 horas para mapear a sua situação. Você recebe um relatório em PDF.</p></div>
<div class="step"><h3>Proposta</h3><p>Apresento o plano e o cronograma de acompanhamento para o seu caso.</p></div>
<div class="step"><h3>Acompanhamento</h3><p>Reuniões a cada 45 dias, com pauta definida, e canal direto comigo entre elas.</p></div>
</div>
</div>
</section>`;

export default function ConsultoriaPageComoFunciona() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
