import React from 'react'

export default function Blog() {
  return (
    <section id="blog" className="transition-all duration-700 opacity-100">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary">Artigos Técnicos</h2>
        <a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-2" href="#">Ver Todos <span className="material-symbols-outlined text-[18px]">east</span></a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <a className="group flex gap-md bg-surface-container-lowest p-gutter rounded-lg border border-outline-variant/20 hover:border-primary/20 transition-all soft-shadow" href="#">
          <div className="w-40 h-40 shrink-0 rounded-lg overflow-hidden bg-surface-container">
            <img alt="Blog Post 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyC_c9R0QYEUv7H0sAyHBy_pUiZzRhaJ54HnVzRGRkdHqn6ccA2M-sqQq8gvFKwc8BCRqyryPPGXTskauAtfm2vMqOcFAgfIvBb6bcF5BVyFYtn3QDogl9VC7Fa0mlkBxxeH8UMFK9KIJFBVWlb6c3L7BnAskMhCIKRGLD9kbpWxVutP-HHS7WMWrfrHr6nD56t-GCYhXBPtYViUMBECwxGsJCWyTja27XpgS1lUvSWOp83SHzdc3Bcm2I3ibPVUUzzz7Z_b1N2YNF" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-on-tertiary-container mb-2">Março 2024</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-on-tertiary-container transition-colors">Implementando DDD sem complexidade acidental</h3>
            <p className="text-secondary font-body-md text-body-md line-clamp-2">Como aplicar Domain Driven Design em projetos de pequeno e médio porte sem sobrecarregar a equipe.</p>
          </div>
        </a>

        <a className="group flex gap-md bg-surface-container-lowest p-gutter rounded-lg border border-outline-variant/20 hover:border-primary/20 transition-all soft-shadow" href="#">
          <div className="w-40 h-40 shrink-0 rounded-lg overflow-hidden bg-surface-container">
            <img alt="Blog Post 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj3oxFzXf1NXmoRaa05tzZYJ8bRwzKz3U-Zwj0hXnFJtM00BbitlZDT9YVwxWqrYKypjog70wA_V1rCFanz1lsSMHT5ILqGl_Vau-PH0L2s9OAnKBPdwwTMNCV80QbpSdiK5saBfy8QJjgEuX5I6JjMuSCywxUyi9w3CxehshSn8cB2ZMj4PmVNS3vFyuPiUVeZqBtS08tJYahVnrVaNA_sGc9K2eDm7oidyyIceDd1Rtuspw_rjITlUkuHrkZcLnBu3p-_V8YpTio" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-on-tertiary-container mb-2">Fevereiro 2024</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-on-tertiary-container transition-colors">O futuro das APIs Java com Virtual Threads</h3>
            <p className="text-secondary font-body-md text-body-md line-clamp-2">Explorando o Projeto Loom e como ele redefine a escalabilidade no ecossistema Java.</p>
          </div>
        </a>
      </div>
    </section>
  )
}
