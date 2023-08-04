import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Aulas</h2>
      <span className="section__subtitle">Oque eu ofereço</span>

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="uil uil-hourglass services__icon"></i>
            <h3 className="services__title">Aulas <br /> Historia</h3>
          </div>

          <span 
            className="services__button"
            onClick={() => toggleTab(1)}
          >
            Veja mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Historia</h3>
              <p className="services__modal-description">Uma aula de História é uma experiência educacional em que o professor explora os acontecimentos passados que moldaram a humanidade.</p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aulas personalizadas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Reforço Escolar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Revisão de prova e conteudo.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Consultoria Educacional.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Atendimento Especializado.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>  

        <div className="services__content">
          <div>
            <i className="uil uil-globe services__icon"></i>
            <h3 className="services__title">Aulas <br /> Geografia </h3>
          </div>

          <span 
            className="services__button"
            onClick={() => toggleTab(2)}
          >
            Veja mais<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Geografia</h3>
              <p className="services__modal-description">Uma aula de Geografia é uma oportunidade para os alunos explorarem as características físicas e humanas da Terra. </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aulas personalizadas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Reforço Escolar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Revisão de prova e conteudo.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Consultoria Educacional.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Atendimento Especializado.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-books services__icon"></i>
            <h3 className="services__title">Aulas <br /> Ciencias Sociais</h3>
          </div>

          <span 
            className="services__button"
            onClick={() => toggleTab(3)}
          >
            Veja mais<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Ciencias Sociais</h3>
              <p className="services__modal-description">Uma aula de Ciências Sociais engloba o estudo das sociedades humanas e suas interações. </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aulas personalizadas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Reforço Escolar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Revisão de prova e conteudo.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Consultoria Educacional.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Atendimento Especializado.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-search-alt services__icon"></i>
            <h3 className="services__title">Aulas <br /> Filosofia</h3>
          </div>

          <span 
            className="services__button"
            onClick={() => toggleTab(4)}
          >
            Veja mais<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 4 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Filosofia</h3>
              <p className="services__modal-description">Uma aula de Filosofia é uma jornada intelectual que explora questões fundamentais sobre a existência humana, a natureza da realidade, valores éticos e morais, a mente, a verdade, entre outros temas.</p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aulas personalizadas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Reforço Escolar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Revisão de prova e conteudo.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Consultoria Educacional.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Atendimento Especializado.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services