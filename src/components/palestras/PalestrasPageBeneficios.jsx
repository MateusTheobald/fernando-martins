import "./PalestrasPageBeneficios.css";

const markup = `<section>
<div class="wrap">
<h2>Benefícios para a empresa</h2>
<p class="lead" style="margin-top:14px">Uma excelente oportunidade para SIPATs e momentos estratégicos ao longo do ano.</p>
<ul class="dots" style="margin-top:18px">
<li>Redução do turnover</li>
<li>Aumento da produtividade</li>
<li>Melhora da saúde financeira dos colaboradores</li>
</ul>
<div class="gallery">
<img alt="Fernando palestrando" src="/assets/ced13667e7e0.jpg"/>
<img alt="Fernando palestrando sobre planejamento financeiro" src="/assets/eb57d06a22b2.jpg"/>
<img alt="Fernando palestrando em sala" src="/assets/79b30e9897ed.jpg"/>
</div>
</div>
</section>`;

export default function PalestrasPageBeneficios() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
