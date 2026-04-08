import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import './Contact.css'

const initialFields = { nome: '', email: '', mensagem: '' }

function Contact() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  function validate() {
    const errs = {}
    if (!fields.nome.trim()) errs.nome = 'Nome é obrigatório.'
    if (!fields.email.trim()) {
      errs.email = 'E-mail é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Informe um e-mail válido.'
    }
    if (!fields.mensagem.trim()) errs.mensagem = 'Mensagem é obrigatória.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setStatus('error')
      return
    }
    // Simula envio bem-sucedido
    setStatus('success')
    setFields(initialFields)
    setErrors({})
  }

  return (
    <section id="formulario-contato" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="badge">Fale Conosco</span>
          <h2>Envie sua <span className="highlight">mensagem</span></h2>
          <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group${errors.nome ? ' form-group--error' : ''}`}>
              <label htmlFor="contact-nome">Nome</label>
              <input
                type="text"
                id="contact-nome"
                name="nome"
                value={fields.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                autoComplete="name"
              />
              {errors.nome && <span className="field-error">{errors.nome}</span>}
            </div>

            <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
              <label htmlFor="contact-email">E-mail</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className={`form-group${errors.mensagem ? ' form-group--error' : ''}`}>
              <label htmlFor="contact-mensagem">Mensagem</label>
              <textarea
                id="contact-mensagem"
                name="mensagem"
                value={fields.mensagem}
                onChange={handleChange}
                rows={5}
                placeholder="Como podemos ajudar?"
              />
              {errors.mensagem && <span className="field-error">{errors.mensagem}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Enviar Mensagem <Send size={18} />
            </button>

            {status === 'success' && (
              <div className="contact-feedback contact-feedback--success">
                <CheckCircle size={20} />
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="contact-feedback contact-feedback--error">
                <AlertCircle size={20} />
                <span>Por favor, corrija os campos destacados antes de enviar.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
