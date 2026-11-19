import PalestrasPageBanner from "../components/palestras/PalestrasPageBanner";
import PalestrasPagePublico from "../components/palestras/PalestrasPagePublico";
import PalestrasPageConteudoDaPalestra from "../components/palestras/PalestrasPageConteudoDaPalestra";
import PalestrasPageBeneficios from "../components/palestras/PalestrasPageBeneficios";
import PalestrasPageEmpresasAtendidas from "../components/palestras/PalestrasPageEmpresasAtendidas";
import PalestrasPageChamadaFinal from "../components/palestras/PalestrasPageChamadaFinal";

export default function PalestrasPage() {
  return <>
      <PalestrasPageBanner />
      <PalestrasPagePublico />
      <PalestrasPageConteudoDaPalestra />
      <PalestrasPageBeneficios />
      <PalestrasPageEmpresasAtendidas />
      <PalestrasPageChamadaFinal />
  </>;
}
