import "./VendasPageDorDoPublico.css";

const markup = `<section>
<div class="wrap">
<h2 style="max-width:20ch">Você trabalha, ganha e no fim do mês o dinheiro some?</h2>
<ul class="dots" style="max-width:640px">
<li>Boletos que pesam e uma sensação de que nada sobra</li>
<li>Sonhos sempre empurrados para “depois”</li>
<li>Dívidas e cartão sem plano para sair</li>
<li>Medo de investir e de errar</li>
</ul>
<div class="bnote">Texto de dor provisório, escrito a partir do seu material. Revisar com a sua voz.</div>
</div>
</section>`;

export default function VendasPageDorDoPublico() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
