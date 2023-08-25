import React from 'react';
import "./Banner.css"
import Social from './social';
import Data from './data';
import ScrollDown from './ScrollDown';


const Banner = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
        <ScrollDown />

      </div>
    </section>
  )
}

export default Banner;