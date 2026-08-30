import React from 'react'

type TimelineEvent = {
  period: string
  title: string
  subtitle?: React.ReactNode
  github?: string
  body?: string
  bullets?: string[]
  icon?: string
}

const events: TimelineEvent[] = [
  {
    period: '2024',
    title: 'Control API',
    subtitle: <><span className="text-red-500">Projeto pessoal</span> — Sistema de Controle Financeiro Pessoal — (Node.js + React) - (hand-coded)</>,
    github: 'https://github.com/LeandroSantosP/control-api',
    icon: 'account_balance_wallet',
    body: 'Projeto pessoal para controle financeiro com autenticação JWT, transações categorizadas, relatórios PDF, upload de imagens e metas mensais.',
    bullets: [
      'Implementei autenticação stateless com JWT, protegendo todas as rotas privadas via middleware de autorização.',
      'Desenvolvi sistema de transações com categorização, recorrência e 5 filtros dinâmicos (mês, inscrições, recorrentes, receitas, finalizadas), incluindo painel com gráfico comparando maior/menor transação por mês.',
      'Implementei geração de relatórios em PDF com Handlebars, com filtro por período e por categoria (despesas/receitas/inscrições).',
      'Integrei upload de imagens com Firebase Storage.',
      'Criei sistema de metas financeiras mensais com visualização gráfica de progresso (meta vs. valor realizado).'
    ]
  },
  {
    period: '03/2025',
    title: 'Sell Ecom',
    subtitle: <><span className="text-red-500">Projeto pessoal</span> — API REST de e-commerce — (Spring-Boot) - (hand-coded + <span className="text-on-tertiary-container">IA</span>)</>,
    github: 'https://github.com/LeandroSantosP/sell-ecom',
    icon: 'storefront',
    body: 'Projeto pessoal de API REST de e-commerce com arquitetura em camadas, autenticação OAuth2 e testes automatizados.',
    bullets: [
      'Desenvolvi API REST de e-commerce com Spring Boot (12+ endpoints, arquitetura em camadas).',
      'Implementei autenticação e autorização com Spring Security + OAuth2, protegendo 10 endpoints com controle de acesso baseado em 2 roles (admin/user).',
      'Modelei entidades e persistência com Spring Data JDBC + MySQL, usando Flyway para versionamento e migrations do banco de dados.',
      'Criei 21 testes automatizados (unitários e integração) com JUnit, Mockito e Testcontainers.'
    ]
  },
  {
    period: '2026 — previsão 12/2029',
    title: 'Engenharia de Software',
    subtitle: <span className="text-emerald-500">Bacharelado</span>,
    icon: 'school',
    body: 'Universidade Pitágoras Unopar Anhanguera — Mogi das Cruzes/SP (2º semestre, Noturno). Cursos relevantes: CS50 (Harvard), Fundamentos de AWS (TreinaWeb) e Excel (Santander Open Academy).'
  },
  {
    period: '06/2026 — 08/2026',
    title: 'FlyRank AI Internship',
    subtitle: <><span className="text-on-tertiary-container">Estágio</span> — Backend AI Engineering Track</>,
    icon: 'work',
    bullets: [
      'Projeto Final (Embeddable Lead Capture Platform): desenvolvi plataforma para captura e qualificação de leads com widget incorporável (cross-domain), contratos de API rigorosos e processamento assíncrono de dados.',
      'Design de contratos e APIs: modelagem e implementação de endpoints REST com validação estrita de esquemas (schemas), tratamento defensivo de falhas e estados de erro bem definidos.',
      'Engenharia de prompt e tarefas: estruturação de instruções com limites claros, esquemas de entrada/saída e critérios de sucesso para tarefas automatizadas por IA.',
      'Avaliação e qualidade (Evals): garanti que a IA dá respostas corretas e segue as regras do negócio, sem inventar informações (alucinar).'
    ]
  },
  {
    period: '08/2026',
    title: 'The Polite Scraper & LLM Triage API',
    subtitle: <><span className="text-on-tertiary-container">Projeto de conclusão do FlyRank AI Internship</span> — (Node.js + Express) - (hand-coded + <span className="text-on-tertiary-container">IA</span>)</>,
    github: 'https://github.com/LeandroSantosP/The-polite-scraper',
    icon: 'bot',
    body: 'Projeto de conclusão do estágio FlyRank AI Internship — Backend AI Engineering Track.',
    bullets: [
      'Desenvolvi pipeline resiliente de web scraping em Node.js (Cheerio) para coleta, normalização e validação de dados estruturados com Zod, garantindo idempotência e politeness (delay de requisições, timeouts e cache local).',
      'Construí endpoint de IA (POST /triage) para classificação automática de mensagens com LLM (OpenRouter/Ollama), aplicando validação estrita de schema Zod com tratamento de erros (status 400, 422, 504 e 503) e zero vazamento de texto bruto da LLM.',
      'Implementei guardrails de resiliência e produção: timeout explícito de 30s, política seletiva de retentativas com backoff exponencial, loop de reparo em falhas de schema, logs de quarentena e kill switch via variáveis de ambiente.',
      'Estruturei suíte de testes de acurácia (evals/run.js) com 8 casos reais cobrindo cenários ambíguos (100% de precisão) e criei sistema de log de custos por token consumido para previsibilidade financeira em produção.'
    ]
  }
]

export default function Timeline(): JSX.Element {
  return (
    <section className="transition-all duration-700 opacity-100" id="timeline">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">LINHA DO TEMPO</h2>
        <p className="text-secondary font-body-md text-body-md max-w-xl mt-2">Trajetória completa: projetos, formação e experiências.</p>
      </div>

      <div className="relative">
        {events.map((ev, idx) => (
          <div key={idx} className="relative flex gap-4 pb-8 last:pb-0">
            <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-outline-variant" />
            <span className="relative z-10 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
              {ev.icon && <span className="material-symbols-outlined text-[14px] leading-none" aria-hidden>{ev.icon}</span>}
            </span>

            <div className="flex-1 rounded-md p-5 border border-outline-variant/20" style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>
              <div className="flex justify-between items-start gap-4 flex-wrap">
                <div>
                  <h3 className="font-semibold text-primary">{ev.title}</h3>
                  {ev.subtitle && <div className="text-secondary text-sm italic mt-0.5">{ev.subtitle}</div>}
                  {ev.github && (
                    <a className="text-primary hover:underline text-label-sm block mt-1" href={ev.github} target="_blank" rel="noreferrer">GitHub: {ev.github}</a>
                  )}
                </div>
                {ev.period && <div className="text-sm text-secondary shrink-0">{ev.period}</div>}
              </div>

              {ev.body && <p className="mt-3 text-body-md font-body-md text-secondary">{ev.body}</p>}

              {ev.bullets && (
                <ul className="mt-4 list-none space-y-2">
                  {ev.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
                      <span className="text-body-md text-secondary">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}