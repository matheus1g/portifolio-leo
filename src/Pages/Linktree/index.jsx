import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import fotoLeo from '../../Assets/circleLeo.png';

const Linktree = () => {


  /*function toggleMode() {
  const html = document.getElementById("container")
  console.log(html)
  html.classList.toggle('light')
}*/



  return (
    <div className='links'>
    <div id="container">
      <div id="content">
        <div id="profile">
          <img src={fotoLeo} alt="Foto do leonardo" />
          <p>@malta_leo</p>
        </div>

        {/* <div id="switch" onClick={toggleMode}>
      <button>
      </button>
      <span></span>
  </div> */}

        <div id="social-links">
          <a href="https://www.linkedin.com/in/leonardo-malta-mariano-368b85255" target="_blank" rel="noreferrer"><i class="uil uil-facebook-f" rel="noreferrer"></i></a>
          <a href="https://www.linkedin.com/in/leonardo-malta-mariano-368b85255" target="_blank" rel="noreferrer"><i class="uil uil-instagram" rel="noreferrer"></i></a>
          <a href="https://www.linkedin.com/in/leonardo-malta-mariano-368b85255" target="_blank" rel="noreferrer"><i class="uil uil-linkedin" rel="noreferrer"></i></a>
        </div>

        <ul>
          <li><Link to="/">Aulas Particulares</Link></li>
          <li><Link to="http://localhost:3000/blog">Meu Blog</Link></li>
          <li><a href="https://api.whatsapp.com/send?phone=5517981021329&text=Ol%C3%A1!%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20particulares." target="_blank" rel="noreferrer">Entrar em contato</a></li>
        </ul>


        <footer>
          <p>
            Feito pelo <i class="uil uil-instagram" rel="noreferrer"></i> <a href="https://www.instagram.com/gomes.png/"
              target="_blank" rel="noreferrer">@gomes.png</a> com ♥
          </p>
        </footer>
      </div>
    </div>
    </div>
  )
};

export default Linktree;