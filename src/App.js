import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Process from "./components/Process";
import SkillSet from "./components/SkillSet";
import CaseStudies from "./components/CaseStudies";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Career from "./components/Career";

import './App.css'
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
    <NavBar />
    <Home />
    <SkillSet />
    <Process />
    <Career />
    <CaseStudies />
    <AboutMe />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
