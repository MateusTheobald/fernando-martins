import "./VendasPageBarraDeVendas.css";

const markup = `<div class="salesbar"><div class="wrap">
<img alt="Fernando Martins" src="/assets/cc15596b16ce.png"/>
<a class="btn eduzz" data-note="Eduzz (nova aba)" href="#" rel="noopener" target="_blank">Quero começar</a>
</div></div>`;

export default function VendasPageBarraDeVendas() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
