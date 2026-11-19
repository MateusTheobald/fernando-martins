import "./PalestrasPageBanner.css";

const markup = `<section class="hero sub">
<div class="wrap">
<div class="txt">
<h1>Palestra de educação financeira</h1>
<p class="lead">Descomplicando as finanças: viva além dos boletos. Para empresas que se preocupam com seus colaboradores.</p>
<div class="cta"><a class="btn lg wa" data-msg="palestra" data-note="WhatsApp · WA-PALESTRA" href="#" rel="noopener" target="_blank">Pedir proposta</a></div>
</div>
<div class="photo"><img alt="Fernando Martins palestrando em sala com projetor" src="/assets/79b30e9897ed.jpg" style="height:clamp(300px,34vw,440px);object-position:50% 25%"/></div>
</div>
</section>`;

export default function PalestrasPageBanner() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
