import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page-bg">
      <div className="contact-banner-img">
        <img src="/wallpaper.jpeg" alt="WisKnowledge Banner" />
      </div>
      <h1 className="contact-title">Contact Us</h1>
    
      <p className="contact-intro">
        Need an expert? You are more than welcome to leave your contact info and we will be in touch shortly.
      </p>
      <div className="contact-columns">
        <div className="contact-col">
          <FaMapMarkerAlt className="contact-icon" />
          <h6>Visit Us</h6>
          <h6>Incubation Center, IIUI New Campus<br />Islamabad, Pakistan</h6>
        </div>
        <div className="contact-col">
          <FaPhoneAlt className="contact-icon" />
          <h6>Call Us</h6>
          <h6>(+92)-3369859980</h6>
        </div>
        <div className="contact-col">
          <FaEnvelope className="contact-icon" />
          <h6>Email Us</h6>
          <h6>wisknowledgeconsultancy@gmail.com</h6>
        </div>
      </div>
    </div>
  );
}

