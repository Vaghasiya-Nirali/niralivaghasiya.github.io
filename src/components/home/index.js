import "./home.css";
import { Button, Card } from "react-bootstrap";
import { Twitter, Facebook, Instagram, Github } from "react-bootstrap-icons";
const Home = () => {
  return (
    <section id="intro">
      <div className="shadow">
        <Card className="card-img">
          <Card.Body className=" card-body card-body-img text-white d-flex align-items-center flex-column">
            <div className=" p-1">
              <img
                className=" shadow-2-strong img-thumbnail  "
                src={require("./Snapchat-1205535378.jpg")}
                width="150px"
              />
            </div>
            <div>
              <h1>Nirali Vaghasiy</h1>
              <h5 className="text">Front-end Developer</h5>
            </div>
            <div>
              <a href="https://twitter.com/i/flow/login" target="blank" className="m-1 "><Twitter  color="white" /></a>
              <a href="https://www.facebook.com/login/" target="blank" className="m-1 text-decoration-none" ><Facebook  color="white" /> </a>
              <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1"target="blank" className="m-1 "  ><Instagram color="white" /></a>
             <a href="https://github.com/" target="blank" className="m-1 text-decoration-none"> <Github  color="white" /></a>
            </div>
            <div className="mt-3">
              <a
                href="resumeDownload.pdf"
                download="resumeDownload.pdf"
                class="btn btn-outline-light p-2   "
                size="lg "
              >
                DOWNLOAD CV
              </a>
              <Button variant="info" className="m-4 " size="lg">
                HIRE ME
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};
export default Home;
