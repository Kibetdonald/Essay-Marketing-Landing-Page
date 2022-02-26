import React from 'react'
import './style.css'
import emailjs from 'emailjs-com';
import { FaTelegramPlane } from "react-icons/fa";

export const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hamp745', 'mytemplates', e.target, 'user_mXPiDCaihK32SDnS4zVpj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div id="contact" className="contact">
            <h3 className="topic">Contact Us</h3>
            <hr className="vr3"/>
            <br/>

            <form className="form-floating" onSubmit={sendEmail}>


                <div class="form-floating mb-3">
                    <input name="name" type="text" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input name="email" type="email" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-3">
                    <input name="subject" type="text" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Subject</label>
                </div>


                <div class="form-floating">
                    <textarea class="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                    <label for="floatingInput">Comments</label>
                </div>

                <button type="submit" className="sendMessage">Send Message <FaTelegramPlane style={{fontSize: "16px"}}/></button>


            </form>


        </div>
    )
}

