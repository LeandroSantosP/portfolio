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
          <p>Minha jornada no desenvolvimento de software começou com a curiosidade de entender como sistemas complexos se comunicam. Hoje, especializo-me em ecossistemas Java, transformando requisitos abstratos em APIs de alta performance.</p>
          <p>Acredito que o código deve ser tão legível quanto uma boa prosa. Meu foco está em Clean Architecture e princípios SOLID, garantindo que o software não apenas funcione hoje, mas evolua com o negócio amanhã.</p>
          <p>Quando não estou programando, estou explorando novas tendências em UI/UX ou contribuindo para projetos open-source que facilitam o dia a dia de outros desenvolvedores.</p>
        </div>
      </div>
    </section>
  )
}
