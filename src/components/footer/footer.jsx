import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./style.css";
import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="FooterSection">
      <footer className="footer">
        <ScrollToTop
          component={<FaArrowUp />}
          style={{
            color: "#005987",
            fontSize: "30px",
            boxShadow: 'none',
            width: "0px",
            height: "0px",
            paddingBottom: "1em",
            paddingRight: "1.0em",
            backgroundColor: "transparent",
          }}
          smooth
        />
        <div className="container">
          {/* Assuming the footer section starts here */}
          <Fade bottom>
            <div className="footer-section">
              <div className="footer-col">
                <h4>Get Started</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Services Offered</h4>
                <ul>
                  <li className="footerLinks">
                    <a href="/#">Essay Writing</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Online Tutoring</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Exams</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Discussion Boards</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#"> Proofreading service</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Popular Services</h4>
                <ul>
                  <li className="footerLinks">
                    <a href="/#">Coursework Help</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Thesis Assistance</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Dissertation Writing</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Term Paper Writing</a>
                  </li>
                  <li className="footerLinks">
                    <a href="/#">Custom Writing</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Reach out to us</h4>
                <div className="social-links">
                  <a
                    href="https://mail.google.com/mail/u/your@email.com/#inbox?compose=new&to=blahblah@gmail"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <SocialIcon
                      network="google"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>

                  <a
                    href="https://wa.me/message/44JRXDZBFGE7E1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <SocialIcon
                      network="whatsapp"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a
                    href="https://vm.tiktok.com/ZSJt7fttw/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <SocialIcon
                      network="tiktok"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a
                    href="https://wa.me/message/44JRXDZBFGE7E1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <SocialIcon
                      network="instagram"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <SocialIcon
                      network="linkedin"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <SocialIcon
                      network="twitter"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Footer section ends here */}
          <Fade bottom>
            <div className="SubLandingPageFooter">
              <br/>
              <hr style={{width: "80%", margin: 'auto', border: '0.5px solid #bbb' }}/>
              <br/>
              <p className="textOne">
              ESSAYS | POWERPOINT | ONLINE TUTORING | EXAMS |
              </p>
              <p className="textTwo">
                © 2022 Copyright Essaysbykirsten. All Rights Reserved.
              </p>
            </div>
          </Fade>
        </div>
      </footer>
    </div>
  );
};
