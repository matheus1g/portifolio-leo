import './Styles/App.css';

import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skill/Skill';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Header />

        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Testimonials />
          <Qualification />
          <Contact />
          <Footer />
        </main>
        
      </>
    </div>
  );
}

export default App;
