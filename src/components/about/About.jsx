import React from 'react'
import "./About.css"
import Info from './Info'


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha Introdução</span>

      <div className="about__container container grid">
        <div className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Desbravando a história e iluminando o presente! Sou o Professor das matérias de humanas: História, Geografia, Ciências Sociais e Filosofia. Formado pela Universidade Federal do Triângulo Mineiro.  <br /> <br /> Acredito no poder do conhecimento para compreender o mundo à nossa volta e transmito essa paixão em minhas aulas.
            Com vasta experiência em ensinar grandes turmas e alunos em ensinos privados, celebro os sorrisos de diversos estudantes felizes com os resultados alcançados.
            <br />Vamos juntos embarcar nessa jornada de aprendizado e desvendar os mistérios do passado para um futuro brilhante!
            <br /><br />Seja bem-vindo(a) ao meu universo de conhecimento e inspiração. Estou animado para compartilhar o poder da história com você!
          </p>


        </div>
      </div>
    </section>
  )
}

export default About;