import ConsultoriaPageBanner from "../components/consultoria/ConsultoriaPageBanner";
import ConsultoriaPageComoFunciona from "../components/consultoria/ConsultoriaPageComoFunciona";
import ConsultoriaPageMetodoTresPilares from "../components/consultoria/ConsultoriaPageMetodoTresPilares";
import ConsultoriaPageCronograma from "../components/consultoria/ConsultoriaPageCronograma";
import ConsultoriaPageContatoDireto from "../components/consultoria/ConsultoriaPageContatoDireto";
import ConsultoriaPageChamadaFinal from "../components/consultoria/ConsultoriaPageChamadaFinal";

export default function ConsultoriaPage() {
  return <>
      <ConsultoriaPageBanner />
      <ConsultoriaPageComoFunciona />
      <ConsultoriaPageMetodoTresPilares />
      <ConsultoriaPageCronograma />
      <ConsultoriaPageContatoDireto />
      <ConsultoriaPageChamadaFinal />
  </>;
}
