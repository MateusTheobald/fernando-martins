import VendasPageBarraDeVendas from "../components/vendas/VendasPageBarraDeVendas";
import VendasPageBanner from "../components/vendas/VendasPageBanner";
import VendasPageDorDoPublico from "../components/vendas/VendasPageDorDoPublico";
import VendasPageMetodoCompleto from "../components/vendas/VendasPageMetodoCompleto";
import VendasPageConteudoDoCurso from "../components/vendas/VendasPageConteudoDoCurso";
import VendasPageQuemVaiGuiar from "../components/vendas/VendasPageQuemVaiGuiar";
import VendasPageDepoimentosAlunos from "../components/vendas/VendasPageDepoimentosAlunos";
import VendasPageOferta from "../components/vendas/VendasPageOferta";
import VendasPagePerguntasFrequentes from "../components/vendas/VendasPagePerguntasFrequentes";
import VendasPageChamadaFinal from "../components/vendas/VendasPageChamadaFinal";

export default function VendasPage() {
  return <>
      <VendasPageBarraDeVendas />
      <VendasPageBanner />
      <VendasPageDorDoPublico />
      <VendasPageMetodoCompleto />
      <VendasPageConteudoDoCurso />
      <VendasPageQuemVaiGuiar />
      <VendasPageDepoimentosAlunos />
      <VendasPageOferta />
      <VendasPagePerguntasFrequentes />
      <VendasPageChamadaFinal />
  </>;
}
