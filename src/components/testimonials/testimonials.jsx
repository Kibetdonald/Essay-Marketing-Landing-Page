import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  MdStar,
  MdFormatQuote,
  MdStarOutline,
  MdStarHalf,
} from "react-icons/md";
import { Row, Col, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Testimonials() {
  return (
    <div id="Testimonials" className="TestimonialsSection">
      <Fade top>
        <div className="container1">
          <h2 class="h2 section-title">What Our Clients Say</h2>
          <p class="section-text">
            Below are some of the recent comments from our clients regarding the
            services we've offered to them.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            500: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          // centeredSlides={true}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide style={{ height: "350px" }}>
            <div style={{ height: "300px" }}>
              <Card className="cardSection" style={{ marginTop: "1.5em" }}>
                <Row>
                  <Col>
                    <Card.Body>
                      <div class="numberCircle">
                        <MdFormatQuote
                          style={{ color: "#005987", fontSize: "22px" }}
                        />
                      </div>
                      <Card.Title>
                        <Row>
                          <Col className="clientId">Client ID=98</Col>
                          <Col className="date">Feb 13, 2022</Col>
                        </Row>
                        <br />
                      </Card.Title>
                      <Card.Text>
                        <p className="sayings">
                          "Thank you very much for all of your assistance. This
                          was my final paper before I graduate with my MBA. I
                          never expected to need a service like this, but the
                          amount of work I was assigned was just too much. I
                          can't express my gratitude enough for all of your
                          assistance." &nbsp;
                        </p>
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStarHalf className="rate" />
                          </section>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted"> Type: Research Paper</small>
                </Card.Footer>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "350px" }}>
            <div style={{ height: "300px" }}>
              <Card className="cardSection" style={{ marginTop: "1.5em" }}>
                <Row>
                  <Col>
                    <Card.Body>
                      <div class="numberCircle">
                        <MdFormatQuote
                          style={{ color: "#005987", fontSize: "22px" }}
                        />
                      </div>
                      <Card.Title>
                        <Row>
                          <Col className="clientId">Client ID=103 </Col>
                          <Col className="date">March 01, 2022</Col>
                        </Row>
                        <br />
                      </Card.Title>
                      <Card.Text>
                        <p className="sayings">
                          "5 Stars all the way...."In January, I returned to
                          school and received a perfect score on the assignment.
                          Thank you a lot! I feel he realy put in a great deal
                          of work to help in doing my assignment " &nbsp;
                        </p>
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStarOutline className="rate" />
                          </section>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted"> Type: Research Paper</small>
                </Card.Footer>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "350px" }}>
            <div style={{ height: "300px" }}>
              <Card className="cardSection" style={{ marginTop: "1.5em" }}>
                <Row>
                  <Col>
                    <Card.Body>
                      <div class="numberCircle">
                        <MdFormatQuote
                          style={{ color: "#005987", fontSize: "22px" }}
                        />
                      </div>
                      <Card.Title>
                        <Row>
                          <Col className="clientId">Client ID=142</Col>
                          <Col className="date">April 09, 2022</Col>
                        </Row>
                        <br />
                      </Card.Title>
                      <Card.Text>
                        <p className="sayings">
                          "Lifesaver! Right before my exam, he helped me
                          comprehend business law! The teacher is excellent. I'd
                          work with him again if the opportunity arose.!!"
                          &nbsp;
                        </p>
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                          </section>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted"> Type: Research Paper</small>
                </Card.Footer>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "350px" }}>
            <div style={{ height: "300px" }}>
              <Card className="cardSection" style={{ marginTop: "1.5em" }}>
                <Row>
                  <Col>
                    <Card.Body>
                      <div class="numberCircle">
                        <MdFormatQuote
                          style={{ color: "#005987", fontSize: "22px" }}
                        />
                      </div>
                      <Card.Title>
                        <Row>
                          <Col className="clientId">Client ID= 168</Col>
                          <Col className="date">April 23, 2022</Col>
                        </Row>
                        <br />
                      </Card.Title>
                      <Card.Text>
                        <p className="sayings">
                          "I highly recommend, I received a 22 out of 25 on the
                          assignment. Sir, many thanks! Working with you was a
                          pleasure!."&nbsp;
                        </p>
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStarOutline className="rate" />
                          </section>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted"> Type: Research Paper</small>
                </Card.Footer>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "350px" }}>
            <div style={{ height: "300px" }}>
              <Card className="cardSection" style={{ marginTop: "1.5em" }}>
                <Row>
                  <Col>
                    <Card.Body>
                      <div class="numberCircle">
                        <MdFormatQuote
                          style={{ color: "#005987", fontSize: "22px" }}
                        />
                      </div>
                      <Card.Title>
                        <Row>
                          <Col className="clientId">Client ID=191</Col>
                          <Col className="date">May 03, 2022</Col>
                        </Row>
                        <br />
                      </Card.Title>
                      <Card.Text>
                        <p className="sayings">
                          "I've received the exam results. A score of 94 out of
                          100 is good and corresponds to the first exam which
                          you also did. Your comprehension is exceptional, and
                          your expertise is unquestionable." &nbsp;
                        </p>
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                          </section>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted"> Type: Final exam</small>
                </Card.Footer>
              </Card>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
}
