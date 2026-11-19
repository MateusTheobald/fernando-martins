import "./VendasPageQuemVaiGuiar.css";

const markup = `<section class="light2">
<div class="wrap split">
<div class="pic"><img alt="Fernando Martins" src="/assets/4bb2d9e3f384.jpg" style="aspect-ratio:1/1;object-position:50% 20%"/></div>
<div class="stack">
<h2>Quem vai te guiar</h2>
<p class="lead">Sou Fernando Martins, consultor financeiro pessoal há mais de 6 anos, com mais de 300 famílias atendidas. Criei este curso para levar o que funciona na consultoria a quem ainda não pode contratá-la.</p>
</div>
</div>
</section>`;

export default function VendasPageQuemVaiGuiar() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
