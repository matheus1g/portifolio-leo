import React from 'react';
import './Contact.css';


const Contact = () => {

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Entrar em Contato</h2>
      <span className="section__subtitle">Fale Comigo</span>

      <div className="contact__container container grid">
        <div className="contact__content">

          <div className="contact__info">
            <div className="contact__card">
              <i className="uil uil-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">17 98102-1329</span>

              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5517981021329&text=Ol%C3%A1!%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20particulares." className="contact__button">Escreva-me <i className="uil uil-arrow-right contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="uil uil-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">leonardomaltamariano@gmail.com</span>

              <a href="mailto:leonardomaltamarinao@gmail.com" rel="noreferrer" target="_blank" className="contact__button">Escreva-me <i className="uil uil-arrow-right contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="uil uil-instagram  contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@malta_leo</span>

              <a href="https://www.instagram.com/malta_leo/" rel="noreferrer" target="_blank" className="contact__button">Escreva-me <i className="uil uil-arrow-right contact__button-icon"></i></a>
            </div>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact