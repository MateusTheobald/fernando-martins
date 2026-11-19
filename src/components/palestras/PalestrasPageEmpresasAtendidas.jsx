import "./PalestrasPageEmpresasAtendidas.css";

const markup = `<section class="light2">
<div class="wrap">
<h2>Empresas que já receberam a palestra</h2>
<div class="ph" style="margin-top:28px"><b>Faixa de logos</b>Kasa Mais, BNI, Baldin, Soedil, Plano’s e outras já aparecem no seu PDF. Antes de publicar, confirmar com cada empresa que o logo pode ser usado.</div>
</div>
</section>`;

export default function PalestrasPageEmpresasAtendidas() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
