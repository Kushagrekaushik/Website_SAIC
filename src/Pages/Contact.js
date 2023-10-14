import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contentc">
        <h2>Contact us</h2>
        <p>We're delighted to hear from you. Whether you have questions, suggestions, or want to collaborate, we're here to help. Your input is vital as we build a vibrant connection between students and alumni at Thapar Institute of Engineering and Technology, Patiala.

          For inquiries about SAIC and its initiatives, reach us via email or phone. Our team is ready to provide info and address your queries. Alumni looking to contribute, share experiences, or connect with students can contact our alumni team.

          Stay updated on events, workshops, and seminars by connecting with our events team. To explore partnerships or collaborations, get in touch with our partnerships team. Your creative ideas fuel our network of students, alumni, and professionals.

          We value your feedback! Share suggestions to enhance our initiatives or the SAIC website with our feedback team. For the latest SAIC updates, follow us on social media, where we share success stories and event news.

          Thanks for visiting! Let's create a thriving ecosystem of knowledge, mentorship, and growth together in our Thapar community.
        </p>
      </div>
      <div className="containerc">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>TIET,<br />Patiala,<br />Punjab</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>saic@thapar.edu</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required" />
              <span>Type your message</span>
            </div>
            <div className="inputBox">
              <input type="Submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
