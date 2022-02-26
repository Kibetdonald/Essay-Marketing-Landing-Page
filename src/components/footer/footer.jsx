import React from "react";
import "./style.css";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <center>
      <div className="footerContainer">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/#">About Us</a>
              </li>
              <li className="footerLinks">
                <a href="/#">Services</a>
              </li>
              <li className="footerLinks">
                <a href="/#">Reviews</a>
              </li>
              <li className="footerLinks">
                <a href="/#">FAQ</a>
              </li>
              <li className="footerLinks">
                <a href="/#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            {" "}
            <h3>Services Offered</h3>
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
                <a href="/#">Online Classes</a>
              </li>
              <li className="footerLinks">
                <a href="/#">Discussion Boards</a>
              </li>
              <li className="footerLinks">
                <a href="/#"> Proofreading service</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            {" "}
            <h3>Popular Services</h3>
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

          <div className="col-md-3">
            <h3>Social Media</h3>
            <div className="socialMedia">
              <a
                href="https://mail.google.com/mail/u/your@email.com/#inbox?compose=new&to=blahblah@gmail"
                rel="noreferrer"
                target="_blank"
              >
                <SocialIcon
                  network="google"
                  style={{ height: 25, width: 25 }}
                />
              </a>
              &nbsp;
              <a
                href="https://vm.tiktok.com/ZSJt7fttw/"
                rel="noreferrer"
                target="_blank"
              >
                <SocialIcon
                  network="tiktok"
                  style={{ height: 25, width: 25 }}
                />
              </a>
              &nbsp;
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
              <br />
              <SocialIcon
                className="socialmedialinks"
                target="_blank"
                rel="noreferrer"
                network="instagram"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;
              <SocialIcon
                className="socialmedialinks"
                target="_blank"
                rel="noreferrer"
                network="twitter"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;
              <SocialIcon
                className="socialmedialinks"
                target="_blank"
                rel="noreferrer"
                network="linkedin"
                style={{ height: 25, width: 25 }}
              />
            </div>
          </div>
        </div>
        <hr className="vr4"/>
        <div className="Copyright">
          <p>ESSAYS | POWERPOINT | ONLINE TUTORING | EXAMS |</p>
          <span>Copyright 2021 Essaysbykirsten, All rights reserved. </span>
          <br /> <br />
        </div>
      </div>
    </center>
  );
};
