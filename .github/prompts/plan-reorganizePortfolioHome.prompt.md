## Plano: Reorganizar Home do Portfólio

Adaptar a home para seguir a referência: navegação compacta, hero editorial em duas colunas, métricas, experiência, projetos, toolbox, trajetória e CTA final. Todo o conteúdo atual será preservado, mantendo a paleta creme/grafite/dourado/verde, temas claro/escuro e idiomas PT/EN.

**Etapas**

1. Reordenar a composição em [App.tsx](src/App.tsx): hero, métricas, experiência, projetos, habilidades, trajetória, contato e footer.
2. Refinar [HeroAbout.tsx](src/components/HeroAbout.tsx) com hierarquia visual semelhante à referência, mantendo foto, CTAs e redes sociais.
3. Criar `StatsStrip.tsx` com métricas de formação, projetos, certificações e experiência.
4. Criar `Projects.tsx`, convertendo os projetos atuais da timeline em cards com links para GitHub.
5. Ajustar [Timeline.tsx](src/components/Timeline.tsx) para evitar duplicação, reservando-o para carreira e formação.
6. Compactar [Skills.tsx](src/components/Skills.tsx) no formato “toolbox”, preservando categorias e ícones.
7. Atualizar [TopNav.tsx](src/components/TopNav.tsx) com os novos IDs e ordem das seções.
8. Ajustar [styles.css](src/styles.css) para espaçamento, cards, métricas, responsividade e estados de tema.
9. Adicionar os novos textos nos arquivos de tradução:
   - [pt-BR/translation.json](src/locales/pt-BR/translation.json)
   - [en/translation.json](src/locales/en/translation.json)
10. Manter [Contact.tsx](src/components/Contact.tsx) funcional, apresentando-o como CTA final com formulário preservado.

**Decisões**

- Manter todo o conteúdo atual.
- Usar os projetos existentes e seus links atuais.
- Preservar a paleta atual, sem copiar as cores da referência.
- Preservar tema claro/escuro, internacionalização, menu mobile, certificados e formulário.
- Não trocar framework nem criar novo design system.

**Validação**

- Executar `npm run build`.
- Testar a home em desktop e mobile.
- Verificar navegação por âncoras, menu mobile e troca de tema.
- Testar PT-BR/EN sem textos cortados.
- Validar links de projetos, redes sociais, CV, certificados e formulário.
- Confirmar que o reveal por `IntersectionObserver` não bloqueia seções.