# FM Finanças — React + Vite

Conversão do HTML de referência para React, com seis páginas independentes, imagens locais e configuração para Vercel.

## Rodar localmente
Requer Node.js 20.19+ ou 22.12+.
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
A pasta de saída é `dist/`.

## Deploy na Vercel
Importe o repositório na Vercel. Use preset Vite, `npm run build` e `dist` como Output Directory. O `vercel.json` já configura o rewrite da aplicação.

## Organização
- `src/pages/`: Home, Sobre, Consultoria, Palestras, Curso e Página de Vendas.
- `src/components/`: componentes compartilhados.
- `src/styles/global.css`: estilos originais do HTML.
- `src/styles/app.css`: ajustes responsivos e componentes adicionais.
- `public/assets/`: imagens extraídas e deduplicadas do HTML original.

O conteúdo HTML de cada página está isolado em seu próprio arquivo de página, para facilitar manutenção sem concentrar tudo no `App.jsx`.

## Rotas
`/`, `/sobre`, `/consultoria`, `/palestras`, `/curso`, `/revolucao-financeira`. A navegação mantém o padrão hash original (`#/sobre` etc.).

## Dados que precisam de confirmação antes da publicação
- WhatsApp configurado conforme o HTML: `5519981833892`.
- Checkout Eduzz conforme o HTML: `https://sun.eduzz.com/40Q3XAVK0B?cupom=REVOLUCAO30`.
- Pixel Meta e Google Tag Manager: IDs ainda não fornecidos.
- O briefing prevê Política de Privacidade e Termos, mas não inclui o texto jurídico aprovado.
- Confirmar preço, prazo de garantia, dados cadastrais, depoimentos e materiais pendentes indicados no briefing.

Os parâmetros `utm_` da URL são repassados ao checkout. Eventos de clique são enviados ao `window.dataLayer` se houver um container configurado. O aviso de cookies é uma interface inicial; integrar uma plataforma de consentimento e bloquear tags não essenciais antes da ativação de campanhas.



## Componentização por seção

Cada bloco visual tem seu próprio componente `.jsx` e sua folha `.css`. A página principal apenas importa e organiza esses blocos. Exemplo:

```text
src/
  pages/
    HomePage.jsx
  components/
    inicio/
      HomePageBanner.jsx
      HomePageBanner.css
      HomePagePorOndeQuerComecar.jsx
      HomePagePorOndeQuerComecar.css
      HomePageMetodoTresPilares.jsx
      HomePageMetodoTresPilares.css
      HomePageSobreFernando.jsx
      HomePageSobreFernando.css
      HomePageDepoimentos.jsx
      HomePageDepoimentos.css
      HomePageChamadaFinal.jsx
      HomePageChamadaFinal.css
    sobre/
    consultoria/
    palestras/
    curso/
    vendas/
```

Para mudar a ordem dos blocos, edite `src/pages/HomePage.jsx`. Para alterar o conteúdo, edite o JSX do componente correspondente. Para ajustes exclusivos daquele bloco, use seu CSS. O `global.css` continua concentrando os tokens de marca e estilos compartilhados do modelo original.
