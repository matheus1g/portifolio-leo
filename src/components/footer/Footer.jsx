import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Leonardo</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Sobre</a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">Qualificação</a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">Depoimento</a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/malta_leo/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-instagram"
              rel="noreferrer"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-facebook-f"
              rel="noreferrer"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-malta-mariano-368b85255"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <span className="footer__copy">Desenvolvido por <a href="https://www.instagram.com/gomes.png/" target="_blank"
            rel="noreferrer"> <i class="uil uil-instagram"
              rel="noreferrer"></i> gomes.png</a> com ❤️ - Todos os direitos reservado 2023 </span>
      </div>
    </footer>
  )
}

export default Footer