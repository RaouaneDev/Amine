import logo from './logo.svg';
import './App.css';
import Navs from './COMPONENTS/navs';
import Slider from './COMPONENTS/slider';
import Section1 from './COMPONENTS/section1';
import Specialite from './COMPONENTS/Specialite/specialite';
import Equipe from './COMPONENTS/Equipe/equipe';
import Footer from './COMPONENTS/Footer/footer';

function App() {
  return (
    <>
    <Navs/>
  <Slider/>
  <Section1/>
  <Specialite />
  <Equipe />
  <Footer/>
    </>
  );
}

export default App;
