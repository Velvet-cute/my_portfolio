import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../Assets/walmart.png';
import Adobe from '../../Assets/adobe.png';
import Microsoft from '../../Assets/microsoft.png';
import Facebook from '../../Assets/facebook.png';
import FacebookIcon from "../../Assets/facebook-icon.png";
import TwitterIcon from "../../Assets/twitter.png";
import YouTubekIcon from "../../Assets/youtube.png";
import InstagramIcon from "../../Assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fyjstdy', 'template_3sokufq', form.current, {
        publicKey: 'VwtCxbj3bn_I_2q0V',
      })
      .then(
        () => {
            e.target.reset();
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    These are my recents clients. I am very happy for the opportunities and benefits that they give to me even if I am an entry level experience.
                    I am forever grateful to them, I hope I always satisfy them to give me chance to improve myself.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below if you are interested to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" rows="5" placeholder="Your Message" name="message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={TwitterIcon} alt="Twitter" className="link"/>
                        <img src={YouTubekIcon} alt="YouTube" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;