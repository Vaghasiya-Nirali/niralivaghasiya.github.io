import { Row, Col, ProgressBar } from "react-bootstrap";

const Skill = () => {
  const progressBarStyle = { height: "20px" };

  return (
    <section id="skill">
      <div className="shadow my-5 p-5">
        <div className="display-6 mb-3 text-muted">Professional Skill</div>
        <Row>
          <Col md={6}>
            <div>
              <span className="fw-bolder text-muted">HTML</span>
              <ProgressBar
                variant="info"
                now={95}
                label="MASTER"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">CSS</span>
              <ProgressBar
                variant="info"
                now={85}
                label=" EXPERT"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">Javascript</span>
              <ProgressBar
                variant="info"
                now={75}
                label="Advance"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">Bootstrap</span>
              <ProgressBar
                variant="info"
                now={75}
                label="Advance"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <span className="fw-bolder text-muted">React.js</span>
              <ProgressBar
                variant="success"
                now={95}
                label="MASTER"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">jquery</span>
              <ProgressBar
                variant="success"
                now={85}
                label=" EXPERT"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">React Bootstrap</span>
              <ProgressBar
                variant="success"
                now={75}
                label="Advance"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
            <div>
              <span className="fw-bolder text-muted">Adobe XD</span>
              <ProgressBar
                variant="success"
                now={75}
                label="Advance"
                className="my-2"
                style={{ ...progressBarStyle }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Skill;
