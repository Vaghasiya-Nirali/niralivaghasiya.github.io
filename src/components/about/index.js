import { Col, Row } from "react-bootstrap";
import "./about.css";
import {
  Calendar,
  Envelope,
  GeoAlt,
  Skype,
  Telephone,
} from "react-bootstrap-icons";

const About = () => {
  return (
    <section id="about">
      <div className="shadow mt-5 p-5">
        <Row>
          <Col>
            <div className="display-6 mb-3 text-muted">About Me</div>
            <p>
              Hello! I'm Nirali Vaghasiya. I am passionate about react.js and
              Web Design. I am a skilled front-end developer.I am a quick
              learner and a team worker that gets the job done.
            </p>

            <p>
              To work in an environment which encourages me to succeed and grow
              professionally where i can utilize my skill and knowledge
              appropriately.
              {/* I can easily capitalize on low hanging fruits and quickly maximize
              timely deliverables for real-time schemas. */}
            </p>
          </Col>
          <Col>
            <Row className=" mt-2">
              <h2 className="display-6 mb-3 text-muted">Bio</h2>
              <Col sm={5}>
                <div className=" bio-icon  fw-bolder text-muted">
                  <Calendar />
                  <span className="bio">Age</span>
                </div>
              </Col>
              <Col sm={7}>
                <div className="bio-icon text-muted">24</div>
              </Col>
              <Col sm={5}>
                <div className="bio-icon fw-bolder text-muted">
                  <Envelope />
                  <span className="bio">Email</span>
                </div>
              </Col>
              <Col sm={7}>
                <div className="bio-icon text-muted">
                  niralivaghasiya234@gmail.com
                </div>
              </Col>
              <Col sm={5}>
                <div className=" bio-icon fw-bolder text-muted">
                  <Skype />
                  <span className="bio">Skype</span>
                </div>
              </Col>
              <Col sm={7}>
                <div className="bio-icon text-muted">niralivaghasiya@skype.com</div>
              </Col>
              <Col sm={5}>
                <div className=" bio-icon fw-bolder text-muted">
                  <Telephone />
                  <span className="bio">Phone</span>
                </div>
              </Col>
              <Col sm={7}>
                <div className="bio-icon text-muted">+9909981729</div>
              </Col>
              <Col sm={5}>
                <div className=" bio-icon fw-bolder text-muted">
                  <GeoAlt />
                  <span className="bio"> Address</span>
                </div>
              </Col>
              <Col sm={7}>
                <div className="bio-icon text-muted">
                  B-360 mahalaxmi soc. yogichok surat
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default About;
