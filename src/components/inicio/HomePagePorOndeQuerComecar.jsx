import "./HomePagePorOndeQuerComecar.css";

const markup = `<section>
<div class="wrap">
<h2>Por onde você quer começar?</h2>
<div class="doors">
<div class="door">
<h3>Consultoria financeira pessoal</h3>
<p>Acompanhamento durante um ano, com reunião a cada 45 dias e contato direto comigo pelo WhatsApp.</p>
<a class="btn" data-note="→ Consultoria (/consultoria)" href="#/consultoria">Ver como funciona</a>
</div>
<div class="door">
<h3>Curso Revolução Financeira em 30 dias</h3>
<p>Minha metodologia em 24 aulas, com ferramentas prontas, para você aplicar no seu ritmo.</p>
<a class="btn" data-note="→ Curso resumo (/curso)" href="#/curso">Conhecer o curso</a>
</div>
<div class="door">
<h3>Palestras para empresas</h3>
<p>Educação financeira para colaboradores, ideal para SIPATs e eventos de bem-estar.</p>
<a class="btn" data-note="→ Palestras (/palestras)" href="#/palestras">Levar para minha empresa</a>
</div>
</div>
</div>
</section>`;

export default function HomePagePorOndeQuerComecar() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
