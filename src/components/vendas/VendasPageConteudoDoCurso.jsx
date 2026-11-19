import "./VendasPageConteudoDoCurso.css";

const markup = `<section>
<div class="wrap">
<h2>O que está dentro</h2>
<div class="doors" style="margin-top:36px">
<div class="door"><h3>12 aulas teóricas</h3><p>Os conceitos explicados de forma direta, sem economês.</p></div>
<div class="door"><h3>12 aulas práticas</h3><p>Você coloca a mão na massa e aplica cada etapa na sua realidade.</p></div>
<div class="door"><h3>11 ferramentas</h3><p>Ferramentas prontas para usar durante o curso.</p></div>
</div>
<div class="ph" style="margin-top:28px"><b>Prints das ferramentas</b>Inserir 2 ou 3 telas das ferramentas (diagnóstico, 50/30/20, simulador). O Fernando envia as imagens.</div>
</div>
</section>`;

export default function VendasPageConteudoDoCurso() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
