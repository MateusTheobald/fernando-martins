import "./PalestrasPageConteudoDaPalestra.css";

const markup = `<section class="dark">
<div class="wrap split rev" style="align-items:start">
<div>
<h2>O que o colaborador vai aprender</h2>
<ul class="dots">
<li>Descobrindo o seu perfil financeiro</li>
<li>Proporção ideal</li>
<li>Como gastar menos</li>
<li>6 passos para a independência financeira</li>
<li>Onde investir no curto, médio e longo prazo</li>
</ul>
</div>
<div>
<h3 style="color:var(--coral)">Por que participar</h3>
<ul class="ticks">
<li><b>Organize suas finanças:</b> tenha clareza sobre sua situação atual e defina metas realistas.</li>
<li><b>Aprenda a investir:</b> descubra como começar mesmo com pouco dinheiro.</li>
<li><b>Conquiste seus objetivos:</b> realize seus sonhos sem sufoco financeiro.</li>
<li><b>Tenha mais tranquilidade:</b> reduza o estresse e a ansiedade ligados ao dinheiro.</li>
</ul>
</div>
</div>
</section>`;

export default function PalestrasPageConteudoDaPalestra() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
