import React from "react";
import "./style.css";
import { BsCaretRightFill } from "react-icons/bs";

export const Choose = () => {
  return (
    <div id="services" className="choosediv">
      <section class="features" id="features">
        <div class="container1">
          <h2 class="h2 section-title">Awesome Services</h2>

          <p class="section-text">
            We have the best products to suit all your need and visit the link
            below for more information.
          </p>

          <div class="features-wrapper">
            <figure class="features-banner">
              <img src="./assets/images/5.svg" width="80%" alt="svg" />
            </figure>

            <div class="features-content">
              <p class="features-content-subtitle">
                <ion-icon name="sparkles"></ion-icon>

                <span>SECURE GRADES</span>
              </p>

              <h3 class="features-content-title">
                <strong>Every order has it's story</strong>
              </h3>

              <p class="features-content-text">
                We have writting experts on board who ensure that you you get
                quality work that guarantees your academic success. We offer
                5-star services at budget-friendly prices to our valuable
                customers.
              </p>

              <ul class="features-list">
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We have the best products to suit all your need and visit
                    the link below for more information.
                  </p>
                </li>

                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We have the best products to suit all your need and visit
                    the link below for more information.
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We have the best products to suit all your need and visit
                    the link below for more information.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="features-wrapper">
            <figure class="features-banner">
              <img src="./assets/images/2.svg" width="80%" alt="svg" />
            </figure>

            <div class="features-content">
              <p class="features-content-subtitle">
                <ion-icon name="sparkles"></ion-icon>

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
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We offer unlimited free revisions to our clients.
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We offer accurate and itations that are below five years.
                  </p>
                </li>
                <li class="features-list-item">
                  <p>
                    <BsCaretRightFill style={{ color: "#005987" }} />
                    We also offer free formating for our clients.
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
