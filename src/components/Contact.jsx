import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', whatsappConsent: false })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '', whatsappConsent: false })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Contato</span>
          <h2>Fale com a <span className="highlight">nossa equipe</span></h2>
          <p>Tire suas dúvidas ou solicite uma proposta personalizada.</p>
        </div>
        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">Telefone <span className="contact-optional">(opcional)</span></label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="(11) 90000-0000"
                value={form.phone}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>
            <label className="contact-checkbox">
              <input
                type="checkbox"
                name="whatsappConsent"
                checked={form.whatsappConsent}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              Aceito retorno via WhatsApp
            </label>
            <div className="contact-field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Como podemos ajudar?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
            </div>
            {status === 'success' && (
              <p className="contact-feedback contact-success">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-feedback contact-error">
                Ocorreu um erro ao enviar. Tente novamente.
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
