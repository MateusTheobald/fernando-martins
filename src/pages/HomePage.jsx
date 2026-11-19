import HomePageBanner from "../components/inicio/HomePageBanner";
import HomePagePorOndeQuerComecar from "../components/inicio/HomePagePorOndeQuerComecar";
import HomePageMetodoTresPilares from "../components/inicio/HomePageMetodoTresPilares";
import HomePageSobreFernando from "../components/inicio/HomePageSobreFernando";
import HomePageDepoimentos from "../components/inicio/HomePageDepoimentos";
import HomePageChamadaFinal from "../components/inicio/HomePageChamadaFinal";

export default function HomePage() {
  return <>
      <HomePageBanner />
      <HomePagePorOndeQuerComecar />
      <HomePageMetodoTresPilares />
      <HomePageSobreFernando />
      <HomePageDepoimentos />
      <HomePageChamadaFinal />
  </>;
}
