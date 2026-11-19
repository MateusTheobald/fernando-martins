import "./SobrePageTopo.css";

const markup = `<section class="hero sub">
<div class="wrap">
<div class="txt">
<h1>Sou Fernando Martins</h1>
<p class="lead">Consultor financeiro pessoal. Meu trabalho é ajudar você a conquistar mais e parar de patinar.</p>
</div>
<div class="photo"><img alt="Retrato de Fernando Martins" src="/assets/4bb2d9e3f384.jpg" style="height:clamp(300px,34vw,440px)"/></div>
</div>
</section>`;

export default function SobrePageTopo() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
