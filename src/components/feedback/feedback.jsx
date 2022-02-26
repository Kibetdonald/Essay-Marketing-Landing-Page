import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import Tilt from "react-vanilla-tilt";
import { BsFillStarFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
export const Feedback = () => {
    
  return (
    <div id="reviews">
      <h3 className="topic">Check what Our Clients Say</h3>
      <hr className="vr2"/>
      
      <br />
      <div className="feedbackdiv">
        <br />
        <div className="row">
          <div className="col-md-4">
            <Tilt
              style={{ border: "none" }}
              options={{
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1,
              }}
            >
              <Card className="cardSection">
                <Card.Body>
                  <Card.Title>
                    <FaQuoteLeft
                      style={{ fontSize: "40px", color: "#00D4FF" }}
                    />
                    {/* <img className="avatar" alt="aima" src="./assets/images/avatar.svg" /> */}
                    <span className="customerId"> Customer ID: #1241</span>
                    <br />

                    <div className="rate">
                      <section>
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                      </section>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    "5 Stars all the way...."In January, I returned to school
                    and received a perfect score on the assignment. Thank you a
                    lot! I feel he realy put in a great deal of work to help in
                    doing my assignment &nbsp;&nbsp;
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"> 2-February-2022</small>
                </Card.Footer>
              </Card>
            </Tilt>
          </div>
          <div className="col-md-4">
            {" "}
            <Tilt
              style={{ border: "none" }}
              options={{
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1,
              }}
            >
              <Card className="cardSection">
                <Card.Body>
                  <Card.Title>
                    <FaQuoteLeft
                      style={{ fontSize: "40px", color: "#00D4FF" }}
                    />
                    {/* <img className="avatar" alt="aima" src="./assets/images/avatar.svg" /> */}
                    <span className="customerId"> Customer ID: #1333</span>
                    <br />

                    <div className="rate">
                      <section>
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                      </section>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    Lifesaver! Right before my exam, he helped me comprehend
                    business law! The teacher is excellent. I'd work with him
                    again if the opportunity arose. <br/><br/>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"> 8-February-2022</small>
                </Card.Footer>
              </Card>
            </Tilt>
          </div>
          <div className="col-md-4">
            {" "}
            <Tilt
              style={{ border: "none" }}
              options={{
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1,
              }}
            >
              <Card className="cardSection">
                <Card.Body>
                  <Card.Title>
                    <FaQuoteLeft
                      style={{ fontSize: "40px", color: "#00D4FF" }}
                    />
                    {/* <img className="avatar" alt="imageAsset" src="./assets/images/avatar.svg" /> */}
                    <span className="customerId"> Customer ID: #0933</span>
                    <br />

                    <div className="rate">
                      <section>
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                        <BsFillStarFill className="rate" />
                      </section>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    I highly recommend, I received a 22 out of 25 on the
                    assignment. Sir, many thanks! Working with you was a
                    pleasure. <br/><br/><br/>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"> 16-February-2022</small>
                </Card.Footer>
              </Card>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};
