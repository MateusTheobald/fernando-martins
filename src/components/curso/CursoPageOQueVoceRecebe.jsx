import "./CursoPageOQueVoceRecebe.css";

const markup = `<section>
<div class="wrap">
<h2>O que você leva</h2>
<div class="doors">
<div class="door"><h3>24 aulas</h3><p>12 aulas teóricas e 12 práticas, para entender e já aplicar no mesmo dia.</p></div>
<div class="door"><h3>11 ferramentas</h3><p>Planilhas e simuladores prontos para organizar, quitar dívidas e investir.</p></div>
<div class="door"><h3>30 dias</h3><p>Um caminho com começo, meio e fim para sair do piloto automático.</p></div>
</div>
<div style="margin-top:44px"><a class="btn lg" data-note="→ Página de vendas (/revolucao-financeira)" href="#/revolucao-financeira">Ver tudo sobre o curso</a></div>
</div>
</section>`;

export default function CursoPageOQueVoceRecebe() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
