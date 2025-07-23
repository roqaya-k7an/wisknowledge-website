import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="wk-footer" id="footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <h3 className="footer-brand">WisKnowledge</h3>
          <p className="footer-tagline">
            A service-oriented startup offering smart solutions for students and
            professionals. Knowledge with Wisdom – our commitment to clarity, trust,
            and value-driven consultancy services.
          </p>
          <p><FaMapMarkerAlt className="footer-icon" /> Suite -4 BIC IIU H-10 Islamabad</p>
          <p><FaEnvelope className="footer-icon" /> wisknowledgeconsultancy@gmail.com</p>
          <p><FaPhone className="footer-icon" /> +92 336 9859980</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100090947373976" target="_blank" rel="noopener noreferrer">
  <FaFacebookF />
</a>

            <a href="https://www.instagram.com/wisknowledge_consultancy" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/923369859980" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="footer-col nav-col quick-links">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#trainers">Trainers</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faqs">FAQs</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-col nav-col services-col">
          <h4 className="footer-heading">Our Services</h4>
          <div className="footer-nav">
            <a href="#ielts">IELTS Coaching</a>
            <a href="#english">Spoken English</a>
            <a href="#workshop">Strategic Study Management Workshop</a>
            <a href="#camp">Strategic Summer Camp for Kids</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        ©️ 2025 WisKnowledge Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
