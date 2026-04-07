import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import './CTA.css'

function CTA() {
  return (
    <section id="contato" className="section section-dark">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <span className="badge">Contato</span>
            <h2>Pronto para transformar sua <span className="highlight">presença digital</span>?</h2>
            <p>
              Entre em contato e descubra como a IA pode revolucionar seus resultados
              em redes sociais e tráfego pago.
            </p>
            <div className="cta-contacts">
              <div className="cta-contact">
                <Mail size={20} />
                <span>contato@patriatech.com.br</span>
              </div>
              <div className="cta-contact">
                <Phone size={20} />
                <span>(11) 99999-0000</span>
              </div>
              <div className="cta-contact">
                <MapPin size={20} />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
          <div className="cta-form-wrapper">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input type="text" id="company" placeholder="Nome da sua empresa" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows={4} placeholder="Como podemos ajudar?" />
              </div>
              <button type="submit" className="btn btn-primary cta-submit">
                Enviar Mensagem <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
