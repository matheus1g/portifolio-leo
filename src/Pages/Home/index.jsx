import Header from '../../components/header/Header';// eslint-disable-next-line
import Banner from '../../components/banner/Banner';// eslint-disable-next-line
import About from '../../components/about/About';// eslint-disable-next-line
import Skills from '../../components/skill/Skill';// eslint-disable-next-line
import Services from '../../components/services/Services';// eslint-disable-next-line
import Qualification from '../../components/qualification/Qualification';// eslint-disable-next-line
import Testimonials from '../../components/testimonials/Testimonials';// eslint-disable-next-line
import Contact from '../../components/contact/Contact';// eslint-disable-next-line
import Footer from '../../components/footer/Footer';// eslint-disable-next-line

const Home = () => {
  return (
      <div>
          <Header /> 
          <Banner />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Testimonials />
          <Contact />
          <Footer />
      </div>
  );
}

export default Home;
