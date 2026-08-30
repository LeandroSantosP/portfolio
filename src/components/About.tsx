import React from 'react'

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center transition-all duration-700 opacity-100" id="about">
      <div className="md:col-span-5 relative">
        <div className="aspect-square rounded-lg overflow-hidden bg-surface-container shadow-sm border border-outline-variant/30">
          <img src="/perfil-photo.jpg" alt="Engenheiro de Software" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="md:col-span-7 flex flex-col gap-6">
        <h2 className="font-headline-lg text-headline-lg text-primary">Arquitetando soluções robustas com elegância técnica.</h2>
        <div className="font-body-lg text-body-lg text-secondary flex flex-col gap-4">
          <p>Sou um profissional em formação em Engenharia de Software, com experiência prática em desenvolvimento de APIs REST, automação, banco de dados e projetos de inteligência artificial. Autodidata, organizado e com forte interesse em aplicar IA e dados para resolver problemas técnicos, contribuindo para melhorias de processos e inovação.</p>
          <p>Acredito que o código deve ser tão legível quanto uma boa prosa. Meu foco está em código limpo, arquitetura em camadas e APIs bem contratadas, que não apenas funcionam hoje, mas evoluem com o negócio amanhã.</p>
          <p>Automatizo tarefas com Claude Code, Codex, Gemini e OpenCode. Quando não estou programando, estou explorando novas tendências em IA, cloud e open-source.</p>
        </div>
      </div>
    </section>
  )
}
