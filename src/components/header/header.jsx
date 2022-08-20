import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import TextLoop from "react-text-loop";
import { SocialIcon } from "react-social-icons";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";
import { BsCheck } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./responsive.css";
import Fade from "react-reveal/Fade";

export const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="header">
      <Fade top>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
          <Container>
            <Navbar.Brand href="/">
              {/* <img className="logo" src="./assets/images/untitled.png" alt="logo" /> */}
              <h3 className="logoText">Essaysbykirsten</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav>
                <Nav.Link
                  data-nav-section="about"
                  className="navLink"
                  href="#about"
                >
                  {" "}
                  <span className="navcounter">01. </span>About
                </Nav.Link>
                <Nav.Link className="navLink" href="#services">
                  {" "}
                  <span className="navcounter">02. </span>Services
                </Nav.Link>

                <Nav.Link className="navLink" href="#reviews">
                  {" "}
                  <span className="navcounter">03. </span>Reviews
                </Nav.Link>
                <Nav.Link className="navLink" href="#faq">
                  {" "}
                  <span className="navcounter">04. </span>FAQ
                </Nav.Link>
                <Nav.Link className="navLink" href="#contact">
                  {" "}
                  <span className="navcounter">05. </span>Contact
                </Nav.Link>
                <Nav.Link eventKey={2} href="#">
                  <button
                    onClick={() => setModalShow(true)}
                    style={{ marginTop: "-10%" }}
                    type="submit"
                    href="#"
                    className="hirebtn"
                  >
                    Hire Us
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fade>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Row className="centersection">
        <Col>
          <Fade bottom>
            <div className="centerDiv">
              <h1>
                <TextLoop>
                  <div>
                    <span className="loopingText">
                      ESSAY WRITING (ANY TYPE){" "}
                    </span>
                  </div>
                  <div>
                    <span className="loopingText">RESEARCH PAPER WRITING </span>
                  </div>
                  <div>
                    <span className="loopingText">
                      RESEARCH PROPOSAL WRITING
                    </span>
                  </div>
                  <div>
                    <span className="loopingText">CASE STUDY WRITING</span>
                  </div>
                </TextLoop>
                {""}
                <br /> AT YOUR CONVENIENCE
              </h1>
              <span className="aboutText">
                All types of writing service for students who want results twice
                as quickly. Use our essay writing service. Whatever type of
                academic paper you require to boost your grade and fulfill your
                deadlines, we can help.
              </span>
              <br />
              <span className="check">
                <BsCheck style={{ color: "#005987", fontSize: "20px" }} />
                <span className="checklist">Flexible prices</span> <br />
                <BsCheck style={{ color: "#005987", fontSize: "20px" }} />
                <span className="checklist">100% Original Essays</span>
                <br />
                <BsCheck style={{ color: "#005987", fontSize: "20px" }} />
                <span className="checklist">On-time Delivery</span>
                <br />
                <BsFillStarFill className="rate" />
                <BsFillStarFill className="rate" />
                <BsFillStarFill className="rate" />
                <BsFillStarFill className="rate" />
                <BsFillStarFill className="rate" />
              </span>
              <br />
              <button onClick={() => setModalShow(true)} className="common-btn">
                Get in touch
              </button>
              <br /> <br /> <br /> <br /> <br />
            </div>
          </Fade>
        </Col>
        <Col>
          <Fade bottom>
            <div className="svgImage">
              <img src="./assets/images/working.svg" width="70%" alt="svg" />
            </div>
          </Fade>
          <Fade left>
            <div className="bottomSection" style={{ zIndex: "2" }}>
              <RiDoubleQuotesL className="quoteIcon" />

              <p className="quote">
                Thank you very much for all of your help. This was my final
                paper before receiving my MBA. I can't thank you enough for your
                assistance. 
              </p>
              <p className="author">Jennifer Washington</p>
              <p className="role">MBA Graduate </p>
            </div>
          </Fade>
        </Col>
      </Row>

      <Fade left>
        <div className="fixedText">
          <Col>
            <Row>
              <a
                href="https://mail.google.com/mail/u/your@email.com/#inbox?compose=new&to=guruwriter5974@gmail"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  network="google"
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </Row>
            <br />
            <Row>
              <a
                href="https://wa.me/message/44JRXDZBFGE7E1"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  network="whatsapp"
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </Row>
            <br />

            <Row>
              <a
                href="http://twitter.com/Essaysbykirsten"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  network="twitter"
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </Row>
            <br />

            <Row>
              <a
                href="https://vm.tiktok.com/ZSJt7fttw/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  network="tiktok"
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </Row>
            <br />
            <Row>
              <a
                href="https://instagram.com/Essaysbykirsten"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  network="instagram"
                  style={{ height: 25, width: 25 }}
                />
              </a>
            </Row>

            <div className="vertical"></div>
          </Col>
        </div>
      </Fade>
      <Fade right>
        <div className="fixedTextRight">
          <Col>
            <Row>
              <span className="profileText">guruwriter5974@gmail.com</span>
            </Row>
            <div className="vertical2"></div>
          </Col>
        </div>
      </Fade>
    </div>
  );
};

//   Contact Us Modal
function MyVerticallyCenteredModal(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hamp745",
        "mytemplates",
        e.target,
        "user_mXPiDCaihK32SDnS4zVpj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <closeButton />

      <Modal.Body className="modaldiv">
        <Row>
          <Col>
            <span className="hire">Too much work? Need essay help?</span>
            <span className="hire1">Hire Us</span>

            <img
              className="contactSVG"
              src="./assets/images/tired.svg"
              alt="contactme"
              height="90%"
              width="100%"
            />
          </Col>

          <Col>
            <form className="form-floating" onSubmit={sendEmail}>
              <div class="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  required
                />
                <label for="floatingInput">Name</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  required
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  name="subject"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  required
                />
                <label for="floatingInput">Subject</label>
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                ></textarea>
                <label for="floatingInput">Comments</label>
              </div>

              <button type="submit" className="sendMessage">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer
        className="modaldiv"
        style={{ borderTop: "none" }}
      ></Modal.Footer>
    </Modal>
  );
}
