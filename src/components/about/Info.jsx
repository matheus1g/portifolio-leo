import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i class='uil uil-award about__icon'></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">1 Ano em Sala</span>
      </div>
      <div className="about__box">
        <i class='uil uil-briefcase-alt about__icon'></i>
        <h3 className="about__title">Sala de aula</h3>
        <span className="about__subtitle">8+ finalizadas</span>
      </div>
      <div className="about__box">
        <i class='uil uil-lightbulb-alt about__icon'></i>
        <h3 className="about__title">Integração</h3>
        <span className="about__subtitle">3 Projetos realizado</span>
      </div>

    </div>
  )
}

export default Info