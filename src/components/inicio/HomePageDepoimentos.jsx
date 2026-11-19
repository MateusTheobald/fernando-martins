import "./HomePageDepoimentos.css";

const markup = `<section class="light2">
<div class="wrap">
<h2>Quem já passou por aqui</h2>
<div class="ph" style="margin-top:32px"><b>Espaço para depoimentos</b>Enviar 3 a 5 prints ou textos de clientes, com autorização de uso. Se não houver ainda, esta seção sai.</div>
</div>
</section>`;

export default function HomePageDepoimentos() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
