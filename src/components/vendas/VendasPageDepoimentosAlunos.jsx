import "./VendasPageDepoimentosAlunos.css";

const markup = `<section>
<div class="wrap">
<h2>O que dizem os alunos</h2>
<div class="ph" style="margin-top:28px"><b>Depoimentos</b>Quando houver alunos com resultado, entram aqui. Sem depoimento real, esta seção é removida.</div>
</div>
</section>`;

export default function VendasPageDepoimentosAlunos() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
