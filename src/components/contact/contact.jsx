import React from "react";
import "./style.css";
import emailjs from "emailjs-com";
import { FaTelegramPlane } from "react-icons/fa";

export const Contact = () => {
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
    <div id="contact" className="contact">
      <div className="container1">
        <h2 class="h2 section-title">Contact Us</h2>
        <p class="section-text">
          Contact us and we shall make sure to reach back to you in the earliest
          convinience.
        </p>
      </div>
      <br />

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
          Send Message <FaTelegramPlane style={{ fontSize: "16px" }} />
        </button>
      </form>
    </div>
  );
};
