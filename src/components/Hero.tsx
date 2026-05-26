import React from 'react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-xl transition-all duration-700 opacity-100">
      <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-lg mb-8">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="font-label-sm text-label-sm text-on-surface-variant">Disponível para novos projetos</span>
      </div>

      <h1 className="font-headline-xl text-headline-xl text-primary mb-6 max-w-4xl">
        Engenheiro de Software &amp; <span className="text-on-tertiary-container">Web Developer</span>
      </h1>

      <p className="font-headline-md text-headline-md text-secondary mb-12 max-w-2xl">
        Especialista em Java &amp; Spring Boot, focado em arquiteturas escaláveis e experiências de usuário refinadas.
      </p>

      <div className="flex gap-md">
        <a href="#projects" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-2">
          Projetos
          <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
        </a>

        <a href="#about" className="border border-outline-variant text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">Sobre Mim</a>
      </div>
    </section>
  )
}
