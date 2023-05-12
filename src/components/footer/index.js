import { Container } from "react-bootstrap";
import { Facebook, Github, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="pt-4 pb-4 text-muted text-center">
        <Container>
          <div className="my-3">
            <div className="h4">Nirali Vaghasiya</div>
            <nav role="navigation ">
              <ul className="nav justify-content-center">
                <li className="nav-item px-2">
                 <a href="https://twitter.com/i/flow/login" target="blank"><Twitter color="gray"/></a> 
                 
                </li>
                <li className="nav-item px-2">
                <a href="https://www.facebook.com/login/" target="blank"><Facebook color="gray"/></a> 
                </li>
                <li className="nav-item px-2">
                 <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1"target="blank"><Instagram color="gray"/></a>
                </li>
                <li className="nav-item px-2">
                <a href="https://github.com/" target="blank"><Github color="gray"/></a>  
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-small">
            <div className="mb-1">© Material Resume. All rights reserved.</div>
            <div>
              Design -
              <a href="https://templateflip.com/" target="_blank">
                TemplateFlip
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
};
export default Footer;
