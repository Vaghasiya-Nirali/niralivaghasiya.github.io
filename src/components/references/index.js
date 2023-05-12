import { Row, Col,Image } from "react-bootstrap";
import './reference.css'

const References = () => {
  return (
    <section id="references">
      <div className="shadow my-5 p-5">
        <div className="display-6 mb-3 text-muted">References</div>
        <Row>
          <Col>
            <div className="d-flex mb-2">
              <div className="avatar ">
              <Image
                  className=" shadow-2-strong"
                  src={require('./reference-image-1.jpg')}
                  width={60}
                                
                />
          
              </div>
              <div className="header-bio m-3 mb-0">
                <h3 className="h6 mb-1">Aiyana</h3>
                <p className="text-muted ">CEO / Web Design Company</p>
              </div>
            </div>
            <div className="d-flex">
            <i  class="fa fa-quote-left"></i>
              <p className="mx-2">
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex mb-2">
              <div className="avatar">
              <Image
                  className=" shadow-2-strong"
                  src={require('./reference-image-2.jpg')}
                  width={60}
                                
                />
              </div>
              <div className="header-bio m-3 mb-0">
                <h3 className="h6 mb-1">Alexander</h3>
                <p className="text-muted">
                  Front-end Developer / Web Design Company
                </p>
              </div>
            </div>
            <div className="d-flex">
            <i  class="fa fa-quote-left"></i>
              <p className="mx-2">
                Walter is a great co-worker and problem solver. He is quick to
                extend his helping hand and makes a good team player.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default References;
