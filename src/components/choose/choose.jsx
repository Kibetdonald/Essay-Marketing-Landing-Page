import React from "react";
import "./style.css";
import { BsCaretRightFill, BsFillPinFill } from "react-icons/bs";
// import Fade from "react-reveal/Fade";

export const Choose = () => {
  return (
    <div id="services" className="choosediv">
      <section class="features" id="services">
        <div class="container1">
          <h2 class="h2 section-title">Awesome Services</h2>

          <p class="section-text">
            Our services are tailored to ensure that our clients get the best
            grades in all their assignments.
          </p>
          <br />
          <div class="features-wrapper">
            <figure class="features-banner">
              <img src="./assets/images/2.svg" width="80%" alt="svg" />
            </figure>

            <div class="features-content">
              <p class="features-content-subtitle">
                <BsFillPinFill style={{ color: "#008dc9" }} />

                <span>SECURE GRADES</span>
              </p>

              <h3 class="features-content-title">
                <strong>Every order has it's story</strong>
              </h3>

              <p class="features-content-text">
                We have writting experts on board who ensure that you get
                quality work that guarantees your academic success. We offer
                incredible services at budget-friendly prices to our valuable
                clients.
              </p>

              <ul class="features-list">
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    We offer an impressive range of academic services.
                  </p>
                </li>

                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    We have writer that are profecient in all subjects and
                    academic levels; .
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    Our writers can fastly-done assignments without compromising
                    the quality of the paper.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="features-wrapper">
            <figure class="features-banner">
              <img src="./assets/images/1.svg" width="80%" alt="svg" />
            </figure>

            <div class="features-content">
              <p class="features-content-subtitle">
                <BsFillPinFill style={{ color: "#008dc9" }} />

                <span>ENDLESS BENEFITS</span>
              </p>

              <h3 class="features-content-title">
                <strong>
                  Professional essay help from experienced writers.
                </strong>
              </h3>

              <p class="features-content-text">
                We have the best of the best writers at your disposal with on a
                click of a button. our essay service provides fast and quality
                24/7 writing support that includes not only countless benefits
                and guarantees but also offers some free features.
              </p>

              <ul class="features-list">
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    We offer unlimited free revisions to our clients.
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    We offer accurate and itations that are below five years.
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#008dc9" }} />
                    We also offer free formating for our clients as per paper
                    specifications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
