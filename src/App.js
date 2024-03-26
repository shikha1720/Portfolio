import "./App.css";
import Navbar from "./sections/Navbar/index";
import Hero from "./sections/HeroSection/herosection";
import Skills from "./sections/Skills/index";
import Education from "./sections/Education/education";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Experience from "./sections/Experience/experience";
import Contact from "./sections/Contact/contact";
import Footer from "./sections/Footer/footer";
import Projects from "./sections/Project/index";

function App() {
  return (
    <>
    <Toaster 
      position='bottom-left'
      toastOptions={{
        success:{
          theme: {
            primary: '#4aed88'
          },
        },
      }}/>
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Hero />
        <div className="app-innerWrapper">
          <Skills />
          <Projects />
        </div>
        <Experience />
        <div className="app-innerWrapper">
         <Education />
         <Contact />
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
