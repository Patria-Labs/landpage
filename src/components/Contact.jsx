import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Formulário enviado:', form)
  }

  return (
    <section id="contato" className="section section-dark">
      <div className="container">
        <div className="contact-header">
          <span className="badge">Contato</span>
          <h2>Fale <span className="highlight">conosco</span></h2>
          <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-nome">Nome</label>
              <input
                type="text"
                id="contact-nome"
                name="nome"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">E-mail</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-mensagem">Mensagem</label>
              <textarea
                id="contact-mensagem"
                name="mensagem"
                rows={5}
                placeholder="Como podemos ajudar?"
                value={form.mensagem}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              Enviar Mensagem <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
