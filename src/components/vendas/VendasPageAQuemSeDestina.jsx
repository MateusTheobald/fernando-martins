import "./VendasPageAQuemSeDestina.css";

const markup = `<section>
<div class="wrap" style="max-width:820px">
<h2 style="margin-bottom:28px">Perguntas frequentes</h2>
<details><summary>Por quanto tempo tenho acesso?</summary><p>A definir pelo Fernando.</p></details>
<details><summary>Preciso entender de finanças?</summary><p>Não. O curso parte do zero e cada aula teórica vem com uma prática.</p></details>
<details><summary>E se eu não gostar?</summary><p>Você tem garantia de 7 dias, conforme a lei. É só pedir o reembolso nesse prazo.</p></details>
<details><summary>Ainda tenho dúvida. Falo com quem?</summary><p>Comigo, pelo WhatsApp. <a class="link wa" data-msg="curso" data-note="WhatsApp · WA-CURSO" href="#" rel="noopener" target="_blank">Tirar minha dúvida</a></p></details>
</div>
</section>`;

export default function VendasPageAQuemSeDestina() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
