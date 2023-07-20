import { Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div>
      <Header />

      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
