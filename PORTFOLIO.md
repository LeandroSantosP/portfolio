# Email Classifier — Texto para portfólio (PT-BR)

## Título (opção 1)

Classificador de E-mails com IA — um juiz automático para sua caixa de entrada

## Título (opção 2)

Email Classifier — e-mails classificados por IA (System One) em tempo real

## Descrição

**Email Classifier** é uma aplicação full-stack que decide, com IA, o que fazer com cada e-mail da sua caixa de entrada: **responder**, **ignorar (spam)**, **revisar** ou **talvez**. Cada mensagem recebe também um nível de importância (alta/média/baixa) e uma confiança em %.

A classificação é feita pelo **Jev**, modelo *System One* da TypeSafe, que em vez de textos livres devolve **julgamentos tipados com probabilidades** — código que age diretamente sobre a resposta. Quando a confiança é baixa ou dois vereditos brigam entre si, o modelo promove automaticamente para *revisão humana* (em vez de chutar). Sem chave de IA, um **classificador heurístico** assume o lugar e o app roda de ponta a ponta com zero credenciais.

O app integra **Gmail via OAuth** (somente leitura), busca a caixa de entrada e o spam com paginação, e exibe tudo numa tabela com filtros por veredito/importância, **modo escuro**, **PT-BR/EN** e borda animada. Resultados são persistidos em cache — re-julgar um lote só custa o que falta julgar.

## Destaques

- Judiador AI *System One* tipado (verdict + importância + confiança) com fallback heurístico automático
- Arquitetura de classificadores **intercambiáveis** (Jev ⇄ mock) sem tocar na UI
- Gmail OAuth (read-only) com fallback para dados mock
- SPA React/Vite com **dark mode** e **i18n PT-BR/EN** (pt-BR é o padrão)
- Monorepo npm workspaces: `apps/api` (Fastify/TS) · `apps/web` (React) · `packages/shared` (contratos)