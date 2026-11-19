import "./SobrePageRedeDeApoio.css";

const markup = `<section>
<div class="wrap split">
<div class="pic"><img alt="Fernando Martins no Pacaembu" src="/assets/6e4bb2b22638.jpg" style="aspect-ratio:4/5;object-position:50% 25%"/></div>
<div class="stack">
<h2>Minha rede à sua disposição</h2>
<p>Quando o seu plano esbarra em algo fora da consultoria financeira, você não fica sozinho procurando. Eu indico profissionais de confiança:</p>
<ul class="dots">
<li>Contadores e advogados, para questões tributárias e patrimoniais</li>
<li>Corretores de seguros, para as coberturas certas</li>
<li>Especialistas em crédito e financiamento</li>
<li>Outros profissionais dentro e fora do BNI, conforme a sua necessidade</li>
</ul>
<p style="margin-top:26px"><a class="btn wa" data-msg="geral" data-note="WhatsApp · WA-GERAL" href="#" rel="noopener" target="_blank">Falar no WhatsApp</a></p>
</div>
</div>
</section>`;

export default function SobrePageRedeDeApoio() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
