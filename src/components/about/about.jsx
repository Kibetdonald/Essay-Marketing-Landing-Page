import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import { BsAward, BsBook, BsQuestionDiamondFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import CountUp from "react-countup";
import CircleBlink from "react-circle-blink";
import "./responsive.css";

export const About = () => {
  return (
    <div id="about" className="about">
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <h3 style={{ color: "#005987", textAlign: "center" }}>
                <BsAward />{" "}
                <CountUp
                  style={{ fontSize: "18px" }}
                  start={0.4}
                  decimals={1}
                  duration={5}
                  end={9.7}
                />
                <span style={{ fontSize: "18px" }}>/10</span>
              </h3>
              <p style={{ textAlign: "center" }}> Average Quality Score</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="card">
            <div className="card-body">
              <h3 style={{ color: "#005987", textAlign: "center" }}>
                <BsFillPeopleFill />
                <CountUp style={{ fontSize: "18px" }} duration={5} end={100} />
                <br />
              </h3>
              <p style={{ textAlign: "center" }}>Orders delivered on time</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="card">
            <div className="card-body">
              {" "}
              <h3 style={{ color: "#005987", textAlign: "center" }}>
                <BsFillPersonCheckFill />{" "}
                <CountUp style={{ fontSize: "18px" }} duration={5} end={87} />{" "}
                <br />
              </h3>
              <p style={{ textAlign: "center" }}>
                Clients{" "}
                <CircleBlink
                  style={{ height: "5px", width: "5px" }}
                  color="green"
                />
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="card-body">
              {" "}
              <h3 style={{ color: "#005987", textAlign: "center" }}>
                {" "}
                <BsBook />
                &nbsp;
                <BsStopwatch
                  style={{ fontSize: "18px" }}
                  duration={5}
                  end={2}
                />{" "}
                <br />
              </h3>
              <p style={{ textAlign: "center" }}> Average response time</p>
            </div>
          </div>
        </Col>
      </Row>
      <section class="aboutSection">
        <h2 class="h2 section-title">About Us</h2>

        <p class="section-text">
          We have the best products to suit all your need and visit the link
          below for more information.
        </p>

        <div class="container1">
          <div class="about-content">
            <div class="about-icon">
              <BsQuestionDiamondFill />
            </div>

            <h2 class="h2 about-title">Why Choose Us ?</h2>

            <p class="about-text">The services we offer are uniquely designed at our clients in mind. We give you the best 
            services for less!!</p>
          </div>

          <ul class="about-list">
            <li>
              <div class="about-card">
                <div class="card-icon">
                  <img
                    src="./assets/images/time.svg"
                    alt="svg"
                    widht="34"
                    height="34px"
                  />
                </div>

                <h3 class="h3 card-title"> Quick Turnaround</h3>

                <p class="card-text">
                  Is there a deadline approaching? Finish your paper in 6 hours
                  or less. Send us a message in chat and we'll get right on it.
                </p>
              </div>
            </li>

            <li>
              <div class="about-card">
                <div class="card-icon">
                  <img
                    src="./assets/images/report.svg"
                    alt="svg"
                    widht="34"
                    height="34px"
                  />
                </div>

                <h3 class="h3 card-title"> Free Turnitin Report</h3>

                <p class="card-text">
                  A Turnitin plagiarism report can be added to your order to
                  verify the originality of your paper.
                </p>
              </div>
            </li>

            <li>
              <div class="about-card">
                <div class="card-icon">
                  <img
                    src="./assets/images/support.svg"
                    alt="svg"
                    widht="34"
                    height="34px"
                    className="rediish"
                  />
                </div>

                <h3 class="h3 card-title">24/7 Support</h3>

                <p class="card-text">
                  You can contact us any time of day and night with any
                  questions; we'll always be happy to help you out.
                </p>
              </div>
            </li>

            <li>
              <div class="about-card">
                <div class="card-icon">
                  <img
                    src="./assets/images/revision.svg"
                    alt="svg"
                    widht="34"
                    height="34px"
                  />
                </div>

                <h3 class="h3 card-title"> Unlimited Revision</h3>

                <p class="card-text">
                  {" "}
                  All changes are completely free of charge. Request changes,
                  and you'll have them in no time!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
