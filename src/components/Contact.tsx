import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Access import.meta.env safely to avoid TS complaints in some setups
  const endpoint = ((import.meta as any)?.env?.VITE_FORMSPREE_ENDPOINT as string) || ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('idle')

    // prevent duplicate submissions while already sending
    if (sending) return

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setErrorMessage('Por favor, preencha todos os campos antes de enviar.')
      return
    }

    // only set sending once we're about to attempt delivery
    setSending(true)

    try {
      if (endpoint) {
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('message', message)

        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json'
          }
        })

        if (res.ok) {
          setStatus('success')
          setErrorMessage('')
          setName('')
          setEmail('')
          setMessage('')
        } else {
          setStatus('error')
          setErrorMessage('Erro ao enviar. Tente novamente mais tarde.')
        }
      } else {
        // fallback: open mailto with prefilled content using CRLF newlines (some clients require CRLF)
        const subjectRaw = `Contato via portfólio: ${name}`
        const bodyRaw = `Nome: ${name}\r\nEmail: ${email}\r\n\r\n${message}`
        const subject = encodeURIComponent(subjectRaw)
        const body = encodeURIComponent(bodyRaw)
        window.location.href = `mailto:skp.Tridimensional@gmail.com?subject=${subject}&body=${body}`
        setStatus('success')
        setErrorMessage('')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMessage('Erro de rede ao enviar a mensagem. Tente novamente.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="flex flex-col items-center transition-all duration-700 opacity-100" id="contact">
      <div className="max-w-3xl w-full text-center mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Leandro Pereira Dos Santos</h2>
        <p className="text-secondary font-body-md">Estou disponível para projetos, consultoria e colaborações técnicas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl w-full max-w-4xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined leading-none" aria-hidden>phone</span>
            <a className="text-primary font-semibold" href="tel:+5511992776212">11 99277-6212</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined leading-none" aria-hidden>mail</span>
            <a className="text-primary font-semibold" href="mailto:skp.Tridimensional@gmail.com">skp.Tridimensional@gmail.com</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined leading-none" aria-hidden>place</span>
            <div className="text-secondary">Jardim do Vale, Itaquaquecetuba/SP</div>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined leading-none" aria-hidden>badge</span>
            <div className="text-secondary">Habilitação (CNH): Categoria B</div>
          </div>

          <div className="flex items-center gap-4">
            <a className="text-primary hover:underline" href="https://www.linkedin.com/in/leandro-p-dos-santos" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="text-secondary">•</span>
            <a className="text-primary hover:underline" href="https://github.com/LeandroSantosP" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-primary ml-1">Nome Completo</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-surface border border-outline-variant/50 rounded-lg p-4 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                placeholder="Como devo te chamar?"
                type="text"
                required
              />
          </div>

          <div className="space-y-2">
            <label className="font-label-md text-label-md text-primary ml-1">Seu melhor E-mail</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-surface border border-outline-variant/50 rounded-lg p-4 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
              placeholder="exemplo@email.com"
              type="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="font-label-md text-label-md text-primary ml-1">Mensagem</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full bg-surface border border-outline-variant/50 rounded-lg p-4 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none"
              placeholder="No que posso te ajudar?"
              rows={4}
              required
            />
          </div>

          <div>
            <button
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all disabled:opacity-50 inline-flex items-center justify-center gap-3"
              type="submit"
              disabled={sending}
              aria-busy={sending}
            >
              {sending && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                  <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )}
              <span>{sending ? 'Enviando...' : 'Enviar Mensagem'}</span>
            </button>
          </div>

          {status === 'success' && <div className="text-emerald-500">Mensagem enviada com sucesso.</div>}
          {status === 'error' && (
            <div className="text-rose-500">{errorMessage || 'Erro ao enviar. Verifique os campos e tente novamente.'}</div>
          )}
        </form>
      </div>
    </section>
  )
}
