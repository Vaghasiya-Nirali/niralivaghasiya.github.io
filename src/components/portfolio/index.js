import { Row, Col, Image } from "react-bootstrap";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="shadow my-5 p-5">
        <div className="display-6 mb-3 text-muted">Portfolio</div>
        <Row className="g-0">
          <Col md={6}>
            <Image
              className=" shadow-2-strong"
              src={require("./project-1.jpg")}
              width="100%"
            />
          </Col>
          <Col className=" d-flex align-items-center">
            <div className="m-4 mt-md-2">
              <p className="text-success text-small">
                Frontend / HTML / CSS / JavaScript
              </p>
              <h3 className="text-muted">Photo Agency Website</h3>
              <p className="text-muted">
                Built highly performant website for an E-commerce Portal. Worked
                with back-end team to timely deliver codebase in HTML, CSS and
                modern JavaScript.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-0 mb-3 mb-md-0 mb-lg-0 d-flex align-items-center rev-row">
          <Col md={6}>
            <div className="m-4 mt-md-2">
              <p className="text-success text-small">
                Graphic Design / Photoshop / Sketch
              </p>
              <h3 className="text-muted">Restaurant Website Design</h3>
              <p className="text-muted">
                Web design for popular restaurant chain involving complex
                layouts done in both Photoshop and Sketch. Collaborated with
                back-end and front-end team for finished product.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image
              className=" shadow-2-strong"
              src={require("./project-2.jpg")}
              width="100%"
            />{" "}
          </Col>
        </Row>
        <div className="row g-0">
          <Col md={6}>
            <Image
              className=" shadow-2-strong"
              src={require("./project-3.jpg")}
              width="100%"
            />{" "}
          </Col>
          <Col className="d-flex align-items-center">
            <div className="m-4 mt-md-2">
              <p className="text-success text-small">
                Frontend / HTML / CSS / JavaScript
              </p>
              <h3 className="text-muted">E-Commerce Website</h3>
              <p className="text-muted">
                Built highly performant website for an E-commerce Portal. Worked
                with back-end team to timely deliver codebase in HTML, CSS and
                modern JavaScript.
              </p>
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
