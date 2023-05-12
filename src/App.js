import { Container } from "react-bootstrap";
import Navigation from "./components/navigation";
import Home from "./components/home";
import About from "./components/about";
import Skill from "./components/skill";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import References from "./components/references";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/js/all.js';

// import Validation from './components/validation';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Home />
        <About />
        <Skill />
        <Experience />
        <Education />
        <Portfolio />
        <References />
        <Contact />
        <Footer />
      </Container>

      {/* <Validation/> */}
    </>
  );
}

export default App;
