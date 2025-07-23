import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subheading">
          We’re here to guide, support, and inspire. Reach out through any of the channels below — your journey starts with a conversation.
        </p>

        <div className="contact-cards">
          <a
            className="contact-card"
            href="mailto:wisknowledgeconsultancy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-circle"><FaEnvelope /></div>
            <h3>Email Us</h3>
            <p>wisknowledgeconsultancy@gmail.com</p>
          </a>

          <a
            className="contact-card"
            href="https://wa.me/923369859980"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-circle"><FaPhoneAlt /></div>
            <h3>Call / WhatsApp</h3>
            <p>+92 336 9859980</p>
          </a>

          <a
            className="contact-card"
            href="https://www.google.com/maps?q=Suite+-4+BIC+IIU+H-10+Islamabad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <h3>Visit Us</h3>
            <p>Suite -4 BIC IIU H-10<br />Islamabad</p>
          </a>

          <a
            className="contact-card"
            href="https://www.facebook.com/profile.php?id=100090947373976"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-circle"><FaFacebook /></div>
            <h3>Facebook</h3>
            <p>Follow us on Facebook</p>
          </a>

          <a
            className="contact-card"
            href="https://instagram.com/wisknowledge_consultancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-circle"><FaInstagram /></div>
            <h3>Instagram</h3>
            <p>Explore our journey on Instagram</p>
          </a>
        </div>
      </div>
    </section>
  );
}
