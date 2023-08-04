import React, { useState } from "react";
import './Qualification.css'

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha Jornada</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className={toggleState === 1
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Formação
          </div>
          <div className={toggleState === 2
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>

        </div>

        <div className="qualification__sections">

          <div className={toggleState === 1
            ? "qualification__content qualification__content-active"
            : "qualification__content"}
          >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Desing</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2014 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2012 - 2018
                </div>
              </div>


            </div>


          </div>

          <div className={toggleState === 2
            ? "qualification__content qualification__content-active"
            : "qualification__content"}
            onClick={() => toggleTab(2)}
            >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Desing</h3>
                <span className="qualification__subtitle">Microsoft - Spain</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>

              <div>
                <h3 className="qualification__title">UX Desing</h3>
                <span className="qualification__subtitle">Apple - Brasil</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">developer</h3>
                <span className="qualification__subtitle">Figma - German</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2014 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification